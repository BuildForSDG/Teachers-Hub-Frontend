/* eslint-disable import/prefer-default-export */
import React from "react";

export const LeftSide = () => (
        <div>
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div className="sidebar-brand-text mx-3">Teachers Hub Admin</div>
            </a>

            <hr className="sidebar-divider my-0" />

            <li className="nav-item active">
            <a className="nav-link" href="index.html">
                <i className="fa fa-tachometer"></i>
                <span>Dashboard</span></a>
            </li>
            <hr className="sidebar-divider" />

            <div className="sidebar-heading">
            Interface
            </div>

            <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
            <i className="fa fa-cog"></i>
                <span>Settings</span>
            </a>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Custom Components:</h6>
                <a className="collapse-item" href="buttons.html">Buttons</a>
                <a className="collapse-item" href="cards.html">Cards</a>
                </div>
            </div>
            </li>
            <hr className="sidebar-divider" />
            <div className="sidebar-heading">
            Pages
            </div>
            <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
                <i className="fa fa-folder"></i>
                <span>Users</span>
            </a>
            <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Manage users:</h6>
                <a className="collapse-item" href="login.html">Add User</a>
                <a className="collapse-item" href="register.html">Delete User</a>
                </div>
            </div>
            </li>
            <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseCoursePages" aria-expanded="true" aria-controls="collapsePages">
                <i className="fa fa-folder"></i>
                <span>Courses</span>
            </a>
            <div id="collapseCoursePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Manage courses:</h6>
                <a className="collapse-item" href="login.html">Add course</a>
                <a className="collapse-item" href="register.html">Update course</a>
                <a className="collapse-item" href="register.html">View all courses</a>
                <a className="collapse-item" href="forgot-password.html">Delete course</a>
            </div></div></li>
            <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseBlogPages" aria-expanded="true" aria-controls="collapsePages">
                <i className="fa fa-folder"></i>
                <span>Blog</span>
            </a>
            <div id="collapseBlogPages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Manage articles:</h6>
                <a className="collapse-item" href="login.html">Add article</a>
                <a className="collapse-item" href="register.html">Update article</a>
                <a className="collapse-item" href="register.html">View all articles</a>
                <a className="collapse-item" href="forgot-password.html">Delete article</a>
            </div></div></li>
            <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseCommunityPages" aria-expanded="true" aria-controls="collapsePages">
                <i className="fa fa-folder"></i>
                <span>Community</span>
            </a>
            <div id="collapseCommunityPages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Manage community:</h6>
                <a className="collapse-item" href="login.html">Add questions</a>
                <a className="collapse-item" href="register.html">Update question</a>
                <a className="collapse-item" href="register.html">View all questions</a>
                <a className="collapse-item" href="forgot-password.html">Delete question</a>
            </div></div></li>
            <hr className="sidebar-divider d-none d-md-block" />
</ul>
        </div>
);
