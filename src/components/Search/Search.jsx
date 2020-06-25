import React from "react";

const Search = (props) => (
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
                    placeholder="Search..."
                    onChange={props.onChange}
                  />
                  <button type="button" className="btn btn-primary" id="searchButton" onClick={props.onClick}>
                    <i className="fa fa-search" aria-hidden="true"></i>{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Search;
