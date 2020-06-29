import React from "react";

const CommunityMainSection = () => (
  <div className="intro-section single-cover" id="home-section">
    <div className="slide-1" style={{ backgroundImage: "url(images/img_2.jpg)" }} dataStellarBackgroundRatio="0.5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12">
            <div className="row justify-content-center align-items-center text-center">
              <div className="col-lg-6">
                <div className="row">
                  <input
                    className="form-control  col-md-9 offset-md-1 "
                    id="searchTerm"
                    placeholder="Type your Query..."
                  />
                  <button type="button" className="btn btn-primary" id="searchButton">
                    <i className="fa fa-search" aria-hidden="true"></i>{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ul className="nav nav-tabs" id="myTab" role="tablist" style={{ margin: "30px", color: "#000" }}>
          <li className="nav-item">
            <a
              className="nav-link active"
              id="forum-tab"
              data-toggle="tab"
              href="#forum"
              role="tab"
              aria-controls="forum"
              aria-selected="true"
            >
              <h5>Forum</h5>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="mentor-tab"
              data-toggle="tab"
              href="#mentor"
              role="tab"
              aria-controls="mentor"
              aria-selected="false"
            >
              <h5>Mentorship</h5>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="job-tab"
              data-toggle="tab"
              href="#job"
              role="tab"
              aria-controls="job"
              aria-selected="false"
            >
              <h5>Job Board</h5>
            </a>
          </li>
        </ul>

        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active" id="forum" role="tabpanel" aria-labelledby="forum-tab">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="wrapper wrapper-content animated fadeInRight">
                    <div className="ibox-content m-b-sm border-bottom" style={{ color: "#585858" }}>
                      <div className="p-xs">
                        <div className="pull-left m-r-md">
                          <i className="fa fa-globe text-navy mid-icon"></i>
                        </div>
                        <h5>Welcome to the Teachers Hub forum</h5>
                        <span>Feel free to choose topic you are interested in.</span>
                      </div>
                    </div>

                    <div className="ibox-content forum-container" style={{ color: "#585858" }}>
                      <div className="forum-title">
                        <div className="pull-right forum-desc">
                          <samll>Total posts: 320,800</samll>
                        </div>
                        <h5>General subjects</h5>
                      </div>

                      <div className="forum-item active">
                        <div className="row">
                          <div className="col-md-9">
                            <div className="forum-icon">
                              <i className="fa fa-shield"></i>
                            </div>
                            <a href="forum_post.html" className="forum-item-title">
                              General Discussion
                            </a>
                            <div className="forum-sub-title">
                              Talk about any subject, article, podcast, talk about anything.
                            </div>
                          </div>
                          <div className="col-md-1 forum-info">
                            <span className="views-number">1216</span>
                            <div>
                              <small>Views</small>
                            </div>
                          </div>
                          <div className="col-md-1 forum-info">
                            <span className="views-number">368</span>
                            <div>
                              <small>Topics</small>
                            </div>
                          </div>
                          <div className="col-md-1 forum-info">
                            <span className="views-number">140</span>
                            <div>
                              <small>Posts</small>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="forum-item">
                        <div className="row">
                          <div className="col-md-9">
                            <div className="forum-icon">
                              <i className="fa fa-bolt"></i>
                            </div>
                            <a href="forum_post.html" className="forum-item-title">
                              Introductions
                            </a>
                            <div className="forum-sub-title">
                              New to the community? Please stop by and tell us a bit about yourself.{" "}
                            </div>
                          </div>
                          <div className="col-md-1 forum-info">
                            <span className="views-number">890</span>
                            <div>
                              <small>Views</small>
                            </div>
                          </div>
                          <div className="col-md-1 forum-info">
                            <span className="views-number">120</span>
                            <div>
                              <small>Topics</small>
                            </div>
                          </div>
                          <div className="col-md-1 forum-info">
                            <span className="views-number">154</span>
                            <div>
                              <small>Posts</small>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="forum-item active">
                        <div className="row">
                          <div className="col-md-9">
                            <div className="forum-icon">
                              <i className="fa fa-calendar"></i>
                            </div>
                            <a href="forum_post.html" className="forum-item-title">
                              Announcements
                            </a>
                            <div className="forum-sub-title">
                              This forum features announcements from the community heads. If there is a new post in this
                              forum, please check it out.{" "}
                            </div>
                          </div>
                          <div className="col-md-1 forum-info">
                            <span className="views-number">680</span>
                            <div>
                              <small>Views</small>
                            </div>
                          </div>
                          <div className="col-md-1 forum-info">
                            <span className="views-number">124</span>
                            <div>
                              <small>Topics</small>
                            </div>
                          </div>
                          <div className="col-md-1 forum-info">
                            <span className="views-number">61</span>
                            <div>
                              <small>Posts</small>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="forum-item">
                        <div className="row">
                          <div className="col-md-9">
                            <div className="forum-icon">
                              <i className="fa fa-star"></i>
                            </div>
                            <a href="forum_post.html" className="forum-item-title">
                              Instructor Discussion
                            </a>
                            <div className="forum-sub-title">
                              This forum is for private, instructors only discussions, usually pertaining to the
                              community itself.{" "}
                            </div>
                          </div>
                          <div className="col-md-1 forum-info">
                            <span className="views-number">1450</span>
                            <div>
                              <small>Views</small>
                            </div>
                          </div>
                          <div className="col-md-1 forum-info">
                            <span className="views-number">652</span>
                            <div>
                              <small>Topics</small>
                            </div>
                          </div>
                          <div className="col-md-1 forum-info">
                            <span className="views-number">572</span>
                            <div>
                              <small>Posts</small>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="forum-title">
                        <div className="pull-right forum-desc">
                          <samll>Total posts: 17,800,600</samll>
                        </div>
                        <h3>Other subjects</h3>
                      </div>

                      <div className="forum-item">
                        <div className="row">
                          <div className="col-md-9">
                            <div className="forum-icon">
                              <i className="fa fa-clock-o"></i>
                            </div>
                            <a href="forum_post.html" className="forum-item-title">
                              Mathematics
                            </a>
                            <div className="forum-sub-title">
                              We believe that when learners become active doers rather than passive consumers of
                              mathematics the greatest gains of their mathematical thinking can be realized. The process
                              of sense-making truly begins when we create questioning, curious classrooms full of
                              learners own thoughts and ideas.
                            </div>
                          </div>
                          <div className="col-md-1 forum-info">
                            <span className="views-number">1516</span>
                            <div>
                              <small>Views</small>
                            </div>
                          </div>
                          <div className="col-md-1 forum-info">
                            <span className="views-number">238</span>
                            <div>
                              <small>Topics</small>
                            </div>
                          </div>
                          <div className="col-md-1 forum-info">
                            <span className="views-number">180</span>
                            <div>
                              <small>Posts</small>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="forum-item">
                        <div className="row">
                          <div className="col-md-9">
                            <div className="forum-icon">
                              <i className="fa fa-bomb"></i>
                            </div>
                            <a href="forum_post.html" className="forum-item-title">
                              Physics
                            </a>
                            <div className="forum-sub-title">
                              Exploring new applications of physics, product developments, and other opportunities for
                              science in todays economic environment.
                            </div>
                          </div>
                          <div className="col-md-1 forum-info">
                            <span className="views-number">1766</span>
                            <div>
                              <small>Views</small>
                            </div>
                          </div>
                          <div className="col-md-1 forum-info">
                            <span className="views-number">321</span>
                            <div>
                              <small>Topics</small>
                            </div>
                          </div>
                          <div className="col-md-1 forum-info">
                            <span className="views-number">42</span>
                            <div>
                              <small>Posts</small>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="forum-item">
                        <div className="row">
                          <div className="col-md-9">
                            <div className="forum-icon">
                              <i className="fa fa-bookmark"></i>
                            </div>
                            <a href="forum_post.html" className="forum-item-title">
                              Design
                            </a>
                            <div className="forum-sub-title">
                              A quality design forum is the perfect place to check out other designs, get feedback on
                              your work, search for scripts, and find solutions when facing a difficult design
                              challenge.
                            </div>
                          </div>
                          <div className="col-md-1 forum-info">
                            <span className="views-number">765</span>
                            <div>
                              <small>Views</small>
                            </div>
                          </div>
                          <div className="col-md-1 forum-info">
                            <span className="views-number">90</span>
                            <div>
                              <small>Topics</small>
                            </div>
                          </div>
                          <div className="col-md-1 forum-info">
                            <span className="views-number">11</span>
                            <div>
                              <small>Posts</small>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="forum-item">
                        <div className="row">
                          <div className="col-md-9">
                            <div className="forum-icon">
                              <i className="fa fa-ambulance"></i>
                            </div>
                            <a href="forum_post.html" className="forum-item-title">
                              History
                            </a>
                            <div className="forum-sub-title">
                              Internet tend to repeat predefined chunks as necessary, making this the
                            </div>
                          </div>
                          <div className="col-md-1 forum-info">
                            <span className="views-number">2550</span>
                            <div>
                              <small>Views</small>
                            </div>
                          </div>
                          <div className="col-md-1 forum-info">
                            <span className="views-number">122</span>
                            <div>
                              <small>Topics</small>
                            </div>
                          </div>
                          <div className="col-md-1 forum-info">
                            <span className="views-number">92</span>
                            <div>
                              <small>Posts</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="mentor" role="tabpanel" aria-labelledby="mentor-tab">
            mentorship
          </div>
          <div className="tab-pane fade" id="job" role="tabpanel" aria-labelledby="job-tab">
            job panel
          </div>
        </div>
        <div></div>
      </div>
    </div>
  </div>
);

export default CommunityMainSection;
