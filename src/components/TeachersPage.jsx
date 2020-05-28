import React, { useEffect } from "react";
import AOS from "aos";
import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
import Main from "./Main/Main.jsx";

const TeachersPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
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
                <Header buttonValue="LogOut" />
            <Main />
        <Footer />
        </div>);
};
export default TeachersPage;
