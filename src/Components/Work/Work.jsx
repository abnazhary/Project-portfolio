// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Nav } from 'react-bootstrap'
import "./Work.css"
import img1 from "../../assets/images/img-1-C4nS0eD8.jpg"
import img2 from "../../assets/images/img-2-D-4H1m4L.jpg"
import img3 from "../../assets/images/img-3-pR2ZEVY9.jpg"
import img4 from "../../assets/images/img-4-tHccITd-.jpg"
import img5 from "../../assets/images/img-5-lAucr__a.jpg"
import img6 from "../../assets/images/img-6-DFW03AZ3.jpg"

export default function Work() {
  return (
    <div id='work ' className="container py-5  ">
      
      <div className='navs '>
      <p className='experinceTittle'>MY WORK</p>
      <h2 className='experinceHeading'>RECENT WORK</h2>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Graphic Designer</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Apps</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Software</button>
  </li>
  
</ul>
<div className="tab-content" id="myTabContent">
  <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
    <div className="container">
      <div className="row">
        
        <div className="col-md-6">
          <div className="image py-3">
          <img src={img1} className='' alt="" />
          </div>
        </div>

        <div className="col-md-6">
          <div className="image py-3 ">
          <img src={img2} className='' alt="" />
          </div>
        </div>

        <div className="col-md-6">
          <div className="image py-3 ">
          <img src={img3} className='' alt="" />
          </div>
        </div>

        <div className="col-md-6">
          <div className="image py-3 ">
          <img src={img4} className='' alt="" />
          </div>
        </div>
        
      </div>
    </div>
  </div>
  <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
  <div className="container">
      <div className="row">
        
        <div className="col-md-6">
          <div className="image py-3">
          <img src={img1} className='' alt="" />
          </div>
        </div>

        <div className="col-md-6">
          <div className="image py-3 ">
          <img src={img2} className='' alt="" />
          </div>
        </div>

        <div className="col-md-6">
          <div className="image py-3 ">
          <img src={img6} className='' alt="" />
          </div>
        </div>

        <div className="col-md-6">
          <div className="image py-3 ">
          <img src={img5} className='' alt="" />
          </div>
        </div>
        
      </div>
    </div>
  </div>
  <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex="0">
  <div className="container">
      <div className="row">
        
        <div className="col-md-6">
          <div className="image py-3">
          <img src={img5} className='' alt="" />
          </div>
        </div>

        <div className="col-md-6">
          <div className="image py-3 ">
          <img src={img6} className='' alt="" />
          </div>
        </div>

        <div className="col-md-6">
          <div className="image py-3 ">
          <img src={img3} className='' alt="" />
          </div>
        </div>

        <div className="col-md-6">
          <div className="image py-3 ">
          <img src={img4} className='' alt="" />
          </div>
        </div>
        
      </div>
    </div>
  </div>
</div>
    </div>
    </div>
  )
}
