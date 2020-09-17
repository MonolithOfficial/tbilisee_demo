import React from 'react';
import Swiper from 'react-id-swiper';
import Image from '../Assets/Images/rooms-swiper.jpg';

const Navigation = (props) => {
  const params = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }
  return (
    <Swiper {...params}>
        {
            props.array.map((item,index) => <div>
              <div className="background-image__cover height full" style={{backgroundImage: `url(${Image})`}}/>
              </div>)
        }
      

    </Swiper>
  )
};
export default Navigation;