/* eslint-disable no-unused-vars */
import React from 'react'
import './MainSection.css'
import MainCard from '../MainCard/MainCard'
import LeftRectangle from '../LeftRectangle/LeftRectangle'
import RightRectangle from '../RightRectangle/RightRectangle'
import { Link } from 'react-router-dom'

const MainSection = () => {

  return (
    <>
      <div className='pooragadbadstructuretha'>
        <div>
          <LeftRectangle />
        </div>
        <div className='column'>
          <div className="row1">
            <div className="box r1">
              <div className="glass-overlay g1">
              </div>
              <div className="card-inner">
                <div className="card-front">
                  <div className="card-content">
                    <Link to='/resource-development-lab'><MainCard text={"   RESOURCE     DEVELOPMENT \n            LAB "} /></Link>
                  </div>
                </div>
                <div className="card-back"></div>
              </div>
            </div>
            <div className="box r2">
              <div className="glass-overlay g2"></div>
              <div className="card-inner">
                <div className="card-front">
                  <div className="card-content">
                    <MainCard text={"      SPEECH  PROCESSING \n          LAB"} />
                  </div>
                </div>
                <div className="card-back"></div>
              </div>
            </div>
            {/* <div className="box"><MainCard text={"Dictionaries"}/></div>
        </div> */}
          </div>
          <div className="row2">
            <div className="box r3">
              <div className="glass-overlay g3">
              </div>
              <div className="card-inner">
                {/* <img src={assets.rdl} alt="" /> */}
                <div className="card-front">
                  {/*  <img src={assets.rdl} alt="" /> */}
                  <div className="card-content">
                    <MainCard text={"    HERITAGE      COMPUTING \n         LAB"} />
                    {/* <img src={assets.rdl} alt="" /> */}
                  </div>
                </div>
                <div className="card-back"></div>
              </div>
            </div>
            <div className="box r4">
              <div className="glass-overlay g4"></div>
              <div className="card-inner">
                <div className="card-front">
                  <div className="card-content">
                    <MainCard text={"        POETRY  THERAPEUTICS \n            LAB "} />
                  </div>
                </div>
                <div className="card-back"></div>
              </div>
            </div>
            {/* <div className="box"><MainCard text={"Tools and Documentations"}/></div>
          <div className="box"><MainCard text={"Others.."}/></div> */}
          </div>
        </div>
        <div>
          <RightRectangle />
        </div>
      </div>
      <div className='mobile_cards'>
        <div className='column'>
          <div className="row1">
            <div className="box r1">
              <div className="glass-overlay g1">
              </div>
              <div className="card-inner">
                <div className="card-front">
                  <div className="card-content">
                    <Link to='/home/RDL'><MainCard text={"   RESOURCE     DEVELOPMENT \n            LAB "} /></Link>
                  </div>
                </div>
                <div className="card-back"></div>
              </div>
            </div>
            <div className="box r2">
              <div className="glass-overlay g2"></div>
              <div className="card-inner">
                <div className="card-front">
                  <div className="card-content">
                    <MainCard text={"      SPEECH  PROCESSING \n          LAB"} />
                  </div>
                </div>
                <div className="card-back"></div>
              </div>
            </div>
            {/* <div className="box"><MainCard text={"Dictionaries"}/></div>
        </div> */}
          </div>
          <div className="row2">
            <div className="box r3">
              <div className="glass-overlay g3">
              </div>
              <div className="card-inner">
                {/* <img src={assets.rdl} alt="" /> */}
                <div className="card-front">
                  {/*  <img src={assets.rdl} alt="" /> */}
                  <div className="card-content">
                    <MainCard text={"    HERITAGE      COMPUTING \n         LAB"} />
                    {/* <img src={assets.rdl} alt="" /> */}
                  </div>
                </div>
                <div className="card-back"></div>
              </div>
            </div>
            <div className="box r4">
              <div className="glass-overlay g4"></div>
              <div className="card-inner">
                <div className="card-front">
                  <div className="card-content">
                    <MainCard text={"        POETRY  THERAPEUTICS \n            LAB "} />
                  </div>
                </div>
                <div className="card-back"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mobile_left'>
        <LeftRectangle />
      </div>
      <div className='mobile_right'>
        <div className='right-rectangle'>
          <RightRectangle />
        </div>
      </div>
    </>
  )
}

export default MainSection