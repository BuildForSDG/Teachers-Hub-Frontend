/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const CoursesTable = (props) => (
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
        {props.getDataByPage.map((course) => (
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
    <div style={{ float: "right" }}>{props.renderPagination}</div>
  </>
);

export default CoursesTable;
