// eslint-disable-next-line no-unused-vars
import React from 'react'
import style from "./About.module.css"
import { FaDatabase, FaLightbulb, FaMobile } from 'react-icons/fa'
import { BiWorld } from 'react-icons/bi'

export default function About() {
  return (
    <div className={`${style.aboutSection}     `}>
      <div className={`${style.aboutContainer} my-5 py-5      `}> 
            <div className="row">
            <div className="cap  col-md-12   ">
              <p className={`${style.aboutTittle} `}>ABOUT US</p>
              <h3 className={`${style.aboutHeading} `}>WHO AM I?</h3>
              <p className={`${style.aboutText}`}> <span className='fw-bold'>Hi I am Abdelwahab Azhary</span> On her way she met a copy. The copy warned the 
                Little Blind Text, 
                that where it came from it would have <br /> been rewritten 
                a thousand times and everything that was left from its origin would be 
                the word and the Little Blind Text <br />
                should turn around and return to its own, 
                safe country.</p>
              <p className={`${style.aboutText}`}>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small <br />
                 line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.

                </p>

        </div>
              <div className="col-lg-3 col-md-6  py-2   ">
                 <div className={`${style.services1} p-2  bg-body z-0 shadow `}>
                    <FaLightbulb  size={30} className='my-2  text-info' />
                    <h4 >Graphic Design</h4>

                 </div>
              </div>
              <div className="col-lg-3 col-md-6  py-2  ">
                 <div className={`${style.services2} p-2  bg-body z-0 shadow ` }>
                 <BiWorld  size={30} className='my-2 text-danger' />
                    <h4>Web Designer</h4>

                 </div>
              </div>
              <div className="col-lg-3 col-md-6   py-2">
                 <div className={`${style.services3} p-2 bg-body z-0 shadow `}>
                 <FaDatabase size={30} className='my-2 text-warning'  />
                    <h4>Software</h4>

                 </div>
              </div>
              <div className="col-lg-3 col-md-6  py-2   ">
                 <div className={`${style.services4} p-2  bg-body z-0 shadow `}>
                 <FaMobile size={30} className={`${style.icon4} my-2`} />
                    <h4>Application</h4>

                 </div>
              </div>
            </div>
        

        

      </div>


    </div>
  )
}
