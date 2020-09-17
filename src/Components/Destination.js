
import React, { Component } from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// CSS
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss'
import '../Styles/costumiseSwiper.scss';
import '../Pages/Location/Location.scss'
import '../Styles/common.scss';
import DestCardsSwiper from '../Components/DestCardsSwiper';
import Truncate from 'react-truncate';
import ShowMoreText from 'react-show-more-text';
import Collapse from 'react-bootstrap/Collapse'



export default class Destination extends Component {
  state = {
    testImages: this.props.arrayDestination[0],
    toggledImage: this.props.arrayDestination[0],
    expanded: false,
    truncated: false
  }

  
  componentDidMount () {
    this.setState({testImages: this.props.arrayDestination[0]})
    
  }
  render () {
  const Tbilisee = 'https://core.tbilisee.ge/';
  
  const {t, i18n} = this.props;
  const params = {
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  }
  const toggleImage = (item) => {
    let temp = item
    this.setState({toggledImage: temp})

  }
  return (
<>
  <>
  
  <div className="dest container-own">
    <div>
      <div id="destination-main" className="height background-image__cover" style={{backgroundImage: `url(${Tbilisee + this.state.toggledImage.image_1000})`, backgroundRepeat: "no-repeat" }}/>
    </div>
    <div className="dest-col">
        <div>
        <h2 className="destination-content__title">
              {(() => {
                    if (i18n.language === 'KA') {
                      return (
                        this.state.testImages.title_ge
                      )
                    } else if (i18n.language === 'RU') {
                      return (
                        this.state.testImages.title_ru
                      )
                    } else {
                      return (
                        this.state.testImages.title_en
                      )
                    }
      })()}</h2>
                <p className="destination-content__paragraph " style={{ marginTop: "30px", marginBottom: "30px"}}>
        {(() => {
                    if (i18n.language === 'KA') {
                      return (
                        this.state.testImages.description_ge
                      )
                    } else if (i18n.language === 'RU') {
                      return (
                        this.state.testImages.description_ru
                      )
                    } else {
                      return (
                        this.state.testImages.description_en
                      )
                    }
      })()}</p>
      
      <p className="destination-content__paragraph">{this.state.testImages.time} min trip</p>
        </div>
        <div className="dest-cards relative">
        <div className="dest-absolute"/>
          <div className="dest-cards__wr absolute">
          {/* <button className="swiper-button-next"></button> 
          <button className="swiper-button-prev"></button> */}
        {/* <Swiper {...params}> */}
        {
          
                  this.props.arrayDestination.map((item,index) => 
                  
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
      })()
      }
      
      </h3>
      
                  <div id="destination-main" className="background-image__cover height destination-card__image" style={{backgroundImage: `url(${Tbilisee + item.image})`}} onClick={() => {toggleImage(item)}}/>
                    
                </div>
                
                  )
              }
              {/* </Swiper> */}
      
              </div>
      
        </div>
        
    </div>
    <div className="dest-cards__mobile">
            <DestCardsSwiper i18n={i18n} t={t} toggleImage={toggleImage}arrayDestination={this.props.arrayDestination}/>
      </div>
  </div>
  </>
  
    
</>

   
  );
}
}
