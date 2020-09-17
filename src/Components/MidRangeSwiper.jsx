import React, { useRef } from 'react';
import Swiper from 'react-id-swiper';

// CSS
import 'swiper/swiper.scss';
import '../Styles/costumiseSwiper.scss';
import Image from "../Assets/Images/landing-swiper.jpg"
import "../Styles/common.scss";



  const ManipulatingComponentOutSideSwiper = (props) => {
    const params = {
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
        navigation:      {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        centeredSlides: true,
        spaceBetween:    props.spaceBetween,
        slidesPerView:   props.slidesPerView,
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
      <div className="relative luxury-swiper__wr">
        <Swiper ref={swiperRef} {...params} className="luxury-swiper__container">
          
            
            <div>
              <img src={Image} className="luxury-swiper__img" alt="midRange"/>
          </div>
          <div>
              <img src={Image} className="luxury-swiper__img" alt="midRange"/>
          </div>
          <div>
              <img src={Image} className="luxury-swiper__img" alt="midRange"/>
          </div>
            
               
        </Swiper>
        <div className="absolute luxury-swiper__controller">
            <div className="swiper-pagination swiper-pagination-progressbar">
                <span className="swiper-pagination-progressbar-fill"></span>
            </div>
            <button onClick={goPrev} className="luxury-prev"></button>
            <button onClick={ goNext } className="luxury-next"></button>
        </div>
      </div>
    );
  };
  export default ManipulatingComponentOutSideSwiper;
 