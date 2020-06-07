/* eslint-disable import/extensions */
import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "@material-ui/lab";
import fetchCoursesAction from "../../../redux/actions/fetchCoursesAction.jsx";


const Courses = () => {
  const dispatch = useDispatch();
  const courseData = useSelector((state) => state.fetchCoursesReducer);

  useEffect(() => {
    dispatch(fetchCoursesAction());
  }, []);


  return (
        <div>
            <Table responsive="md" hover size="sm" bordered striped width="100%" cellspacing="0">
                <thead>
                <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Category</th>
                <th>Duration</th>
                <th>Organization</th>
                <th>Total Enrolled</th>
                <th>Description</th>
                <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                    {courseData.data.courses ? courseData.data.courses.map((course, index) => (
                            <tr key={index}>
                               <td>{course.course_id}</td>
                               <td>{course.course_title}</td>
                               <td>{course.course_category}</td>
                                <td>{course.course_duration}</td>
                                <td>{course.organization_name}</td>
                                <td>{course.total_enrolled}</td>
                                <td>{course.course_description}</td>
                                <td>
                                    <span> <Icon.Trash /></span>&nbsp;&nbsp;&nbsp;
                                    <span><Icon.Pencil /></span>
                                </td>
                            </tr>
                    )) : null}
                </tbody>
            </Table>
            <div style={{ float: "right" }}>
            <Pagination count={10} color="primary" />

            </div>
        </div>
  );
};
export default Courses;
