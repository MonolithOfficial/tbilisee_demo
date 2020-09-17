import React, {Component} from 'react';

import AOS from 'aos';
import "aos/dist/aos.css";
import axios from 'axios'

// COMPONENTS
import PageTitle from '../../Components/PageTitle';
import Input from '../../Components/Input';
import HeaderBlack from '../../Components/HeaderBlack';
import ContactUs from '../../Components/ContactUs';


// SCSS
import "../../Styles/common.scss";
import "./contact.scss";

// IMAGES
import HotelRound from '../../Assets/icons/tbilisee-hotel.svg';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


class Contact extends Component {
  state = {
    name    : "",
    surname : "",
    phone   : 0,
    email   : "",
    message : "",
    sent    : true,
    arrayContact: undefined
  }
  componentDidMount(){
    AOS.init({
			duration: 2000
    });
    axios.get('https://core.tbilisee.ge/admin/api/social').then(res => {
      this.setState({arrayContact: res.data})
    })
  }

  componentDidUpdate() {
    console.log(this.state)
  }

  handleChange = (event) => {
    console.log("this doesn't work")
  }

  handleSubmit = () => {
    let form = document.querySelectorAll("input")
    console.log(this.state)
    this.setState({
      name: form[0].value,
      surname: form[1].value,
      phone: form[2].value,
      email: form[3].value,
      message: form[4].value
    })
  }

  render(){
    const {t} = this.props;
    if(!this.state.arrayContact) {
      return "loading"; //TODO: Need Loading State
    }
  return (
    <>
    <HeaderBlack t={t}/>
    <div data-aos="fade-up"
     data-aos-duration="3000" className="Contact">
        <PageTitle title={t("Contact Us")} className="contact-us__mobile"/>
        <div data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500" className="contact-form">
          <img src={HotelRound} alt="Round logo Tbilisee" className="contact-round__logo rotate"/>
        <ContactUs t={t} socials={this.state.arrayContact}/>
            <h2 className="width-full contact-title">{t('Stay in touch')}</h2>
            <Input 
              name='name'
              onChange = {e => this.handleChange(e)}
              type = "text"
              id = "name"
              placeholder = "Name"
              value="yo"
              className = "contact-input width-half"
            />
            <Input 
              surname = 'surname'
              onChange = {e => this.handleChange(e)}
              type = "text"
              id = "Surname"
              placeholder = "Surname"
              value={this.state.surname}
              className = "contact-input width-half"
            />
            <Input 
              phone = 'phone'
              onChange = {e => this.handleChange(e)}
              type = "number"
              id = "mobile"
              placeholder = "Phone number"
              value={this.state.phone}
              className = "contact-input width-full"
            />
            <Input 
              email = 'email'
              onChange = {e => this.handleChange(e)}
              type = "email"
              id = "email"
              placeholder = "E-mail"
              value={this.state.email}
              className = "contact-input width-full"
            />
            <Input 
              message = 'message'
              onChange = {e => this.handleChange(e)}
              type = "textarea"
              id = "textarea"
              placeholder = "Your text here"
              value={this.state.message}
              className = "textarea width-full"
            />
            <div className="contact-button__wr">
              {
                this.state.sent ? <div></div> : <h3>message sent successfully</h3>
              }              
            <button  
              onClick={() => this.handleSubmit()}
              className="contact-send__button"
            >{t('Send')}</button>
            </div>
            
        </div>
    </div>
    
    {/* <section style={{width: "1000px", height: "200px"}}>
    <GoogleMaps />
    </section> */}
    <section className="google-map__container">
    <Map google={this.props.google} zoom={14}>
 <  Marker onClick={this.onMarkerClick}
         name={'Current location'} />

 <InfoWindow onClose={this.onInfoWindowClose}>
     
 </InfoWindow>
</Map>
    </section>

    
    </>
  );
}}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDiHDNQ2w9BhxLK32eQQHDi5u0LLmLvdSo')
})(Contact)