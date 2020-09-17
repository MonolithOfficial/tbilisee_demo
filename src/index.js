import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  "bootstrap/dist/css/bootstrap.css";
import * as serviceWorker from './serviceWorker';
// import {I18nextProvider} from "react-i18next";
// import i18next from "i18next";
import './i18n';
//import i18n from "./i18n";
//import './i18n';

ReactDOM.render(
  <Suspense fallback={(<div>loading 0000</div>)}>
 <React.StrictMode>
            <App/>
  </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
