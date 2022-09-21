import React from "react";
import "./header.css";
import CTA from "./CTA";
import Toggle from "../../toggle/Toggle";
import ME from "../../assets/3.webp";
import HeaderSocial from "./HeaderSocials";
import Shapes from "./Shapes";
import { themeContext } from "../../Context";
import { useContext } from 'react';

const Header = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <header>
      <div className="container header__container">
        <h4 style={{color: darkMode? 'white': ''}} className="text-dark">Hello I'm</h4>
        <h1 style={{color: darkMode? 'white': ''}} className="text-dark">Hao Nguyen</h1>
        <CTA />
        <Toggle />
        <HeaderSocial />

        <Shapes />
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        {/* ============= Scroll Down =========== */}
        <div className="scroll__down">
          <a href="#contact" className="mouse__wrapper">
            <span className="home__scroll-name">Scroll Down</span>
            <span className="mouse">
              <span className="wheel"></span>
            </span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
