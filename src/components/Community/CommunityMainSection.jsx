import React from "react";

const CommunityMainSection = () => (
  <div className="intro-section single-cover" id="home-section">
    <div className="slide-1 " style={{ backgroundImage: "url(images/img_2.jpg)" }} dataStellarBackgroundRatio="0.5">
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
        <div></div>
      </div>
    </div>
    <div className="container">
      <div className="row justify-content-center align-items-center text-center">
        <div className="col-lg-6">
          <div className="profile-info-right">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="qa-tab"
                  data-toggle="tab"
                  href="#qa"
                  role="tab"
                  aria-controls="qa"
                  aria-selected="true"
                >
                  Questions & Answers
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
                  Mentors
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
                  Job Panel
                </a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="qa" role="tabpanel" aria-labelledby="qa-tab">
                <div className="media activity-item">QA</div>
              </div>
              <div className="tab-pane fade" id="mentor" role="tabpanel" aria-labelledby="mentor-tab">
                <div className="media activity-item">Mentor</div>
              </div>
              <div className="tab-pane fade" id="job" role="tabpanel" aria-labelledby="job-tab">
                <div className="media activity-item">Job</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CommunityMainSection;
