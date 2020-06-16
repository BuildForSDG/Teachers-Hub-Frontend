/* eslint-disable import/extensions */
import { Pagination } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import AddCourseContainer from "../../../containers/AddCourseContainer.jsx";
import deleteCourseAction from "../../../redux/actions/deleteCourseAction.jsx";
import fetchCoursesAction from "../../../redux/actions/fetchCoursesAction.jsx";
import CourseModal from "../../Modal/Modal.jsx";

const LIMIT = 5;
const Courses = () => {
  const dispatch = useDispatch();
  const courseData = useSelector((state) => state.fetchCoursesReducer);
  const filteredData = useSelector((state) => state.deleteCourseReducer);
  const [activeRow, setActiveRow] = useState(0);
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [updateData, setUpdateData] = useState();
  const [count, setCount] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    dispatch(fetchCoursesAction());
  }, []);

  useEffect(() => {
    if (courseData.data.courses) {
      setData(courseData.data.courses);
      setCount(courseData.data.courses.length);
      setPageCount(Math.ceil(courseData.data.courses.length / LIMIT));
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
  const handleEdit = (courseID) => {
    setActiveRow(courseID);
    setModalShow(true);
    setUpdateData(() => data.filter((item) => item.course_id === activeRow));
  };

  const getDataByPage = () => {
    const begin = (currentPage - 1) * LIMIT;
    const end = begin + LIMIT;

    return data.slice(begin, end);
  };

  const handlePageChange = () => {
    console.log(count);
    console.log("changed");
    setCurrentPage(currentPage + 1);
    setOffset(offset + LIMIT);
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
                    {getDataByPage() ? getDataByPage().map((course, index) => (
                            <tr key={course.course_id}
                            style={{
                              backgroundColor: activeRow === course.course_id ? "#ffd3d9" : ""
                            }}
                            >
                               <td>{index + offset + 1}</td>
                               <td>{course.course_title}</td>
                               <td>{course.course_category}</td>
                                <td>{course.course_duration}</td>
                                <td>{course.course_description}</td>
                                <td>
                                <button type="button" className="btn btn-sm btn-outline-primary" style={{ width: "60px", padding: "5px" }} onClick={() => handleView(course.course_id)}>View</button>
                                <button type="button" className="btn btn-outline-secondary" style={{ width: "60px", padding: "5px" }} onClick={() => handleEdit(course.course_id)}>Edit</button>
                                <button type="button" className="btn btn-outline-danger" style={{ width: "60px", padding: "5px" }} onClick={() => handleDelete(course.course_id)}>Delete</button>
                                <CourseModal show={modalShow}
                                onHide={() => setModalShow(false)}
                                data={updateData} />
                                </td>
                            </tr>
                    )) : null}
                </tbody>
            </Table>
            <div style={{ float: "right" }}>
            <Pagination count={pageCount} color="primary" showFirstButton={true} showLastButton={true} defaultPage={1} onChange={handlePageChange} />
            </div>
            <br /><br/>
            <div>
            <AddCourseContainer />
            </div>
        </div>
  );
};
export default Courses;
