import React, {Component} from 'react';

import {Link} from "react-router-dom";
import CloseButton from "../Assets/icons/x.svg";
import { slideInLeft } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import i18next from 'i18next';

import AOS from 'aos';
import "aos/dist/aos.css";


import "../Styles/common.scss";
const Styles = {
    slideInLeft: {
        animation: 'x 1s',
        animationName: Radium.keyframes(slideInLeft, 'slideInLeft')
    }
}
const Styles1 = {
    slideInLeft: {
        animation: 'x 1.5s',
        animationName: Radium.keyframes(slideInLeft, 'slideInLeft')
    }
}
const Styles2 = {
    slideInLeft: {
        animation: 'x 2s',
        animationName: Radium.keyframes(slideInLeft, 'slideInLeft')
    }
}
const Styles3 = {
    slideInLeft: {
        animation: 'x 2.5s',
        animationName: Radium.keyframes(slideInLeft, 'slideInLeft')
    }
}
const Styles4 = {
    slideInLeft: {
        animation: 'x 3s',
        animationName: Radium.keyframes(slideInLeft, 'slideInLeft')
    }
}
const Styles5 = {
    slideInLeft: {
        animation: 'x 3.5s',
        animationName: Radium.keyframes(slideInLeft, 'slideInLeft')
    }
}
const Styles6 = {
    slideInLeft: {
        animation: 'x 4s',
        animationName: Radium.keyframes(slideInLeft, 'slideInLeft')
    }
}
const styles = {
    slideInLeft: {
      animation: 'x 0.5s',
      animationName: Radium.keyframes(slideInLeft, 'slideInLeft')
    }
  }



export default class DropdownMenu extends Component  {

    componentDidMount(){
        AOS.init({
			duration: 500
		});
    }
    handleClick = (lang) => {
        i18next.changeLanguage(lang);
      }
    render(){
        const {t} =this.props;
  return (
    <StyleRoot>
    <div className="dropdown-menu__header" style={styles.slideInLeft}>
    <div className="language-bar__dropdown">
              <li onClick={() => this.handleClick("EN")} className="language-first">EN</li>
              <li onClick={() => this.handleClick("RU")} style={{margin: "0 10px"}}>RU</li>
              <li onClick={() => this.handleClick("KA")} >GE</li>
                            </div>
        <img src={CloseButton} className="burger-close" alt="Close Button" onClick={() => this.props.menuHandler()}/>
        <div className="dropdown-menu_wr">
            <Link to="/aboutus" data-aos="fade-right">
                <li style={Styles.slideInLeft} className="dropdown-menu_item" onClick={() => this.props.menuHandler()}>{t('about us')}</li>
            </Link>
            <Link to="/rooms">
                <li style={Styles1.slideInLeft} className="dropdown-menu_item" onClick={() => this.props.menuHandler()}>{t('rooms')}</li>
            </Link>
            {/* <Link to="/booking">
                <li style={Styles2.slideInLeft} className="dropdown-menu_item" onClick={() => this.props.menuHandler()}>{t('book now')}</li>
            </Link> */}
            <Link to="/restaurant">
                <li  style={Styles3.slideInLeft} className="dropdown-menu_item" onClick={() => this.props.menuHandler()}>{t('restaurant')}</li>
            </Link>
            <Link to="/location">
                <li style={Styles4.slideInLeft} className="dropdown-menu_item" onClick={() => this.props.menuHandler()}>{t('sights')}</li>
            </Link>
            <Link to="/gallery">
                <li style={Styles5.slideInLeft} className="dropdown-menu_item" onClick={() => this.props.menuHandler()}>{t('gallery')}</li>
            </Link>            
            <Link to="/contact">
                <li style={Styles6.slideInLeft} className="dropdown-menu_item" onClick={() => this.props.menuHandler()}>{t('contact')}</li>
            </Link>
        </div>
    </div>
    </StyleRoot>
  );
}
}