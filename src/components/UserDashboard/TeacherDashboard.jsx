import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "../Search/Search.jsx";
import TableCard from "../TableCard/TableCard.jsx";
import CoursesTable from "../CoursesTable/CoursesTable.jsx";

const LIMIT = 4;
const { REACT_APP_BASE_URL } = process.env;
const token = localStorage.getItem("token");

const TeacherDashboard = () => {
  const [enrolledcourses, loadEnrolledCourses] = useState([]);
  const [enrolledcount, setEnrolledCount] = useState(0);
  const [enrolledpageCount, setEnrolledPageCount] = useState(0);
  const [courses, loadcourses] = useState([""]);
  const [count, setCount] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    async function fetchcoursesdata() {
      await axios
        .get(`${REACT_APP_BASE_URL}/api/v1/courses/enrolled`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          mode: "cors"
        })
        .then((res) => {
          loadEnrolledCourses(res.data.enrolled_courses);
          setEnrolledCount(res.data.enrolled_courses.length);
          setEnrolledPageCount(Math.ceil(res.data.enrolled_courses.length / LIMIT));
        })
        .catch((err) => err);
    }
    fetchcoursesdata();
  }, []);

  useEffect(() => {
    async function fetchcoursesdata() {
      await axios
        .get(`${REACT_APP_BASE_URL}/api/v1/courses`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          mode: "cors"
        })
        .then((res) => {
          loadcourses(res.data.courses);
          setCount(res.data.courses.length);
          setPageCount(Math.ceil(res.data.courses.length / LIMIT));
        })
        .catch((err) => err);
    }
    fetchcoursesdata();
  }, []);

  return (
    <div>
      <Search />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="profile-info-left">
              <div className="text-center">
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                  alt="Avatar"
                  className="w-50 rounded-circle mb-4"
                />
                <h2>Teacher1</h2>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="profile-info-right">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="profile-tab"
                    data-toggle="tab"
                    href="#profile"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="true"
                  >
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="follower-tab"
                    data-toggle="tab"
                    href="#follower"
                    role="tab"
                    aria-controls="follower"
                    aria-selected="false"
                  >
                    Followers
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="following-tab"
                    data-toggle="tab"
                    href="#following"
                    role="tab"
                    aria-controls="following"
                    aria-selected="false"
                  >
                    Following
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="notifications-tab"
                    data-toggle="tab"
                    href="#notifications"
                    role="tab"
                    aria-controls="notifications"
                    aria-selected="false"
                  >
                    Notifications
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <p>
                    Energistically administrate 24/7 portals and enabled catalysts for change. Objectively revolutionize
                    client-centered e-commerce via covalent scenarios. Continually envisioneer.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Edit
                  </a>
                </div>
                <div className="tab-pane fade" id="notifications" role="tabpanel" aria-labelledby="notifications-tab">
                  <div className="media activity-item">
                    <a href="#" className="pull-left">
                      <img
                        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                        alt="Avatar"
                        className="media-object avatar"
                      />
                    </a>
                    <div className="media-body">
                      <p className="activity-title">
                        <a href="#">Antonius</a> started following <a href="#">Jack Bay</a>{" "}
                        <small className="text-muted">- 2m ago</small>
                      </p>
                      <small className="text-muted">Today 08:30 am - 02.05.2014</small>
                    </div>
                    <div className="btn-group pull-right activity-actions">
                      <button type="button" className="btn btn-xs btn-default dropdown-toggle" data-toggle="dropdown">
                        <i className="fa fa-th"></i>
                        <span className="sr-only">Toggle Dropdown</span>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-right" role="menu">
                        <li>
                          <a href="#">I donot want to see this</a>
                        </li>
                        <li>
                          <a href="#">Unfollow Antonius</a>
                        </li>
                        <li className="divider"></li>
                        <li>
                          <a href="#">Get Notification</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="media activity-item">
                    <a href="#" className="pull-left">
                      <img
                        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                        alt="Avatar"
                        className="media-object avatar"
                      />
                    </a>
                    <div className="media-body">
                      <p className="activity-title">
                        <a href="#">Antonius</a> started following <a href="#">Jack Bay</a>{" "}
                        <small className="text-muted">- 2m ago</small>
                      </p>
                      <small className="text-muted">Today 08:30 am - 02.05.2014</small>
                    </div>
                    <div className="btn-group pull-right activity-actions">
                      <button type="button" className="btn btn-xs btn-default dropdown-toggle" data-toggle="dropdown">
                        <i className="fa fa-th"></i>
                        <span className="sr-only">Toggle Dropdown</span>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-right" role="menu">
                        <li>
                          <a href="#">I dont want to see this</a>
                        </li>
                        <li>
                          <a href="#">Unfollow Antonius</a>
                        </li>
                        <li className="divider"></li>
                        <li>
                          <a href="#">Get Notification</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="follower" role="tabpanel" aria-labelledby="follower-tab">
                  <div className="media user-follower">
                    <img
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                      alt="User Avatar"
                      className="media-object pull-left"
                    />
                    <div className="media-body">
                      <a href="#">
                        John Simmons
                        <br />
                        <span className="text-muted username">@jsimm</span>
                      </a>
                      <button type="button" className="btn btn-sm btn-default pull-right">
                        <i className="fa fa-plus"></i> Follow
                      </button>
                    </div>
                  </div>
                  <div className="media user-follower">
                    <img
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                      alt="User Avatar"
                      className="media-object pull-left"
                    />
                    <div className="media-body">
                      <a href="#">
                        John Simmons
                        <br />
                        <span className="text-muted username">@jsimm</span>
                      </a>
                      <button type="button" className="btn btn-sm btn-default pull-right">
                        <i className="fa fa-plus"></i> Follow
                      </button>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="following" role="tabpanel" aria-labelledby="following-tab">
                  <div className="media user-following">
                    <img
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                      alt="User Avatar"
                      className="media-object pull-left"
                    />
                    <div className="media-body">
                      <a href="#">
                        Stella
                        <br />
                        <span className="text-muted username">@stella</span>
                      </a>
                      <button type="button" className="btn btn-sm btn-danger pull-right">
                        <i className="fa fa-close-round"></i> Unfollow
                      </button>
                    </div>
                  </div>
                  <div className="media user-following">
                    <img
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                      alt="User Avatar"
                      className="media-object pull-left"
                    />
                    <div className="media-body">
                      <a href="#">
                        Stella
                        <br />
                        <span className="text-muted username">@stella</span>
                      </a>
                      <button type="button" className="btn btn-sm btn-danger pull-right">
                        <i className="fa fa-close-round"></i> Unfollow
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h5 style={{ textAlign: "center" }}>MY COURSES</h5>
        <div className="row">
          <div className="col card-body">
            {/* List of users Enrolled courses */}
            <TableCard courses={enrolledcourses} count={enrolledcount} pageCount={enrolledpageCount} limit={3} />
          </div>
        </div>

        <h5 style={{ textAlign: "center" }}>ALL COURSES</h5>
        <div className="row">
          <div className="col card-body" id="courses-section">
            {/* List of all courses available */}
            <CoursesTable courses={courses} count={count} pageCount={pageCount} limit={LIMIT} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TeacherDashboard;
