import React, { useState, useEffect } from 'react'
import './Carousel.css'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import 'react-slideshow-image/dist/styles.css'


const Carousel = ({ data }) => {

  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  }
  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  }

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide()
    }, 2500);
    return () => clearInterval(slideInterval);
  }, [slide]);

  return (
    <div className='slide-container'>
      <BsArrowLeftCircleFill className='arrow arrow-left' onClick={prevSlide} />
      {data.map((item, index) => {
        return <img src={item.src} alt={item.alt} key={index} className={slide === index ? "slide" : "slide slide-hidden"} />
      })}
      <BsArrowRightCircleFill className='arrow arrow-right' onClick={nextSlide} />
      <span className='indicators'>
        {data.map((_, index) => {
          return <button key={index} onClick={() => setSlide(index)} className={slide === index ? "indicator" : "indicator indicator-inactive"}></button>
        })}
      </span>
    </div>
  )
}

export default Carousel
