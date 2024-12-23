// eslint-disable-next-line no-unused-vars
import React from 'react'
import style from './Skills.module.css'
import { ProgressBar } from 'react-bootstrap'

export default function Skills() {
  return (
    <div className={`${style.skillsSection}`}>
        <div className="container-lg   mt-5 pt-5">
          <div className="row m-5">
            <div className="col-md-12 m-5">
              <div className={``}>
                <p className={`${style.skillsTittle}`}>MY SPECIALTY</p>
                <h3 className={`${style.skillsHeading}`}>MY SKILLS</h3>
                <p className={`${style.skillsText}`}>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.

                </p>

              </div>
            </div>
            <div className="col-md-12 col-lg-6 ">
              <div className="mx-2">
                 <label className='my-2 ' htmlFor="">Photoshop</label>
                <ProgressBar  className='my-2' variant="info" now={75} label={`75%`}  />
              </div>
            </div>
            <div className="col-md-12 col-lg-6 ">
              <div className="mx-2">
                 <label className='my-2' htmlFor="">jQuery</label>
                <ProgressBar  className='my-2' variant="danger" now={60} label={`60%`}  />
              </div>
            </div>
            <div className="col-md-12 col-lg-6 ">
              <div className="mx-2">
                 <label className='my-2' htmlFor="">HTML5</label>
                <ProgressBar  className='my-2' variant="warning" now={85} label={`85%`}  />
              </div>
            </div>
            <div className="col-md-12 col-lg-6 ">
              <div className="mx-2">
                 <label className='my-2' htmlFor="">CSS3</label>
                <ProgressBar  className='my-2' variant="info" now={90} label={`90%`}  />
              </div>
            </div>
            <div className="col-md-12 col-lg-6 ">
              <div className="mx-2">
                 <label className='my-2' htmlFor="">WordPress</label>
                <ProgressBar  className='my-2' variant="success" now={70} label={`70%`}  />
              </div>
            </div>
            <div className="col-md-12 col-lg-6 ">
              <div className="mx-2">
                 <label className='my-2' htmlFor="">SEO</label>
                <ProgressBar  className='my-2' variant="warning" now={80} label={`80%`}  />
              </div>
            </div>
          
          </div>
        </div>
    </div>
  )
}
