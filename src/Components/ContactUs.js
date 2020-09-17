import React, {Component} from "react";

import axios from 'axios';

// ICONS
import MapPin from '../Assets/icons/map-pin.svg';
import Facebook from '../Assets/icons/facebook.svg';
import Fax from '../Assets/icons/fax.svg';
import Mail from '../Assets/icons/mail.svg';
import Phone from '../Assets/icons/phone.svg';
import Twitter from '../Assets/icons/twitter.svg';
import Instagram from "../Assets/icons/instagram.svg";

import "../Styles/contactus.scss";

export default class ContactUs extends Component {
    state = {
        arrayContacts: undefined
    }

    componentDidMount(){
        axios.get('https://core.tbilisee.ge/api/ourContacts').then(res => {
            this.setState({arrayContacts: res.data})
        })
    }

    render(){
        if(!this.state.arrayContacts) {
            return "loading"; //TODO: Need Loading State
          }
          const {t} = this.props;
        const {arrayContacts} = this.state;
        const Tbilisee = 'https://core.tbilisee.ge/';
  return (
    <div className="contactus">
        <h2 className="contactus-title">{t('Contact Us')}</h2>
        <div className="contactus-line">
            <img src={MapPin} alt="map pin" className="contactus-line__icon"/>
            <h3 className="contactus-line__text">{arrayContacts.contacts.address}</h3>
        </div>
        <div className="contactus-line">
            <img src={Phone} alt="map pin" className="contactus-line__icon"/>
            <h3 className="contactus-line__text"><a href={"tel:" + arrayContacts.contacts.mobile}>{arrayContacts.contacts.mobile}</a></h3>
        </div>
        <div className="contactus-line">
            <img src={Fax} alt="map pin" className="contactus-line__icon"/>
            <h3 className="contactus-line__text"><a href={"tel:" + arrayContacts.contacts.mobile}>{arrayContacts.contacts.landline}</a></h3>
        </div>
        <div className="contactus-line">
            <img src={Mail} alt="map pin" className="contactus-line__icon"/>
            <h3 className="contactus-line__text">{arrayContacts.contacts.email}</h3>
        </div>
        <div className="contactus-socials">
            <a href={this.props.socials[0].link}>
                <img alt={this.props.socials[0].name}  src={Tbilisee + this.props.socials[0].image}/>
            </a>
            <a href={this.props.socials[1].link} style={{margin: "0 25px"}}>
                <img alt={this.props.socials[1].name}  src={Tbilisee + this.props.socials[1].image}/>
            </a>
            <a href={this.props.socials[2].link}>
                <img alt={this.props.socials[2].name}  src={Tbilisee + this.props.socials[2].image}/>
            </a>
        </div>
    </div>
  );
}
}