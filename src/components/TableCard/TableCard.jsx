import React, { useEffect, useState } from "react";
import PaginationRow from "../Pagination/PaginationRow.jsx";
import SingleCourseCard from "../CourseCard/SingleCourseCard.jsx";
import { makeArray } from "jquery";
import axios from "axios";

const LIMIT = 3;
const { REACT_APP_BASE_URL } = process.env;
const token = localStorage.getItem("token");

const TableCard = () => {
  const [courses, loadcourses] = useState([""]);
  const [count, setCount] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPage, setSelectedPage] = useState(0);

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
          loadcourses(res.data.enrolled_courses);
          setCount(res.data.enrolled_courses.length);
          setPageCount(Math.ceil(res.data.enrolled_courses.length / LIMIT));
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

  const getDataByPage = () => {
    const begin = (currentPage - 1) * LIMIT;
    const end = begin + LIMIT;

    return courses.slice(begin, end);
  };

  const renderPagination = () =>
    count === 0 ? (
      "No Data"
    ) : (
      <PaginationRow limit={LIMIT} count={count} pageCount={pageCount} onPageChange={handlePageChange} />
    );

  return (
    <>
      <div className="container overflow-hidden text-center">
        <div className="d-flex">
          {getDataByPage().map((course) => (
            <div className="col" key={course.course_id}>
              <div className="d-flex">
                <SingleCourseCard
                  courset={course.course_title}
                  coursedes={course.course_description}
                  courseid={course.course_id}
                  coursecat={course.course_category}
                  coursetime={course.course_duration}
                  courseinstructor={course.course_instructor}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ float: "right" }}>{renderPagination()}</div>
    </>
  );
};

export default TableCard;
