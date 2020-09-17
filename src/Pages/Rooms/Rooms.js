import React, {Component} from 'react';

// PACKAGES
import {Link} from "react-router-dom";

// COMPONENTS
import PageTitle from '../../Components/PageTitle';
import Button from "../../Components/Button";
import HeaderBlack from "../../Components/HeaderBlack";
import Navigation from '../../Components/rooms-swiper';

// SCSS
import "./Rooms.scss";
import '../../Styles/common.scss'
import axios from 'axios';
import AOS from 'aos';


export default class  Rooms extends Component {
  state = {
    arrayRooms: undefined,
    description: undefined
  }
  componentDidMount(){
    axios.get('https://core.tbilisee.ge/api/allRooms').then(res => {
      this.setState({
        arrayRooms: res.data.rooms,
        description: res.data.description
      })
      // this.setState({description: res.data.description})
    })
    AOS.init({
			duration: 2000
		});
  }
  render(){
    if(!this.state.arrayRooms) {
      return <div className="loading" data-aos="fade-up"
      data-aos-anchor-placement = "top-center"></div>; //TODO: Need Loading State
  }
  const Tbilisee = 'https://core.tbilisee.ge/'
  const {arrayRooms} = this.state;
  const {description} = this.state;
  console.log(this.state)
  const {t, i18n} = this.props;
  return (
    <>
    <HeaderBlack t={t}/>
    <div className="rooms container-own">
      <PageTitle title={t("Rooms")}/>
      <section className="rooms-swiper">
        <Navigation array={arrayRooms} tbilisee={Tbilisee}/>
      </section>
      <div>
        <p className="rooms-description__paragraph">{description.desc_en}</p>
      </div>
      {
        arrayRooms.map((room,index) => 
        <>
          <div data-aos="fade-up"
              data-aos-anchor-placement = "top-center"
              className={index%2===1 ? "rooms-luxury direction-reverse" : "rooms-luxury"}>
          <div className="relative">
            <div className={index%2===1 ? "rooms-background_first " : "rooms-background_first rooms-left"}/>
            <Link to={`/rooms/${room.type_en}`}>
            <div className="background-image__cover height full" style={{backgroundImage: `url(${Tbilisee + room.main_image})`}}/>
            </Link>
          </div>
          <div>
            <h1 className="rooms-description__title">{(() => {
                    if (i18n.language === 'KA') {
                      return (
                        room.type_ge
                      )
                    } else if (i18n.language === 'RU') {
                      return (
                        room.type_ru
                      )
                    } else {
                      return (
                        room.type_en
                      )
                    }
      })()}</h1>
            <p className="rooms-description__paragraph">{(() => {
                    if (i18n.language === 'KA') {
                      return (
                        room.description_ge
                      )
                    } else if (i18n.language === 'RU') {
                      return (
                        room.description_ru
                      )
                    } else {
                      return (
                        room.description_en
                      )
                    }
      })()}</p>
              <div className="flex space-between">
                <h5 className="rooms-kind">{room.kind_en}</h5>
                <Link 
                  to={`/rooms/${room.type_en}`}
                  className="see-more__btn"
                  >{t('See More')}</Link>
              </div>
          </div>
        </div>
        </>
        )
      }
    </div>
    </>
  );
}
}
