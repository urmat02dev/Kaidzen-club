import React from 'react';
import Logo from "../../img/logo.svg"
import "./Header.scss"
const Header = () => {
    return (
        <>
          <div id="header">
              <div className="container">
                  <div className="header">
                      <div className="header--logo">
                          <img src={Logo} width={50} alt=""/>
                          <p>Образовательная
                              <br/>платформа
                              <br/>Кубаныча</p>
                      </div>
                  </div>
              </div>
          </div>
        </>
    );
};

export default Header;