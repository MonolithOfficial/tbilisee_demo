


import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import ScrollIntoView from "../src/Components/ScrollTop";

import { useTranslation } from 'react-i18next';
//Components
import Routers from "./Routers/Routers";

function App() {
  const { t, i18n } = useTranslation();
 
  return (   
    <BrowserRouter>
    <ScrollIntoView>
        <div className="App"> 
            <Routers t={t} i18n={i18n}/> 
        </div>
      </ScrollIntoView>
    </BrowserRouter> 
  );
}

export default App;
