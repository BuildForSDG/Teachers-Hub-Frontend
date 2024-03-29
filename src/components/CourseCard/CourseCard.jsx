/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import Carousel from "nuka-carousel";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import SrcImg from "../../assets/images/img_4.jpg";
import fetchSingleCourseAction from "../../redux/actions/fetchSingleCourseAction.jsx";

export const CourseCard = (props) => {
  const dispatch = useDispatch();
  const handleClick = (id) => {
    dispatch(fetchSingleCourseAction(id));
  };
  return (
    <div className="site-section courses-entry-wrap" data-aos="fade-up" data-aos-delay="100">
      <div className="container">
        <div className="row">
          <Carousel>
            {props.data.data.courses ? (
              props.data.data.courses.map((course) => (
                <div key={course.course_id} onClick={() => handleClick(course.course_id)}>
                  <Link to={`/courses/${course.course_id}`} style={{ color: "#000", textDecoration: "inherit" }}>
                    <div className="col-12 nonloop-block-14">
                      <div
                        className="card course"
                        style={{
                          width: "900px",
                          margin: "0 auto",
                          float: "none",
                          marginBottom: "90px"
                        }}
                      >
                        <div className="row no-gutters">
                          <div className="col-sm-4">
                            <figure className="m-0">
                              <img src={SrcImg} alt={course.course_title} className="img-fluid" />
                            </figure>
                          </div>
                          <div className="col-sm-5">
                            <div className="card-body">
                              <div>
                                <h3>{course.course_title.toUpperCase()}</h3>
                                <p className="card-text col">{course.course_description}</p>
                              </div>
                              <br />
                              <div className="meta">
                                <span className="icon-clock-o"></span>Duration: {course.course_duration} hours
                              </div>
                              <div className="d-flex border-top stats">
                                <div className="py-3 px-4">
                                  <span className="icon-users"></span> 2,193 students
                                </div>
                                <div className="py-3 px-4 w-25 ml-auto border-left">
                                  <span className="icon-chat"></span> 2
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="course-name">{course.course_category}</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <div
                className="card"
                style={{
                  width: "900px",
                  height: "200px",
                  margin: "0 auto",
                  float: "none",
                  textAlign: "center"
                }}
              >
                <h4 style={{ marginTop: "60px" }}>No Courses added Yet</h4>
                <h4>Please check again later</h4>
              </div>
            )}
          </Carousel>
        </div>
      </div>
    </div>
  );
};
