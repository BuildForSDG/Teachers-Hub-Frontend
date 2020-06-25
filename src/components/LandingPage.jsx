import AOS from "aos";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchCoursesAction from "../redux/actions/fetchCoursesAction.jsx";
import Footer from "./Footer/Footer.jsx";
import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";

const LandingPage = () => {
  const dispatch = useDispatch();
  const courseData = useSelector((state) => state.fetchCoursesReducer);

  useEffect(() => {
    dispatch(fetchCoursesAction());
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
      <Header buttonValue="Login" url="/login" homeUrl="/" />
      <Main formName="signUpForm" courseData={courseData} />
      <Footer />
    </div>
  );
};
export default LandingPage;
