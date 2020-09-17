import React, { Component } from 'react';
import {Link} from "react-router-dom";

//Styles
import "../Styles/header.scss";
import "../Styles/common.scss"

//Component
import Button from './Button';
import DropdownMenu from "./DropDownMenu";
import i18next from 'i18next';

//Icons
import BurgerMenuWhite from "../Assets/icons/white-burger-menu.svg";
import LogoWhite from '../Assets/icons/white-logo.svg';


class Header extends Component  {
  constructor(props) {
		super(props);
		this.state = {
      burgerMenuOpen: true,
      currentLang: '',
      inactiveLang: ['RU', 'GE'],
      bookNow: false
    };
  }

  componentWillMount () {
    localStorage.getItem('currentLang') && this.setState ({
      currentLang: localStorage.getItem('currentLang')
    })
  }

  componentWillUpdate () {
    // localStorage.setItem('currentLang', 'yke')
  }

  toggleClass = () => {
    const currentState = this.state.burgerMenuOpen;
    this.setState({ burgerMenuOpen: !currentState });
  };

 handleClick = (lang) => {
    i18next.changeLanguage(lang);
  }

  handleBooking = () => {
    const currentState = this.state.bookNow;
    this.setState({ bookNow: !currentState });
  }

  render(){
    const {t} = this.props;
    const {burgerMenuOpen} = this.state;
    let lang = i18next.language
    const otherLang = ['RU', 'KA'];
    const index = otherLang.indexOf(lang);
    if (index > -1) {  
    otherLang.splice(index, 1);
    }
    return (     
      <>       
          {
            burgerMenuOpen ? 
            <header className="header"> 
            <div className="header-wr container-own">
            <div className="flex">
             <img src={ BurgerMenuWhite } className="header-burger_menu" alt="Burger Menu" onClick={this.toggleClass}/>
              <div className="language-bar__white">
              <li onClick={() => {this.handleClick("EN")}} className="language-first">EN</li>
              <li onClick={() => {this.handleClick("RU")}} key={index} style={{margin: "0 10px"}}>RU</li>
              <li onClick={() => this.handleClick("KA")} key={index}>KA</li>
                            </div>
       </div>
       <Link to="/">           
             <img src={LogoWhite} className="header-logo" alt="website logo" onClick={this.whiteHeader}/> 
       </Link>
       <Link 
         to="/booking"
         title="book now"
         className="book-now__white"
       >{t('book now')}</Link>
     </div> 
     <div>
     
     </div>
     </header>:
            
        <DropdownMenu 
          t={t}
          menuHandler  = { this.toggleClass } 
          burgerMenuOpen = {burgerMenuOpen}/>
          }     
    </>
  );
}}

export default Header;
