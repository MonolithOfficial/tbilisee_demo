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
import BurgerMenu from "../Assets/icons/burger-menu-icon.svg";
import Logo from "../Assets/icons/logo-black.svg";


class Header extends Component  {
  constructor(props) {
		super(props);
		this.state = {
      burgerMenuOpen: true,
      whiteHeader: false,
      currentLang: 'EN'
    };
  }

  toggleClass = () => {
    const currentState = this.state.burgerMenuOpen;
    this.setState({ burgerMenuOpen: !currentState });
  };

  handleClick = (lang) => {
    i18next.changeLanguage(lang)
  }


  render(){
    const {t} = this.props;
    const {burgerMenuOpen} = this.state;
    let lang = i18next.language
    const otherLang = ['EN','RU', 'KA'];
    const index = otherLang.indexOf(lang);
    if (index > -1) {  
    otherLang.splice(index, 1);
    }
    console.log(t,"dsadsaioudhjaiuosdiauhdsiaud")
    return (     
      <>       
          {
            burgerMenuOpen ? 
            <header className="header-black container-own"> 
            <div className="header-wr">
            <div className="flex">
             <img src={ BurgerMenu } className="header-burger_menu" alt="Burger Menu" onClick={this.toggleClass}/>
              <div className="language-bar__black">
                <li onClick={() => this.handleClick('EN')} className="language-first">EN</li>
                <li onClick={() => this.handleClick("RU")} key={index} style={{margin: "0 10px"}}>RU</li>
              <li onClick={() => this.handleClick("KA")} key={index}>GE</li>
              </div>
       </div>
       <Link to="/">           
             <img src={Logo} className="header-logo" alt="website logo" onClick={this.whiteHeader}/> 
       </Link>
       <Link 
          to= "/booking"
         title="book now"
         className="book-now"
       >Book Now</Link>
     </div>
     
      </header>:

            
        <DropdownMenu 
          t = {t}
          menuHandler  = { this.toggleClass } 
          whiteHeader  = { this.whiteHeader } 
          blackHeader  = { this.blackHeader }/>
          }  
             
    </>
  );
}}

export default Header;
