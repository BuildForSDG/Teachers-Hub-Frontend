import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import moment from "moment";
import PaginationRow from "../Pagination/PaginationRow.jsx";
import { CourseCard } from "../CourseCard/CourseCard.jsx";
import SingleCourseCard from "../CourseCard/SingleCourseCard.jsx";

const LIMIT = 3;
const CoursesTable = () => {
  const [courses, loadcourses] = React.useState([]);
  const [count, setCount] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPage, setSelectedPage] = useState(0);

  const { REACT_APP_BASE_URL } = process.env;

  React.useEffect(() => {
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
            <div className="col" key={course.id}>
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

              {/* {console.log(course.course_category)} */}
            </div>
          ))}
        </div>
      </div>
      <div style={{ float: "right" }}>{renderPagination()}</div>
    </>
  );
};

export default CoursesTable;
