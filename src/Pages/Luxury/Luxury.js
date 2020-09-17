import React, {Component} from 'react';
import axios from 'axios';
import HeaderBlack from '../../Components/HeaderBlack';
import PageTitle from '../../Components/PageTitle';
import LuxurySwiper from '../../Components/LuxurySwiper';
import Button from '../../Components/Button'
import {Row, Col} from 'react-bootstrap'
import Destination from '../../Components/Destination';
// IMAGES
import LogoBlack from '../../Assets/icons/logo-black.svg';
import LuxuryRestaurant1 from '../../Assets/Images/luxury-restaurant-1.jpg';
import LuxuryRestaurant2 from '../../Assets/Images/luxury-restaurant-2.jpg';
import LuxuryRestaurant3 from '../../Assets/Images/luxury-restaurant-3.jpg';

import './Luxury.scss'
import '../../Styles/common.scss'
import { Link } from 'react-router-dom';

class Luxury extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          arrayLuxury: undefined,
          urban: undefined
         };
      }

      componentDidMount(){
        const { type } = this.props;        
        axios.get(`https://core.tbilisee.ge/api/oneRoom/${type}`).then(res => {
          this.setState( {
            arrayLuxury: res.data.room,
            urban: res.data.urban
          } );  
        })       
                
      }

      render() {
        if(!this.state.arrayLuxury) {
          return <div className="loading" data-aos="fade-up"
          data-aos-anchor-placement = "top-center"></div>; //TODO: Need Loading State
        }
        const Tbilisee = "https://core.tbilisee.ge/";
        const {arrayLuxury} = this.state;
        const {t, i18n} = this.props;
        return (
          <>
          <HeaderBlack t={t}/>
           
          {
            arrayLuxury.map((item,index) => <>
            <PageTitle title={item.type_en}/>
            <h2 className="luxury-kind">{item.kind_en}</h2>
            <div className="container-own luxury">
            <div className="luxury-absolute"/>
            <section className="luxury-swiper">
            <LuxurySwiper 
            containerClass   = "swiper-div"
            slidesPerView    = "auto"
            spaceBetween     = { 50 }
            buttonNextClass  = "landing-btn__next"
            buttonPrevClass  = "landing-btn__prev"
            swiperController = "landing-swiper__controller" 
            prevButton       = "Prev"
            nextButton       = "Next"
            arrayImg         = {item.cover_images}
            key              = {index}
        />
            </section>
            </div>
            {/* <section className="luxury-about">

            </section>  */}
            <section className="luxury-style container-own">
              <div></div>
              <div className="luxury-about">
                <h2>about room</h2>
                <p>{(() => {
        if (i18n.language === 'KA') {
          return (
            item.description_ge
          )
        } else if (i18n.language === 'RU') {
          return (
            item.description_ru
          )
        } else {
          return (
            item.description_en
          )
        }
      })()}</p></div>
                <div></div>
                <div></div>
              <div className="luxury-images">
              <div className="background-image__cover height full" style={{backgroundImage: `url(${Tbilisee + item.style_image})`}}></div>
                {/* <img src={Tbilisee + item.style_image} alt={"index"} className="full"/> */}
              </div>
              <div className="luxury-style__wr" style={{opacity: "0"}}>
                <h2>Style</h2>
                <p className="elipsis-3">{(() => {
        if (i18n.language === 'KA') {
          return (
            item.style_description_ge
          )
        } else if (i18n.language === 'RU') {
          return (
            item.style_description_ru
          )
        } else {
          return (
            item.style_description_en
          )
        }
      })()}</p>
              </div>
              <div >
              <div className="background-image__cover height full" style={{backgroundImage: `url(${Tbilisee + item.mood_image_small})`}}></div>
                {/* <img src={Tbilisee + item.mood_image_small} alt={"index"} className="full" style={{height: "60%"}}/> */}
                <div className="flex" style={{marginTop: "7rem"}}>
                </div>
              </div>
              <div className="luxury-mood" style={{opacity: "0"}}>
                <h2 style={{marginTop: "6rem"}}>Mood</h2>
                <p className="elipsis-6">{(() => {
        if (i18n.language === 'KA') {
          return (
            item.mood_description_ge
          )
        } else if (i18n.language === 'RU') {
          return (
            item.mood_description_ru
          )
        } else {
          return (
            item.mood_description_en
          )
        }
      })()}</p>
              </div>
              <div className="luxury-images">
              <div className="background-image__cover height full mood-image__big" style={{backgroundImage: `url(${Tbilisee + item.mood_image_big})`}}></div>
                {/* <img src={Tbilisee + item.mood_image_big} className="full mood-image__big"/> */}
              </div>
            </section>
            {/* <Destination arrayDestination={this.state.urban} t={t} i18n={i18n}/> */}
            </>)
            
          }                   
            
            )
          
          <section className="luxury-credit container-own">
                {/* <h5>* No credit card required</h5>
                <Link
                to="/booking"
                  title="book now"
                 className="luxury-credit__btn"
                >Book Now</Link>                   */}
            </section>
            <Link to='/rooms' className="luxury-view__all">View All Rooms</Link>
          {/* <section className="luxury-restaurant container-own">
              <Row md={1} lg={2}>
                <Col>
                <div>
                  <img src = { LogoBlack } alt="Logo" className="luxury-logo"/>   
                </div> 
                </Col>
                <Col>
                  <h4>Taste most delicious food in our restaurant</h4>
                </Col>
              </Row>
            <div className="luxury-restaurant__wr">
                <img src={LuxuryRestaurant1} alt="/" className="luxury-restaurant__img"/>
              <div className="luxury-restaurant__half">
                <img src={LuxuryRestaurant2} alt="/" style={{ width: "100%" }}/>
                <img src={LuxuryRestaurant3} alt="/" style={{ marginTop: "93px", width: "100%" }}/>
              </div>
            </div>
            </section> */}
          </>
        );
      }
  }

  export default Luxury;