import React, { useRef } from 'react';
import Swiper from 'react-id-swiper';

// CSS
import 'swiper/swiper.scss';
import '../Styles/costumiseSwiper.scss';
import Image from "../Assets/Images/landing-swiper.jpg"
import "../Styles/common.scss";



  const ManipulatingComponentOutSideSwiper = (props) => {
    const Tbilisee = "https://core.tbilisee.ge/";
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
        
            {
              props.arrayImg.map((image,index) =><div> <div className="background-image__cover height full" style={{backgroundImage: `url(${Tbilisee + image})`}}/> </div>)
            }
                   
        </Swiper>
        <div className="absolute luxury-swiper__controller">
            <button onClick={goPrev} className="luxury-prev"></button>
            <button onClick={ goNext } className="luxury-next"></button>
        </div>
      </div>
    );
  };
  export default ManipulatingComponentOutSideSwiper;
 