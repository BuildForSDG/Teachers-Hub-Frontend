import React, { useState } from "react";
import PaginationRow from "../Pagination/PaginationRow.jsx";
import SingleCourseCard from "../CourseCard/SingleCourseCard.jsx";

const LIMIT = 4;
// eslint-disable-next-line react/prop-types
const CoursesTable = ({ courses, count, pageCount, limit }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPage, setSelectedPage] = useState(0);

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
    const begin = (currentPage - 1) * limit;
    const end = begin + limit;

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
