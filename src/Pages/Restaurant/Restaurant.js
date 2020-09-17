import React, {Component} from 'react';

// PACKAGES
import axios from 'axios';
import AOS from 'aos';

// COMPONENTS
import Header from '../../Components/Header';

// SCSS
import "./restaurant.scss";
import "../../Styles/common.scss";

export default class  Restaurant extends Component {
  state = {
    arrayRestaurant: undefined
  }

  componentDidMount () {
    axios.get('https://core.tbilisee.ge/api/restaurant').then(res => {
      this.setState({arrayRestaurant: res.data});
    })
    AOS.init({
			duration: 2000
		});
  } 

  render(){
    if(!this.state.arrayRestaurant) {
      return <div className="loading" data-aos="fade-up"
      data-aos-anchor-placement = "top-center"></div>; //TODO: Need Loading State
    }
    const Tbilisee = 'https://core.tbilisee.ge/';
    const {arrayRestaurant} = this.state;
    const {t, i18n} = this.props;
  return (
    <>
    <Header t={t}/>
    <div className="restaurant">
      <div className="restaurant-wallpaper">
        <div className="background-image__cover height" style={{backgroundImage: `url(${Tbilisee + arrayRestaurant.cover})`}}/>             
      </div>
       {
        arrayRestaurant.stories.map((item,index) => 
        <div 
        className={index%2===1 ? "restaurant-gastronomy container-own direction-reverse" : "restaurant-gastronomy container-own "}>
        <div className="restaurant-gastronomy__wr width-full">
            <div className="restaurant-block">
              <h2 className="restaurant-gastronomy__title">{(() => {
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
      })()}</h2>
              <p className="restaurant-gastronomy__paragraph">{(() => {
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
      })()}</p>
            </div>
            {/* <div className="background-image__cover height full" style={{backgroundImage: `url(${Tbilisee + item.image})`}} key={index}/>     */}
            {/* <img src={Tbilisee + item.image} alt="gastronomy" className="full" />  */}
            <div className="background-image__cover height" alt="gastronomy" style={{backgroundImage: `url(${Tbilisee + item.image})`}}/>
        </div>
      </div>)
      }
            {/* CHEF SECTION */}
            <div className="shef-wallpaper">
              <div data-aos="fade-up"
              data-aos-anchor-placement = "top-center" className="background-image__cover height restaurant-shef__img container-own" alt="shef" style={{backgroundImage: `url(${Tbilisee + arrayRestaurant.chef.image})`}}/>
      </div>
      <h2 
              data-aos="fade-up" className="restaurant-shef">{(() => {
                if (i18n.language === 'KA') {
                  return (
                    arrayRestaurant.chef.fullName_ge
                  )
                } else if (i18n.language === 'RU') {
                  return (
                    arrayRestaurant.chef.fullName_ru
                  )
                } else {
                  return (
                    arrayRestaurant.chef.fullName_en
                  )
                }
  })()}</h2>
      <h5 
              data-aos="fade-up" className="restaurant-shef__post">shef</h5>
      <p  data-aos="fade-up" className="restaurant-shef__about container-own">{(() => {
                if (i18n.language === 'KA') {
                  return (
                    arrayRestaurant.chef.description_ge
                  )
                } else if (i18n.language === 'RU') {
                  return (
                    arrayRestaurant.chef.description_ru
                  )
                } else {
                  return (
                    arrayRestaurant.chef.description_en
                  )
                }
  })()}</p>
      <h3 className="restaurant-menu__title" data-aos="fade-up"
              data-aos-anchor-placement = "top-center">
          Menu
          <span>Menu</span>
      </h3>
      <div className="restaurant-menu container-own">
        {
          arrayRestaurant.menus.map((item,index) => 
          <div data-aos="fade-up"
          data-aos-anchor-placement = "top-center"
          className="restaurant-menu__cell">
          <div className="background-image height restaurant-menu__image" alt={item.name} id={index} style={{backgroundImage: `url(${Tbilisee + item.image})`}}/>
            <div style={{marginLeft: "22px"}}>
              <h4>{(() => {
                    if (i18n.language === 'KA') {
                      return (
                        item.name_ge
                      )
                    } else if (i18n.language === 'RU') {
                      return (
                        item.name_ru
                      )
                    } else {
                      return (
                        item.name_en
                      )
                    }
      })()}</h4>
              <h5>{(() => {
                    if (i18n.language === 'KA') {
                      return (
                        item.city_ge, item.country_ge
                      )
                    } else if (i18n.language === 'RU') {
                      return (
                        item.city_ru, item.country_ru
                      )
                    } else {
                      return (
                        item.city_en, item.country_en
                      )
                    }
      })()}</h5>
          </div>
        </div>)
        }
      </div>
      <div>HEY</div>

    </div>
    </>
  );
}
}