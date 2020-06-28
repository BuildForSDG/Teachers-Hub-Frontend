/* eslint-disable react/prop-types */
import AOS from "aos";
import React, { useEffect } from "react";
import Footer from "./Footer/Footer.jsx";
import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";

const LandingPage = () => {
  useEffect(() => {
    AOS.init();
  });

  const checkAuthStatus = () => {
    if (localStorage.getItem("token")) {
      return "LogOut";
    }
    return "Login";
  };
  return (
    <div className="site-wrap">
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>
      <Header buttonValue={checkAuthStatus()} url="/login" homeUrl="/" />
      <Main formName="signUpForm" />
      <Footer />
    </div>
  );
};
export default LandingPage;
