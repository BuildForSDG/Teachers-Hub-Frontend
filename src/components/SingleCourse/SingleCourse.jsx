/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React from "react";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import { Capitalize } from "./utils";

export const SingleCourse = (props) => (
        <div>
            <Header buttonValue="LogOut" url="/" homeUrl="/"/>
            <div className="intro-section single-cover" id="home-section">

      <div className="slide-1 " style={{ backgroundImage: "url(images/img_2.jpg)" }} data-stellar-background-ratio="0.5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="row justify-content-center align-items-center text-center">
                <div className="col-lg-6">
                  <h1>{props.data.data.course
                    ? Capitalize(props.data.data.course.course_title) : null}</h1>
                  <button type="button" className="btn btn-default">ENROLL TO GET STARTED</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
            <Footer />
        </div>
);
