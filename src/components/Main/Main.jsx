/* eslint-disable react/prop-types */
import React from "react";
import Carousel from "nuka-carousel";
import SignUpContainer from "../../containers/SignUpContainer.jsx";
import LoginForm from "../LoginForm/LoginForm.jsx";
import SrcImg from "../../assets/images/img_4.jpg";
import SrcImg2 from "../../assets/images/img_2.jpg";
import SrcImg3 from "../../assets/images/img_3.jpg";
import SrcImg4 from "../../assets/images/undraw_youtube_tutorial.svg";
import Hero1 from "../../assets/images/hero_1.jpg";
import cabe from "../../assets/images/cabe.png";
import edx from "../../assets/images/edx.png";
import futureLearn from "../../assets/images/futureLearn.png";

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
            <div className='site-section courses-entry-wrap' data-aos='fade-up' data-aos-delay='100'>
                <div className='container'>
                    <div className='row'>
                       <Carousel>
                            <div>
                                <div className='col-12 nonloop-block-14'>
                                <div className='card course' style={{
                                  width: "900px", margin: "0 auto", float: "none", marginBottom: "90px"
                                }}>
                                <div className='row no-gutters'>
                                <div className='col-sm-5'>
                                <figure className='m-0'>
                                    <a href='/course/id'><img src={SrcImg} alt='physics' className='img-fluid' /></a>
                                </figure>
                            </div>
                            <div className='col-sm-7 '>
                                <div className='card-body '>
                                    <h3><a href='/'>Study Law of Physics</a></h3>
                                    <p className='card-text'>Gain a philosophical understanding of the role of laws in physics</p>
                                    <span className='course-price'>Physics</span>
                                    <div className='meta'><span className='icon-clock-o'></span>4 Lessons / 12 week</div>
                                    <div className='d-flex border-top stats'>
                                    <div className='py-3 px-4'><span className='icon-users'></span> 2,193 students</div>
                                    <div className='py-3 px-4 w-25 ml-auto border-left'><span className='icon-chat'></span> 2</div>
                                </div>
                            </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        </div>
                            <div>
                                <div className='col-12 nonloop-block-14'>
                                <div className='card course' style={{
                                  width: "900px", margin: "0 auto", float: "none", marginBottom: "10px"
                                }}>
                                <div className='row no-gutters'>
                                <div className='col-sm-5'>
                                 <figure className='m-0'>
                                    <a href='/'><img src={SrcImg2} alt='design' className='img-fluid' /></a>
                                </figure>
                         </div>
                            <div className='col-sm-7 '>
                            <div className='card-body '>
                                <h3><a href='/'>Logo Design Course</a></h3>
                                <p className='card-text'>Learn Logo Design Online At Your Own Pace.
                                Start Today and Become an Expert in Days</p>
                                <span className='course-price'>Design</span>
                                <div className='meta'><span className='icon-clock-o'></span>4 Lessons / 12 week</div>
                                <div className='d-flex border-top stats'>
                                    <div className='py-3 px-4'><span className='icon-users'></span> 2,193 students</div>
                                    <div className='py-3 px-4 w-25 ml-auto border-left'><span className='icon-chat'></span> 2</div>
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                      </div>
                          <div>
                            <div className='col-12 nonloop-block-14'>
                                <div className='card course' style={{
                                  width: "900px", margin: "0 auto", float: "none", marginBottom: "10px"
                                }}>
                                    <div className='row no-gutters'>
                                        <div className='col-sm-5'>
                                        <figure className='m-0'>
                                            <a href='/'><img src={SrcImg3} alt='singlecourse' className='img-fluid' /></a>
                                        </figure>
                                    </div>
                                <div className='col-sm-7 '>
                                    <div className='card-body '>
                                    <h3><a href='/'>JS programming Language</a></h3>
                                    <p className='card-text'>Learn programming fundamentals and basic object-oriented
                                    concepts using the latest JavaScript syntax.</p>
                                    <span className='course-price'>Programming</span>
                                    <div className='meta'><span className='icon-clock-o'></span>4 Lessons / 12 week</div>
                                    <div className='d-flex border-top stats'>
                                        <div className='py-3 px-4'><span className='icon-users'></span> 2,193 students</div>
                                        <div className='py-3 px-4 w-25 ml-auto border-left'><span className='icon-chat'></span> 2</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                     </div>
                    </div>
                </div>
                <div className='col-12 nonloop-block-14'>
                    <div className='card course' style={{
                      width: "900px", margin: "0 auto", float: "none", marginBottom: "10px"
                    }}>
                        <div className='row no-gutters'>
                            <div className='col-sm-5'>
                                <figure className='m-0'>
                                    <a href='/'><img src={SrcImg2} alt='maths' className='img-fluid' /></a>
                                </figure>
                             </div>
                        <div className='col-sm-7 '>
                            <div className='card-body '>
                            <h3><a href='/'>Fundamentals of Mathematics</a></h3>
                            <p className='card-text'>The essential tools for mastering algebra, logic, and number theory!</p>
                            <span className='course-price'>Mathematics</span>
                            <div className='meta'><span className='icon-clock-o'></span>4 Lessons / 12 week</div>
                            <div className='d-flex border-top stats'>
                                <div className='py-3 px-4'><span className='icon-users'></span> 2,193 students</div>
                                <div className='py-3 px-4 w-25 ml-auto border-left'><span className='icon-chat'></span> 2</div>
                            </div>
                        </div>
                        </div>
                     </div>
                </div>
                </div>
                        </Carousel >
                    </div>
                </div>
            </div>
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
                    <Carousel style={{ minHeight: "100vh" }} slidesToShow={1} cellAlign="center" cellSpacing={20} dragging={true}>
                    <div className='row mb-5 align-items-center'>

                        <div className='col-lg-7 mb-5' data-aos='fade-up' data-aos-delay='100'>
                            <img src={SrcImg4} alt='blog' className='img-fluid' width={900} height={700} />
                        </div>
                    <div className='col-lg-4 ml-auto' data-aos='fade-up' data-aos-delay='200'>
                        <h2 className='text-black mb-4'>Three ways for eductors
                        to practice social emotional learning</h2>
                        <p className='mb-4'>With schools and businesses closed all around the world,
                         many of us are learning to cope with...</p>
                         <div><div><button type="button" className="btn btn-secondary">READ MORE</button></div></div>
                    </div>
                </div>
                <div className='row mb-5 align-items-center'>

                <div className='col-lg-7 mb-5' data-aos='fade-up' data-aos-delay='100'>
                    <img src={SrcImg4} alt='blog' className='img-fluid' />
                </div>
                <div className='col-lg-4 ml-auto' data-aos='fade-up' data-aos-delay='200'>
                  <h2 className='text-black mb-4'>Three ways for eductors
                to practice social emotional learning</h2>
                  <p className='mb-4'>With schools and businesses closed all around the world,
                many of us are learning to cope with...</p>
                <div><div><button type="button" className="btn btn-secondary">READ MORE</button></div></div>
                </div>
                </div>
                </Carousel>
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
            <p data-aos='fade-up' data-aos-delay='300'><a href='/' className='btn btn-primary py-3 px-5 btn-pill'>Visit Community</a></p>
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
