  import React, {useRef} from 'react';
  import Swiper from 'react-id-swiper';
  const Navigation = (props) => {
    const params = {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
        loop: true
    }
    const {i18n} = props;
    const Tbilisee = 'https://core.tbilisee.ge/';
    const swiperRef = useRef(null);
    return (
        <>
      <Swiper ref={swiperRef} {...params}>
      {
          props.arrayDestination.map((item,index) => <div>
              <div className="destination-card" key={index}>
                      <h3>{(() => {
                    if (i18n.language === 'KA') {
                      return (
                        item.title_ge
                      )
                    } else if (i18n.language === 'RU') {
                      return (
                        item.title_ru
                      )
                    } else {
                      return (
                        item.title_en
                      )
                    }
      })()}</h3>
                  <div id="destination-main" className="background-full destination-card__image" style={{backgroundImage: `url(${Tbilisee + item.image})`}} onClick={() => props.toggleImage(item)}/>
                  {/* <img src={Tbilisee + item.image} className="destination-card__image" onClick={() => props.toggleImage(item)}/>  */}
                </div>
          </div>)
      }
      </Swiper>
      </>
    )
  };
  export default Navigation;