import React, { useRef, useState  } from 'react';
import Swiper from 'react-id-swiper';
import { Link } from 'react-router-dom';



const SwiperMain = (props) => {
  const [activeSlide, setActiveSlide] = useState('');
  const swiperRef = useRef(null);
  const params = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    on: {
      'init': (event) => {
        
        let len = props.arrayLandingRooms.length;
        let index = event.activeIndex%len;
        setActiveSlide(props.arrayLandingRooms[index].type_en)
      },
      'slideChange': (event) => {
        // setActiveSlide(props.arrayLandingRooms[event.activeIndex].type_en)
        let len = props.arrayLandingRooms.length;
        let index = event.activeIndex%len;
        setActiveSlide(props.arrayLandingRooms[index].type_en)       
      }
  },
      spaceBetween:    0,
      slidesPerView:   1,
      breakpoints: {
        768: {
          slidesPerView: 1.6,
          spaceBetween: 200
        },
        },
      centeredSlides: true,
      
  }
  const Tbilisee = 'https://core.tbilisee.ge/';
  
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
    <>
    <Swiper ref={swiperRef} {...params} className="landing-swiper__rooms 	swiper-container">
      {
        props.arrayLandingRooms.map((item,index) => 
        <div>
          <Link data-type = {`${item.type_en}`} to={`/rooms/${item.type_en}`}>
          <div className="background-image__cover full swiper-slide" style={{backgroundImage: `url(${Tbilisee + item.main_image})`}} key={index}></div>
          </Link>
          <h4>{item.type_en}</h4>
          </div>)
      }
    </Swiper>
    <div className="landing-swiper__controller">
    <button onClick={goPrev} className="landing-rooms__prev">prev</button>
    <div>      
      <div className="flex relative">
        <Link to={`/rooms/${activeSlide}`} className="landing-swiper__seemore">see more</Link>
        <Link to="/booking">book now</Link>
      </div>       
    </div>
    <button onClick={ goNext } className="landing-rooms__next">next</button>
</div>
</>
  )
};
export default SwiperMain;