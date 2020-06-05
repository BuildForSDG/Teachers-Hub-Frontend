import * as React from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CoursesTable = () => {
  const [courses, loadcourses] = React.useState([]);

  const { REACT_APP_BASE_URL } = process.env;

  React.useEffect(() => {
    axios
      .get(`${REACT_APP_BASE_URL}/api/v1/courses`)
      .then((res) => {
        console.log(res.data);
        loadcourses(res.data.courses);
      })
      .catch((err) => {
        alert(err);
      });
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
        {courses.map((courses) => (
          <tr>
            <td key={courses.id}>
              <Link to={`teacher/courses/${courses.course_id}`}>{courses.course_name}</Link>
            </td>
            <td key={courses.id}>{courses.course_title}</td>
            <td key={courses.id}>{courses.course_description}</td>
            <td key={courses.id}>{courses.course_duration}</td>
            <td key={courses.id}>{courses.total_enrolled}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CoursesTable;
