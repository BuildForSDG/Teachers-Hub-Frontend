import * as React from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

const CoursesTable = () => {
  const [courses, loadcourses] = React.useState([]);

  const { REACT_APP_BASE_URL } = process.env;

  React.useEffect(() => {
    async function fetchcoursesdata() {
      await axios
        .get(`${REACT_APP_BASE_URL}/api/v1/courses`)
        .then((res) => {
          loadcourses(res.data.courses);
        })
        .catch((err) => err);
    }
    fetchcoursesdata();
  }, []);

  return (
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
        {courses.map((course) => (
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
  );
};

export default CoursesTable;
