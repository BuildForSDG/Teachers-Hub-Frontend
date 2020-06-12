/* eslint-disable import/extensions */
import { Pagination } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import fetchCoursesAction from "../../../redux/actions/fetchCoursesAction.jsx";
import AddCourse from "./CourseForm.jsx";
import deleteCourseAction from "../../../redux/actions/deleteCourseAction.jsx";
import Modal from "../../Modal/Modal.jsx";

const Courses = () => {
  const dispatch = useDispatch();
  const courseData = useSelector((state) => state.fetchCoursesReducer);
  const filteredData = useSelector((state) => state.deleteCourseReducer);
  const [activeRow, setActiveRow] = useState(0);
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = useState(false);


  useEffect(() => {
    dispatch(fetchCoursesAction());
  }, []);

  useEffect(() => {
    if (courseData.data) {
      setData(courseData.data.courses);
    }
  }, [courseData]);

  const handleView = (courseID) => {
    if (courseID !== activeRow) {
      setActiveRow(courseID);
      window.location.replace(`/courses/${courseID}`);
    }
  };

  const handleDelete = (courseID) => {
    setActiveRow(courseID);

    dispatch(deleteCourseAction(courseID));
  };

  useEffect(() => {
    if (filteredData.error.message === "Course deleted!") {
      setData(() => data.filter((item) => item.course_id !== activeRow));
    }
  }, [filteredData]);
  const handleEdit = () => {
    setModalShow(true);
  };

  return (
        <div>
            <Table responsive="md" hover size="sm" bordered striped width="100%" cellSpacing="0">
                <thead>
                <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Category</th>
                <th>Duration</th>
                <th>Description</th>
                <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                    {data ? data.map((course) => (
                            <tr key={course.course_id}
                            style={{
                              backgroundColor: activeRow === course.course_id ? "#ffd3d9" : ""
                            }}
                            >
                               <td>{course.course_id}</td>
                               <td>{course.course_title}</td>
                               <td>{course.course_category}</td>
                                <td>{course.course_duration}</td>
                                <td>{course.course_description}</td>
                                <td>
                                <button type="button" className="btn btn-sm btn-outline-primary" style={{ width: "60px", padding: "5px" }} onClick={() => handleView(course.course_id)}>View</button>
                                <button type="button" className="btn btn-outline-secondary" style={{ width: "60px", padding: "5px" }} onClick={handleEdit}>Edit</button>
                                <button type="button" className="btn btn-outline-danger" style={{ width: "60px", padding: "5px" }} onClick={() => handleDelete(course.course_id)}>Delete</button>
                                <Modal show={modalShow} onHide={() => setModalShow(false)}/>
                                </td>
                            </tr>
                    )) : null}
                </tbody>
            </Table>
            <div style={{ float: "right" }}>
            <Pagination count={10} color="primary" />
            </div>
            <br /><br/>
            <div>
            <AddCourse />
            </div>
        </div>
  );
};
export default Courses;
