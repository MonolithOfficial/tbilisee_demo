import React,{Component} from 'react';

// PACKAGES
import {Link} from "react-router-dom";
import AOS from 'aos';
import "aos/dist/aos.css";
import axios from 'axios';
import SwiperMain from '../../Components/swiper-main'

// COMPONENTS
import CarouselLanding from '../../Components/CarouselLanding';
import Header from '../../Components/Header';

// IMAGES
import HotelRound from "../../Assets/icons/tbilisee-hotel-round-white.svg";
import GalleryRound from '../../Assets/icons/hotel-badge.svg';

// SCSS
import "./Landing.scss";


export default class Landing extends Component {
  state = {
    arrayLanding: undefined
  }

  componentDidMount(){
    axios.get('https://core.tbilisee.ge/api/mainPage').then(res => {
      this.setState( {arrayLanding: res.data} ); 
      console.log(res.data.exploring)
    })
    AOS.init({
			duration: 2000
		});
  }
  render(){
    if(!this.state.arrayLanding) {
      return <div className="loading"></div>; //TODO: Need Loading State
    }

    const Tbilisee = 'https://core.tbilisee.ge/';
    const {arrayLanding} = this.state;
    const half = 3;
    const eatsFirstHalf = arrayLanding.eat_drinks.image_500.splice(0, half)
    const eatsSecondHalf = arrayLanding.eat_drinks.image_500.splice(-half)
    const {t, i18n} = this.props;
  return (
    <>
    <Header t={t}/>
    <div className="landing">
      <div className="landing-head__swiper">
      <div className="header-title">
      </div>
      
      <img className="landing-badge" src={HotelRound} alt="badge"/>
       <CarouselLanding
        t={t}        
        i18n = {i18n}
        sliders={arrayLanding.sliders}
       />
      </div>           
      <h2  className="exploring-title">{t('exploring')}</h2>      
        <section data-aos="fade-up"
            data-aos-anchor-placement = "top-center" className="exploring container-own">
             
            <div className="exploring-one">
              {(() => {
        if (i18n.language === 'KA') {
          return (
            <h3 style={{display: "none"}}></h3>
          )
               {/* <h3 >
               {arrayLanding.exploring.title_ge.slice(0, 9)}
                <span className="white">{arrayLanding.exploring.title_en.slice(8)}</span>
              </h3> */}

        } else if (i18n.language === 'RU') {
          return (
            <h3 style={{display: "none"}}></h3>
          )
            {/* <h3 >
            {arrayLanding.exploring.title_ru.slice(0, 9)}
             <span className="white">{arrayLanding.exploring.title_en.slice(8)}</span>
           </h3> */}
          
        } else {
          return (
            <h3 style={{display: "none"}}></h3>
          )
              {/* <h3 >
               {arrayLanding.exploring.title_en.slice(0, 9)}
                <span className="white">{arrayLanding.exploring.title_en.slice(8)}</span>
              </h3> */}
        }
      })()}
<p >{(() => {
        if (i18n.language == 'KA') {
          return (
            <div style={{width: "100%"}}>
              <p style={{margin: "0", padding: "0"}}>{arrayLanding.exploring.description_ge.slice(0, 200) + "..."}</p>
              <a style={{"cursor": "pointer"}} onClick={(event) => extendCollapsetext(event, arrayLanding.exploring.description_ge)}>→</a>
            </div>
          )
        } else if (i18n.language === 'RU') {
          return (
            <div style={{width: "100%"}}>
              <p style={{margin: "0", padding: "0"}}>{arrayLanding.exploring.description_ru.slice(0, 200) + "..."}</p>
              <a style={{"cursor": "pointer"}} onClick={(event) => extendCollapsetext(event, arrayLanding.exploring.description_ru)}>→</a>
            </div>
          )
        } else {
          return (
            <div style={{width: "100%"}}>
              <p style={{margin: "0", padding: "0"}}>{arrayLanding.exploring.description_en.slice(0, 200) + "..."}</p>
              <a style={{"cursor": "pointer"}} onClick={(event) => extendCollapsetext(event, arrayLanding.exploring.description_en)}>→</a>
            </div>
          )
        }
      })()}</p>
              
            </div>
            <div className="landing-photo-holder" >
              <div className="exploring-two">
                <div className="background-image__cover height" style={{backgroundImage: `url(${(Tbilisee + arrayLanding.exploring.image_one)})`}}></div>
              </div>
              <div className="exploring-two">
                <div className="background-image__cover height" style={{ backgroundImage: `url(${Tbilisee + arrayLanding.exploring.image_two})`}}></div>
              </div>
              <div className="exploring-two">
                <div className="background-image__cover height" style={{backgroundImage: `url(${(Tbilisee + arrayLanding.exploring.image_three)})`}}></div>
              </div>
              <div className="exploring-two">
                <div className="background-image__cover height" style={{backgroundImage: `url(${Tbilisee + arrayLanding.exploring.image_four})`}}></div>
              </div> 
              <div className="exploring-two">
                <div className="background-image__cover height" style={{backgroundImage: `url(${(Tbilisee + arrayLanding.exploring.image_five)})`}}></div>
              </div>
              <div className="exploring-two">
                <div className="background-image__cover height" style={{backgroundImage: `url(${Tbilisee + arrayLanding.exploring.image_six})`}}></div>
              </div> 
            </div>
                    
        </section>
          
    </div>
    
    </>
  );
}
}

