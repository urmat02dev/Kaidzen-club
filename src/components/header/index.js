import React from 'react';
import Logo from "../../img/logo.svg"
import "./Header.scss"
import {Na}

const Header = () => {

    return (
        <>
          <div id="header">
              <div className="container">
                  <div className="header">
                      <div className="header--logo">
                          <img src={Logo} width={40} alt=""/>
                          <p>Образовательная
                              <br/>платформа
                              <br/>Кубаныча</p>
                      </div>
                      <div className="header--nav">
                          <a href="#">Наши курсы</a>
                          <a href="#">Кайдзен клуб</a>
                          <a href="#">Наши курсы</a>
                          <a href="#">Наши курсы</a>
                      </div>
                      <div></div>
                  </div>
              </div>
          </div>
        </>
    );
};

export default Header;