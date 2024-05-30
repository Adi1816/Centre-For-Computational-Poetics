import React from 'react'
import './Events.css'
import Event from '../../components/Event/Event'
import EventsCarousel from '../../components/EventsCarousel/EventsCarousel'
import { carouselData } from '../../assets/assets'
import Carousel from '../../components/Carousel/Carousel'

const Events = () => {
  return (
    <div className='events'>
      <Event title={"Summer Internship Programme 2024"} duration={"1st May 2024 to 30th June 2024"} />
      <Carousel data={carouselData.slides} />
    </div>
  )
}

export default Events