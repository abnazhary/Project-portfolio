// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Carousel } from 'react-bootstrap';
import style from "./Home.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import bg1 from "../../assets/images/img_bg_1-PzvG2r05.jpg";
import bg2 from "../../assets/images/img_bg_2-DzCs5o-0.jpg";
import { FaArrowCircleDown, FaPortrait } from 'react-icons/fa';

export default function Home() {
  return (
    <div className={`${style.homeSection}`}>
      <Carousel interval={3000} fade controls={false} indicators={false} pause={false}>
        <Carousel.Item className={`${style.caresoulItem}`}>
          <img
            className={`d-block w-100 vh-100`}
            src={bg1}
            alt="First slide"
          />
          <Carousel.Caption className={`${style.carouselCaption}`}>
            <h1>Hi! <br /> I am Abdelwahab</h1>
            <p>100% html5 bootstrap templates Made <br /> 
            By <a href="https://colorlib.com/">Colorlib.com</a></p>
            <button className={style.carouselButton}>
              Download CV <FaArrowCircleDown size={20} />
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className={`d-block w-100 vh-100`}
            src={bg2}
            alt="Second slide"
          />
          <Carousel.Caption className={`${style.carouselCaption}`}>
            <h1>I am <br /> a Frontend</h1>
            <p className='fw-lighter'>100% html5 bootstrap templates Made <br /> 
            By <a href="https://colorlib.com/">Colorlib.com</a></p>          
            <button className={style.carouselButton}>View portfolio <FaPortrait size={20} /></button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
