import React, { useState } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
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

  const renderPagination = () => (count === 0 ? (
    "No Data"
  ) : (
      <PaginationRow
        limit={LIMIT}
        count={count}
        pageCount={pageCount}
        onPageChange={handlePageChange}
      />
  ));

  return (
    <>
    <Table responsive striped>
      <thead>
        <tr>
          <th>Course Name</th>
          <th>Title</th>
          <th>Description</th>
          <th>Duration (Hrs) </th>
          <th>Enrolled</th>
        </tr>
      </thead>
      <tbody>
        {getDataByPage().map((course) => (
          <tr key={course.id}>
            <td>{course.course_category}</td>
            <td>
              <Link to={`courses/${course.course_id}`}>{course.course_title}</Link>
            </td>
            <td>{course.course_description}</td>
            <td>{course.course_duration}</td>
            <td>{course.total_enrolled}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    <div style={{ float: "right" }}>
            {renderPagination()}

            </div>
    </>
  );
};

export default CoursesTable;
