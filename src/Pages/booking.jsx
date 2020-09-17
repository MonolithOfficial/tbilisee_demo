import React from "react";

import HeaderBlack from '../Components/HeaderBlack';
import i18n from 'i18next';

const Button = (props) => {
  return (
    <>
       <HeaderBlack t={props.t} i18n={props.i18n}/>
       {(() => {
        if (i18n.language === 'KA') {
          return (
            <iframe src="https://tbilisee.ge/static/media/reservation-ka.html" style={{borderStyle: "none", border: "none", width: "100%", height: "100vh", marginTop: "10rem"}}></iframe>
          )
        } else if (i18n.language === 'RU') {
          return (
            <iframe src="https://tbilisee.ge/static/media/reservation-ru.html" style={{borderStyle: "none", border: "none", width: "100%", height: "100vh", marginTop: "10rem"}}></iframe>
          )
        } else {
          return (
            <iframe src="https://tbilisee.ge/static/media/reservation-en.html" style={{borderStyle: "none", border: "none", width: "100%", height: "100vh", marginTop: "10rem"}}></iframe>
          )
        }
      })()}
       
    </>
  );
}

export default Button;