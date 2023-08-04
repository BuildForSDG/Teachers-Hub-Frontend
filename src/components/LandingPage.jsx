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

  const checktoken = () => {
    if (localStorage.getItem("token")) {
      return true;
    }
    return false;
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

      {checktoken() ? (
        <div>
          <Header buttonValue={checkAuthStatus()} url="/teacher" homeUrl="/" dashboard="My Dashboard" />
          <Main formName="" />
        </div>
      ) : (
        <div>
          <Header buttonValue={checkAuthStatus()} url="/login" homeUrl="/" dashboard="Home" />
          <Main formName="signUpForm" />
        </div>
      )}

      <Footer />
    </div>
  );
};
export default LandingPage;
