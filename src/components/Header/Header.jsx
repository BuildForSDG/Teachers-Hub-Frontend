/* eslint-disable react/prop-types */
import React from "react";

const Header = (props) => (
  <header className="site-navbar py-4 js-sticky-header site-navbar-target" role="banner">
    <div className="container-fluid">
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
          <a className="navbar-brand site-logo mr-auto w-25" href="/">
            Teachers Hub
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home-section">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#courses-section" className="nav-link">
                  Courses
                </a>
              </li>
              <li className="nav-item">
                <a href="#blogs-section" className="nav-link">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a href="#partners-section" className="nav-link">
                  Partnerships
                </a>
              </li>
              <li className="nav-item">
                <a href="#community-section" className="nav-link">
                  Community
                </a>
              </li>
            </ul>
            <a href={props.url}>
              <input
                type="submit"
                className="btn btn-primary my-2 my-sm-0"
                onClick={() => (props.buttonValue === "LogOut" ? localStorage.removeItem("token") : null)}
                value={props.buttonValue}
              />
            </a>
          </div>
        </nav>
      </div>
    </div>
  </header>
);
export default Header;
