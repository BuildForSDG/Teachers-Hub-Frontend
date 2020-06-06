/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React from "react";
import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";
import SrcImg4 from "../../assets/images/undraw_youtube_tutorial.svg";
import { capitalize } from "./utils";
import CourseExpansionPanel from "../ExpansionPanel/ExpansionPanel.jsx";


export const SingleCourse = (props) => {
  const isAuthenticated = localStorage.getItem("token");
  return (
    <div>
    {isAuthenticated ? <Header buttonValue="LogOut" url="/" homeUrl="/"/> : <Header buttonValue="Login" url="/login" homeUrl="/"/>}
    <div className="intro-section single-cover" id="home-section">
      <div className="slide-1 " style={{ backgroundImage: "url(images/img_2.jpg)" }} data-stellar-background-ratio="0.5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12">
            <div className="row justify-content-center align-items-center text-center">
              <div className="col-lg-6">
                <h1>{props.data.data.course
                  ? capitalize(props.data.data.course.course_title) : null}</h1>
                <button type="button" className="btn btn-default">ENROLL TO GET STARTED</button>
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
                <p>{props.data.data.course
                  ? (props.data.data.course.course_description) : null}</p>

            <p className="mt-4"><a href="#" className="btn btn-primary">Enroll</a></p>
          </div>
          {props.modules.data && props.modules.data.message
            ? props.modules.data.message.map((module) => (
              <div key={module.module_id}>
                <CourseExpansionPanel
                id = {module.module_id}
                course_id = {module.course_id}
                module_date_added = {module.module_date_added}
                module_description = {module.module_description}
                module_title = {module.module_title}
                />
                </div>
            )) : null}
          <div className="pt-5">
            <h3 className="mb-5">Discussion</h3>
            <ul className="comment-list">
              <li className="comment">
                <div className="comment-body">
                  <h6>Jean Doe</h6>
                  <div className="meta">January 9, 2018 at 2:21pm</div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Pariatur quidem laborum necessitatibus, ipsam impedit vitae
                    autem, eum officia, fugiat saepe enim sapiente iste iure!
                    Quam voluptas earum impedit necessitatibus, nihil?</p>
                  <p><a href="#" className="reply">Reply</a></p>
                </div>
              </li>

              <li className="comment">
                <div className="comment-body">
                  <h6>Jean Doe</h6>
                  <div className="meta">January 9, 2018 at 2:21pm</div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Pariatur quidem laborum necessitatibus,
                    ipsam impedit vitae autem, eum officia,
                    fugiat saepe enim sapiente iste iure!
                    Quam voluptas earum impedit necessitatibus, nihil?</p>
                  <p><a href="#" className="reply">Reply</a></p>
                </div>

                <ul className="children">
                  <li className="comment">
                    <div className="comment-body">
                      <h3>Jean Doe</h3>
                      <div className="meta">January 9, 2018 at 2:21pm</div>
                      <p>Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit.
                        Pariatur quidem laborum necessitatibus,
                        ipsam impedit vitae autem, eum officia,
                        fugiat saepe enim sapiente iste iure!
                        Quam voluptas earum impedit necessitatibus, nihil?</p>
                      <p><a href="#" className="reply">Reply</a></p>
                    </div>


                    <ul className="children">
                      <li className="comment">
                        <div className="comment-body">
                          <h6>Jean Doe</h6>
                          <div className="meta">January 9, 2018 at 2:21pm</div>
                          <p>Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit.
                            Pariatur quidem laborum necessitatibus,
                            ipsam impedit vitae autem, eum officia,
                            fugiat saepe enim sapiente iste iure!
                            Quam voluptas earum impedit necessitatibus, nihil?</p>
                          <p><a href="#" className="reply">Reply</a></p>
                        </div>

                          <ul className="children">
                            <li className="comment">
                              <div className="comment-body">
                                <h6>Jean Doe</h6>
                                <div className="meta">January 9, 2018 at 2:21pm</div>
                                <p>Lorem ipsum dolor sit amet,
                                  consectetur adipisicing elit.
                                  Pariatur quidem laborum necessitatibus,
                                  ipsam impedit vitae autem, eum officia,
                                  fugiat saepe enim sapiente iste iure!
                                  Quam voluptas earum impedit necessitatibus, nihil?</p>
                                <p><a href="#" className="reply">Reply</a></p>
                              </div>
                            </li>
                          </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li className="comment">
                <div className="comment-body">
                  <h6>Jean Doe</h6>
                  <div className="meta">January 9, 2018 at 2:21pm</div>
                  <p>Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit.
                    Pariatur quidem laborum necessitatibus,
                    ipsam impedit vitae autem, eum officia,
                    fugiat saepe enim sapiente iste iure!
                    Quam voluptas earum impedit necessitatibus, nihil?</p>
                  <p><a href="#" className="reply">Reply</a></p>
                </div>
              </li>
            </ul>
            <div className="comment-form-wrap pt-5">
              <h3 className="mb-5">Leave a comment</h3>
              <form action="#" className="p-5 bg-light">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="website">Website</label>
                  <input type="url" className="form-control" id="website" />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea name="" id="message" cols="30" rows="10" className="form-control"></textarea>
                </div>
                <div className="form-group">
                  <input type="submit" value="Post Comment" className="btn btn-primary" />
                </div>

              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-4 pl-lg-5">

          <div className="mb-5 text-center border rounded course-instructor">
            <h3 className="mb-5 text-black text-uppercase h6 border-bottom pb-3">Course Instructor</h3>
            <div className="mb-4 text-center">
              <img src={SrcImg4} alt="Image" className="w-25 rounded-circle mb-4" />
              <h3 className="h5 text-black mb-4">Christine Downeyy</h3>
              <p>Lorem ipsum dolor sit amet sectetur adipisicing elit.
                Ipsa porro expedita libero pariatur vero eos.</p>
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
