/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React from "react";
import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";
import { capitalize } from "./utils";
import CourseExpansionPanel from "../ExpansionPanel/ExpansionPanel.jsx";
import CommentsContainer from "../../containers/CommentContainer.jsx";

export const SingleCourse = (props) => {
  const isAuthenticated = localStorage.getItem("token");
  return (
    <div>
      {isAuthenticated ? (
        <Header buttonValue="LogOut" url="/" homeUrl="/admin" />
      ) : (
        <Header buttonValue="Login" url="/login" homeUrl="/" />
      )}
      <div className="intro-section single-cover" id="home-section">
        <div
          className="slide-1 "
          style={{ backgroundImage: "url(images/img_2.jpg)" }}
          data-stellar-background-ratio="0.5"
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12">
                <div className="row justify-content-center align-items-center text-center">
                  <div className="col-lg-6">
                    <h1>{props.data.data.course ? capitalize(props.data.data.course.course_title) : null}</h1>
                    <button type="button" className="btn btn-default">
                      ENROLL TO GET STARTED
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-5">
              <div className="mb-5">
                <h3 className="text-black">Course Description</h3>
                <p>{props.data.data.course ? props.data.data.course.course_description : null}</p>

                <p className="mt-4">
                  <a href="#" className="btn btn-primary">
                    Enroll
                  </a>
                </p>
              </div>
              {props.modules.data && props.modules.data.message
                ? props.modules.data.message.map((module) => (
                    <div key={module.module_id}>
                      <CourseExpansionPanel
                        id={module.module_id}
                        course_id={module.course_id}
                        module_date_added={module.module_date_added}
                        module_description={module.module_description}
                        module_title={module.module_title}
                      />
                    </div>
                  ))
                : null}
              <div className="pt-5">
                <CommentsContainer courseId={props.course_id} />
              </div>
            </div>
            <div className="col-lg-4 pl-lg-5">
              <div className="mb-5 text-center border rounded course-instructor">
                <h3 className="mb-5 text-black text-uppercase h6 border-bottom pb-3">Course Instructor</h3>
                <div className="mb-4 text-center">
                  <img
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                    alt="Image"
                    className="w-25 rounded-circle mb-4"
                  />
                  <a href="#">
                    <h3 className="h5 text-black mb-4">
                      {props.data.data.course ? capitalize(props.data.data.course.course_instructor) : null}
                    </h3>
                  </a>
                  <p>More than 5 years teaching experience having great mentorship abilities... .</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
