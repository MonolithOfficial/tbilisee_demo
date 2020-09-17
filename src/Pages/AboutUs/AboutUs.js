import React, {Component} from 'react';

// PACKAGES
import axios from 'axios';
import "aos/dist/aos.css";

// COMPONENTS
import HeaderBlack from '../../Components/HeaderBlack';
import PageTitle from '../../Components/PageTitle';
import RoundBlack from '../../Assets/icons/tbilisee-hotel-round.svg'

//SCSS
import "./about-us.scss";

export default class AboutUs extends Component  {
  state= {
    arrayAboutUs: undefined
  }

  componentDidMount() {
    axios.get('https://core.tbilisee.ge/api/about').then(res => {
      this.setState( {arrayAboutUs: res.data} );   
      console.log(this.state.arrayAboutUs)  
    })
  }

  render(){
    if(!this.state.arrayAboutUs) {
      return <div className="loading" data-aos="fade-up"
      data-aos-anchor-placement = "top-center"></div>; //TODO: Need Loading State
    }

    const Tbilisee = 'https://core.tbilisee.ge/';
    const {arrayAboutUs} = this.state;
    const {t, i18n} = this.props;

  return (
    <>
    <HeaderBlack t={t}/>
    
    <div className="about-us">
      <div className="about-us__wr">  
      <div className="about-us__absolute"/>    
        <PageTitle title={t("About Us")}/>
        <div style={{height: "80vh"}}>
          <div className="background-image__cover height rooms-wallpaper container-own" style={{backgroundImage: `url(${Tbilisee + arrayAboutUs.cover})`}}/>
        </div>        
        <div className="about-us__info">
          <img src={RoundBlack} className="about-us__badge" alt="badge"/>
         <div className="about-us__first">
            <h2 className="about-us__title">{t('Tbilisee')}</h2>
            <h5 className="about-us__subtitle">{t('Hotel')}</h5>
          </div>
          <div className="about-us__second">            
          <p className="about-us__paragraph">{(() => {
        if (i18n.language === 'KA') {
          return (
            arrayAboutUs.top_text_left_ge
          )
        } else if (i18n.language === 'RU') {
          return (
            arrayAboutUs.top_text_left_ru
          )
        } else {
          return (
            arrayAboutUs.top_text_left_en
          )
        }
      })()}</p>              
                  {/* <p className="about-us__paragraph">{(() => {
        if (i18n.language === 'KA') {
          return (
            arrayAboutUs.top_text_right_ge
          )
        } else if (i18n.language === 'RU') {
          return (
            arrayAboutUs.top_text_right_ru
          )
        } else {
          return (
            arrayAboutUs.top_text_right_en
          )
        }
      })()}</p> */}
             
            
          </div>
        {/* </div>
        <h3 className="aboutus-goal__title relative">
        {(() => {
        if (i18n.language === 'KA') {
          return (
            arrayAboutUs.goal.goal_title_ge
          )
        } else if (i18n.language === 'RU') {
          return (
            arrayAboutUs.goal.goal_title_ru
          )
        } else {
          return (
            arrayAboutUs.goal.goal_title_en
          )
        }
      })()}
          <span className="absolute goal-absolute">{t('Goal')}</span>
        </h3>
        <div className="about-us__goal">
        <div className="background-image__cover height rooms-wallpaper container-own full" style={{backgroundImage: `url(${Tbilisee + arrayAboutUs.goal.image})`}}/>
          
          <div className="aboutus-goal__paragraph">
              <p>{(() => {
        if (i18n.language === 'KA') {
          return (
            arrayAboutUs.goal.description_ge
          )
        } else if (i18n.language === 'RU') {
          return (
            arrayAboutUs.goal.description_ru
          )
        } else {
          return (
            arrayAboutUs.goal.description_en
          )
        }
      })()}</p>
                 <div className="about-us__since">
                   <span>since</span>
                   <span>2016</span>
                 </div>
            </div> */}
         
        </div>
      </div>
    </div>
    </>
  );
}
}