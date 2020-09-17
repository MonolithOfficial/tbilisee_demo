import React, {Component} from 'react';
import { Route }    from "react-router-dom";
import i18next from 'i18next';

class MyRoute extends Component  {
  render(){
    let availableLang = ['en','ka','ru'];
    return (     
      <>       
         <Route
            path = {this.props.path}
            exact = {this.props.exact}
            component = {(props) => {let lang = props.match.params.lang
                if(availableLang.indexOf(lang) == -1 ) {
                    lang = 'en'
                } 
                i18next.changeLanguage(lang.toUpperCase())
                this.props.component() }}
	    />
    </>
  );
}}

export default MyRoute;
