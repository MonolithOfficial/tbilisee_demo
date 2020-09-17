import React, {Component} from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

export default class Footer extends Component {
  state = {
    arrayContacts: undefined
  }

  componentDidMount() {
    axios.get('https://core.tbilisee.ge/api/ourContacts').then(res => {
      this.setState({arrayContacts: res.data})
    })
  }

  render(){
    if(!this.state.arrayContacts) {
      return "loading"; //TODO: Need Loading State
    }
    const {arrayContacts} = this.state;
    const {t,i18n} = this.props;
  return (
    <footer className="footer ">
      <div className="footer-wr container-own">

  <Row xs={1} md={4} >
  <Col><h3 className="footer-cell__title">{t('address')}</h3>
          <p className="footer-cell__subtitle">{(() => {
                    if (i18n.language === 'KA') {
                      return (
                        arrayContacts.contacts.address_ge
                      )
                    } else if (i18n.language === 'RU') {
                      return (
                        arrayContacts.contacts.address_ru
                      )
                    } else {
                      return (
                        arrayContacts.contacts.address_en
                      )
                    }
      })()}</p></Col>
    <Col>
    <h3 className="footer-cell__title">{t('phone')}</h3>
          <p className="footer-cell__subtitle">
            <li><a href={"tel:" + arrayContacts.contacts.mobile}>{arrayContacts.contacts.mobile}</a></li>
            <li><a href={"tel:" + arrayContacts.contacts.landline}>{arrayContacts.contacts.landline}</a></li>
          </p>
    </Col>
    <Col>
    <h3 className="footer-cell__title">{t('socials')}</h3>
    <div style={{margin: "auto", width: "fit-content"}}>
      
    
          <a href="https://www.facebook.com" className="footer-cell__subtitle">Facebook</a>
          <a href="https://www.instagram.com" className="footer-cell__subtitle">Instagram</a>
          <a href="https://www.linkedin.com" className="footer-cell__subtitle">Linkedin</a>
          </div></Col>
    <Col>
      <h3 className="footer-cell__title">{t('made by')}</h3>
      <a href="https://www.onesoul.io" className="footer-cell__subtitle onesoul">onesoul.io</a>
    </Col>
  </Row>

</div>
</footer>
  );
}
}
