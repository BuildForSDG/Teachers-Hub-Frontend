import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import moment from "moment";
import PaginationRow from "../Pagination/PaginationRow.jsx";

const LIMIT = 5;
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
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Course Name</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Duration (Hrs) </th>
            <th scope="col">Instructor</th>
            <th scope="col">Date Added</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {getDataByPage().map((course) => (
            <tr className="table-primary" key={course.id}>
              <td>{course.course_category}</td>
              <td>
                <Link to={`courses/${course.course_id}`}>{course.course_title}</Link>
              </td>
              <td>{course.course_description}</td>
              <td>{course.course_duration}</td>
              <td>{course.course_instructor}</td>
              <td>{moment(course.date_added).format("LL")}</td>
              <td>
                <input type="submit" className="btn btn-secondary" value="View" style={{ textAlign: "center" }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ float: "right" }}>{renderPagination()}</div>
    </>
  );
};

export default CoursesTable;
