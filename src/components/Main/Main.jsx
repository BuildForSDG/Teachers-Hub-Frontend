/* eslint-disable react/prop-types */
import React from "react";
import cabe from "../../assets/images/cabe.png";
import edx from "../../assets/images/edx.png";
import futureLearn from "../../assets/images/futureLearn.png";
import Hero1 from "../../assets/images/hero_1.jpg";
import SignUpContainer from "../../containers/SignUpContainer.jsx";
import CourseCardContainer from "../../containers/CourseCardContainer.jsx";
import LoginForm from "../LoginForm/LoginForm.jsx";
import BlogCardContainer from "../../containers/BlogContainer.jsx";

const Main = (props) => (
        <div>

<div className='intro-section' id='home-section'>
                <div className='slide-1' style={{ backgroundImage: `url(${Hero1})`, dataStellarBackgroundRatio: "0.5" }}>
                    <div className='container'>
                        <div className='row align-items-center'>
                            <div className='col-12'>
                                <div className='row align-items-center'>
                                    <div className='col-lg-6 mb-4'>
                                        <h1 data-aos='fade-up' data-aos-delay='100' id="mission">Where Qualified Teachers are made</h1>
                                        <p className='mb-4' data-aos='fade-up' data-aos-delay='200' id="about">We help to substantially increase the supply of qualified teachers in our communities. We also collaborate with international cooperations for teachers to be trained in developing countries.</p>
                                        <p data-aos='fade-up' data-aos-delay='300'><a href='/' className='btn btn-primary py-3 px-5 btn-pill'>Get Started</a></p>
                                    </div>
                                    <div className='col-lg-5 ml-auto' data-aos='fade-up' data-aos-delay='500'>
                                        {props.formName === "signUpForm" ? <SignUpContainer /> : <LoginForm onSubmit={props.onSubmit} onChange={props.onChange} />}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='site-section courses-title' id='courses-section'>
                <div className='container'>
                    <div className='row mb-5 justify-content-center'>
                        <div className='col-lg-7 text-center' data-aos='fade-up' data-aos-delay=''>
                        <h2 className='section-title'>Courses</h2>
                        </div>
                    </div>
                </div>
            </div>
            <CourseCardContainer />
            <div className='site-section' id='blogs-section'>
                <div className='container'>
                    <div className='row mb-3 justify-content-center'>
                        <div className='col-lg-7 text-center' data-aos='fade-up' data-aos-delay=''>
                            <h2 className='section-title'>Blog</h2>
                            <p>Publish your passions your way.
                              Whether you would like to share your knowledge,
                              experiences or the latest news in Education,
                              create a unique and beautiful blog for free.</p>
                        </div>
                    </div>
                    <BlogCardContainer />
                </div>
            </div>
            <div className='site-section' id='partners-section'>

                <div className='container'>

                    <div className='row mb-5 justify-content-center'>
                        <div className='col-lg-7 mb-5 text-center' data-aos='fade-up' data-aos-delay=''>
                            <h2 className='section-title'>Our Partners</h2>
                            <p className='mb-5'>Our partners help to provide learning material and
                            mentorship to more than five thousand teachers each year.
                            Learn more about our partners
                            work and how to take part in their courses.</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6 col-lg-4 mb-4' data-aos='fade-up' data-aos-delay='100'>
                        <div className='teacher text-center'>
                         <img src={cabe} alt='cabe' className='img-fluid w-50 rounded mx-auto mb-4'/>
                        <div className='py-2'>
                        <h3 className='text-black'>Cabe Academic Partners</h3>
                        <p>Cabe Academic Partners provides access to a variety of
                          CABE resources including access to online communities that facilitate
                          networking with experienced professionals.</p>
                    </div>
                </div>
          </div>
          <div className='col-md-6 col-lg-4 mb-4' data-aos='fade-up' data-aos-delay='200'>
            <div className='teacher text-center'>
              <img src={edx} alt='edx' className='img-fluid w-50 rounded mx-auto mb-4'/>
              <div className='py-2'>
                <h3 className='text-black'>edx</h3>
                <p>edx provides access to 2000 free online courses from 140 leading
                  institutions worldwide.
                  Helps you gain new skills and earn a certificate of completion.</p>
              </div>
            </div>
          </div>

          <div className='col-md-6 col-lg-4 mb-4' data-aos='fade-up' data-aos-delay='300'>
            <div className='teacher text-center'>
              <img src={futureLearn} alt='futurelearn' className='img-fluid w-50 rounded mx-auto mb-4' />
              <div className='py-2'>
                <h3 className='text-black'>Future Learn</h3>
                <p>Join millions of people learning on FutureLearn.
                  Find online courses and degrees from leading
                  universities or organisations and start learning online today.</p>
              </div>
            </div>
          </div>
                    </div>

                </div>
            </div>
            <div className='site-section bg-image overlay' style={{ backgroundImage: "url(images/hero_1.jpg)" }} id='community-section'>
      <div className='container'>
        <div className='row justify-content-center align-items-center'>
          <div className='col-md-8 text-center testimony'>
            <h3 className='mb-4'>Meet the community</h3>
            <blockquote>
              <p>&ldquo; Meet other Teachers Hub online teachers and mentors.
                Having caring, dedicated, and talented virtual educators and
                mentors is important to a teachers academic success. &rdquo;</p>
            </blockquote>
            <p data-aos='fade-up' data-aos-delay='300'><a href='/community' className='btn btn-primary py-3 px-5 btn-pill'>Visit Community</a></p>
          </div>
        </div>
      </div>
    </div>
    <div className='site-section bg-light' id='contact-section'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-7'>
            <h2 className='section-title mb-3'>Contact Us</h2>
            <form data-aos='fade'>
              <div className='form-group row'>
                <div className='col-md-6 mb-3 mb-lg-0'>
                  <input type='text' className='form-control' placeholder='First name' />
                </div>
                <div className='col-md-6'>
                  <input type='text' className='form-control' placeholder='Last name' />
                </div>
              </div>

              <div className='form-group row'>
                <div className='col-md-12'>
                  <input type='text' className='form-control' placeholder='Subject' />
                </div>
              </div>

              <div className='form-group row'>
                <div className='col-md-12'>
                  <input type='email' className='form-control' placeholder='Email' />
                </div>
              </div>
              <div className='form-group row'>
                <div className='col-md-12'>
                  <textarea className='form-control' id='' cols='30' rows='10' placeholder='Write your message here.'></textarea>
                </div>
              </div>
              <div className='form-group row'>
                <div className='col-md-6'>
                  <input type='submit' className='btn btn-primary py-3 px-5 btn-block btn-pill' value='Send Message' />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
        </div>
);
export default Main;