const extendCollapsetext = (event, text) => {
  if (event.target.innerHTML == "→"){
    event.target.innerHTML = "←"
    event.target.previousSibling.innerHTML = `${text}`
  }
  else {
    event.target.innerHTML = "→"
    event.target.previousSibling.innerHTML = `${text.slice(0, 200) + "..."}`
  }
}



// GALLERY TILL FOOTER COMMENTED OUT.

{/* <section data-aos="fade-up"
            data-aos-anchor-placement = "top-center" className="landing-gallery">
              <div className="landing-gallery__absolute absolute"/>
        <div>
        <div className="background-image__cover height full gallery-big__image" style={{backgroundImage: `url(${Tbilisee + arrayLanding.gallery.big_image})`}}></div>
        </div>
        <div>
<p>{(() => {
        if (i18n.language === 'KA') {
          return (
            <div>
              <p style={{margin: "0", padding: "0"}}>{arrayLanding.gallery.description_ge.slice(0, 200)}</p>
              <a style={{"cursor": "pointer"}} onClick={(event) => {extendCollapsetext(event, arrayLanding.gallery.description_ge)
              document.querySelector(".landing-gallery").style.rowGap = "10rem"}}>→</a>
            </div>
          )
            {/* arrayLanding.gallery.description_ge */}
      //   } else if (i18n.language === 'RU') {
      //     return (
      //       <div>
      //         <p style={{margin: "0", padding: "0"}}>{arrayLanding.gallery.description_ru.slice(0, 200)}</p>
      //         <a style={{"cursor": "pointer"}} onClick={(event) => {extendCollapsetext(event, arrayLanding.gallery.description_ru)
      //         document.querySelector(".landing-gallery").style.rowgrap = "10rem"}}>→</a>
      //       </div>
      //     )
      //   } else {
      //     return (
      //       <div>
      //         <p style={{margin: "0", padding: "0"}}>{arrayLanding.gallery.description_en.slice(0, 200)}</p>
      //         <a style={{"cursor": "pointer"}} onClick={(event) => {extendCollapsetext(event, arrayLanding.gallery.description_en)
      //         document.querySelector(".landing-gallery").style.rowgrap = "10rem"
      //         }}>→</a>
      //       </div>
      //     )
      //   }
      // })()}</p>
          
      //   </div>
      //   <div className="relative">
      //     <h3>{(() => {
      //   if (i18n.language === 'KA') {
      //     return (
      //       arrayLanding.gallery.title_ge
      //     )
      //   } else if (i18n.language === 'RU') {
      //     return (
      //       arrayLanding.gallery.title_ru
      //     )
      //   } else {
      //     return (
      //       arrayLanding.gallery.title_en
      //     )
      //   }
      // })()}</h3>
      //     <div className="background-image__cover height-half landing-neighborhood__img absolute" style={{backgroundImage: `url(${(Tbilisee + arrayLanding.gallery.medium_image_200)})`}}></div>
      //     {/* <img src={Tbilisee + arrayLanding.gallery.medium_image} alt="Landing Gallery" className="landing-neighborhood__img absolute"/> */}
      //   </div>
      //   <div className="relative">
      //   <img className="gallery-badge rotate absolute" src={GalleryRound}/>
      //   </div>
      //   <div>
      //   <div className="background-image__cover landing-neighborhood__img2" style={{backgroundImage: `url(${Tbilisee + arrayLanding.gallery.small_image})`}}></div>
      //     {/* <img src={Tbilisee + arrayLanding.gallery.small_image} alt="*" className="landing-neighborhood__img2"/> */}
      //   </div>
      //   <div className="relative">
      //     <Link to="/gallery" className="landing-gallery__btn absolute">{t('See More')}</Link>
      //   </div>
      // </section>
      // <section data-aos="fade-up"
      //       data-aos-anchor-placement = "top-center" className="landing-swiper relative">
      //         <div className="landing-swiper__absolute absolute"/>
      //         <h2 className="landing-swiper__title container-own">{t('rooms')}</h2>
      //         <SwiperMain arrayLandingRooms={arrayLanding.rooms}/>
      // </section>
      // <section  className="landing_eats container-own" data-aos="fade-up"
      //       data-aos-anchor-placement = "top-center">
      //         <div>
      //     <div style={{position: "sticky", top: "100px"}}>
      //     <h3 className="eats-title">{(() => {
      //   if (i18n.language === 'KA') {
      //     return (
      //       arrayLanding.eat_drinks.title_ge
      //     )
      //   } else if (i18n.language === 'RU') {
      //     return (
      //       arrayLanding.eat_drinks.title_ru
      //     )
      //   } else {
      //     return (
      //       arrayLanding.eat_drinks.title_en
      //     )
      //   }
      // })()}</h3>
      //           <p className="eats-paragraph">{(() => {
      //   if (i18n.language === 'KA') {
      //     return (
      //       <div>
      //         <p style={{margin: "0", padding: "0"}}>{arrayLanding.eat_drinks.description_ge.slice(0, 200) + "..."}</p>
      //         <a style={{"cursor": "pointer"}} onClick={(event) => extendCollapsetext(event, arrayLanding.eat_drinks.description_ge)}>→</a>
      //       </div>
      //     )
      //       {/* arrayLanding.eat_drinks.description_ge */}
      //   } else if (i18n.language === 'RU') {
      //     return (
      //       <div>
      //         <p style={{margin: "0", padding: "0"}}>{arrayLanding.eat_drinks.description_ru.slice(0, 200) + "..."}</p>
      //         <a style={{"cursor": "pointer"}} onClick={(event) => extendCollapsetext(event, arrayLanding.eat_drinks.description_ru)}>→</a>
      //       </div>
      //     )
      //   } else {
      //     return (
      //       <div>
      //         <p style={{margin: "0", padding: "0"}}>{arrayLanding.eat_drinks.description_en.slice(0, 200) + "..."}</p>
      //         <a style={{"cursor": "pointer"}} onClick={(event) => extendCollapsetext(event, arrayLanding.eat_drinks.description_en)}>→</a>
      //       </div>
      //     )
      //   }
      // })()}</p>
              
      //            <Link to="/restaurant" className="eats-button">{t('See More')}</Link>
      //            </div>
      //     </div>
      //     <div className="landing-eats__img">
      //     {
      //         eatsFirstHalf.map((image,index) =>
      //         <div className="background-image__cover full" style={{backgroundImage: `url(${Tbilisee + image})`}} key={index}></div>
      //         )
      //       }
          
      //     </div>
      //     <div className="landing-eats__img2">
      //       {
      //         eatsSecondHalf.map((image,index) => 
      //         <div className="background-image__cover full" style={{backgroundImage: `url(${Tbilisee + image})`}} key={index}></div>
      //         )
      //       }
      //     </div>
      // </section>
      // <section data-aos="fade-up"
      //       data-aos-anchor-placement = "top-center" className="landing-neighborhood">
      //     <div className="landing-neighborhood__txt">   
      //         <h3>{(() => {
      //   if (i18n.language === 'KA') {
      //     return (
      //       arrayLanding.neighborhood.title_ge
      //     )
      //   } else if (i18n.language === 'RU') {
      //     return (
      //       arrayLanding.neighborhood.title_ru
      //     )
      //   } else {
      //     return (
      //       arrayLanding.neighborhood.title_en
      //     )
      //   }
      // })()}</h3>
      //         <div>{(() => {
      //   if (i18n.language === 'KA') {
      //     return (
      //       <div>
      //         <p style={{margin: "0", padding: "0"}}>{arrayLanding.neighborhood.description_ge}</p>
      //         {/* <a style={{"cursor": "pointer"}} onClick={(event) => extendCollapsetext(event, arrayLanding.neighborhood.description_ge)}>→</a> */}
      //       </div>
      //     )
      //       {/* arrayLanding.neighborhood.description_ge */}
      //   } else if (i18n.language === 'RU') {
      //     return (
      //       <div>
      //         <p style={{margin: "0", padding: "0"}}>{arrayLanding.neighborhood.description_ru}</p>
      //         {/* <a style={{"cursor": "pointer"}} onClick={(event) => extendCollapsetext(event, arrayLanding.neighborhood.description_ru)}>→</a> */}
      //       </div>
      //     )
      //   } else {
      //     return (
      //       <div>
      //         <p style={{margin: "0", padding: "0"}}>{arrayLanding.neighborhood.description_en}</p>
      //         {/* <a style={{"cursor": "pointer"}} onClick={(event) => extendCollapsetext(event, arrayLanding.neighborhood.description_en)}>→</a> */}
      //       </div>
      //     )
      //   }
      // })()}</div>
      //           <Link to="/location" className="neighborhood-more">{t('View More')}</Link>
      //     </div>
      //     <div className="background-image__cover full" style={{backgroundImage: `url(${Tbilisee +  arrayLanding.neighborhood.big_image})`}}></div>
      //     <div className="background-image__cover height-half neigborhood-img2" style={{backgroundImage: `url(${Tbilisee + arrayLanding.neighborhood.small_image})`}}></div>
      //       <div className="landing-absolute__bottom"/>
      //     </section> */}