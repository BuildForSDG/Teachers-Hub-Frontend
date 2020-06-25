import React, { useEffect, useState } from "react";
import AOS from "aos";
import axios from "axios";
import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
import TeacherDashboard from "./UserDashboard/TeacherDashboard.jsx";
import { renderPagination, getDataByPage, LIMIT } from "../utils";

const TeachersPage = () => {
  const { REACT_APP_BASE_URL } = process.env;
  const [courses, loadcourses] = useState([]);
  const [count, setCount] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPage, setSelectedPage] = useState(0);

  useEffect(() => {
    AOS.init();
    async function fetchcoursesdata() {
      await axios
        .get(`${REACT_APP_BASE_URL}/api/v1/courses`)
        .then((res) => {
          loadcourses(res.data.courses);
          setCount(res.data.courses.length);
          setPageCount(Math.ceil(res.data.courses.length / LIMIT));
        })
        .catch((err) => err);
    }
    fetchcoursesdata();
  }, []);

  const handlePageChange = (page) => {
    setSelectedPage(page.selected);
    if (page.selected === selectedPage + 1) {
      setCurrentPage(currentPage + 1);
    } else if (page.selected === selectedPage - 1) {
      setCurrentPage(currentPage - 1);
    } else {
      setCurrentPage(() => page.selected + 1);
    }
  };
  return (
    <div className="site-wrap">
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>
      <Header buttonValue="LogOut" homeUrl="/teacher" url="/" />
      <TeacherDashboard
        renderPagination={renderPagination(count, pageCount, handlePageChange)}
        getDataByPage={getDataByPage(courses, currentPage)}
      />
      <Footer />
    </div>
  );
};
export default TeachersPage;
