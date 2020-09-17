import React, { useRef } from 'react';
import Swiper from 'react-id-swiper';
import { Link } from 'react-router-dom';

// CSS
import 'swiper/swiper.scss';
import '../Styles/costumiseSwiper.scss';
import Image from "../Assets/Images/landing-swiper.jpg"



  const ManipulatingComponentOutSideSwiper = (props) => {
    const params = {
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
        navigation:      {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        centeredSlides: true,
        spaceBetween:    50,
        slidesPerView:   4,
        slidesPerColumn: 1,
        loop:            false,
        speed:           400,
    
    };
    const swiperRef = useRef(null);
    const goNext = () => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slideNext();
      }
    };
    const goPrev = () => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slidePrev();
      }
    };
    return (
      <div>
        <Swiper ref={swiperRef} {...params}>
          {
            props.rooms.map((room,index) => 
            <div>
            <img src={room.main_image} className="swiper-first__img" key={index}/>
            </div>)
          }
        </Swiper>
        <div className={props.swiperController}>
            <button onClick={goPrev} className={props.buttonPrevClass}>{props.prevButton} / <span>garden view</span></button>
                <div>
                    <h3>Mid-Range</h3>
                    <div className="flex">
                        <Link to="/rooms">SEE MORE</Link>
                        <Link to="/">BOOK NOW</Link>
                    </div>
                </div>
            <button onClick={ goNext } className={props.buttonNextClass}> <span>ciry view /</span> {props.nextButton} </button>
        </div>
      </div>
    );
  };
  export default ManipulatingComponentOutSideSwiper;