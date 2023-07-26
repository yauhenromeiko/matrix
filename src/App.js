import React, {useState} from "react";

import { HomePage } from './pages/HomePage/HomePage';
import { CabinetPage } from "./pages/CabinetPage/CabinetPage";
import { AboutPage } from "./pages/AboutPage/AboutPage";
import { ContactPage } from "./pages/ContactPage/ContactPage";

import './style.css';


function App() {
  const [curPage, setCurPage] = useState('/');
  const [curLang, setCurLang] = useState('ru');

  const changeLang = (str) => {
    setCurLang(str)
  }

  const changeUrl = (str) => {
    setCurPage(str)
  }

  return (
    <>
      {curPage === '/' && (
        <HomePage 
          curLang={curLang} 
          changeLang={changeLang}
          changeUrl={changeUrl}
          curPage={curPage}
        />
      )}

      {curPage === '/cabinet' && (
        <CabinetPage 
          curLang={curLang} 
          changeLang={changeLang}
          changeUrl={changeUrl}
          curPage={curPage}
        />
      )}

      {curPage === '/about' && (
        <AboutPage  
          curLang={curLang} 
          changeLang={changeLang}
          changeUrl={changeUrl}
          curPage={curPage}
        />
      )}

      {curPage === '/contacts' && (
        <ContactPage 
          curLang={curLang} 
          changeLang={changeLang}
          changeUrl={changeUrl}
          curPage={curPage}
        />
      )}
    </>
  );
}

export default App;
