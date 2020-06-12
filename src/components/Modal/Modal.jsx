/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { MDBInput } from "mdbreact";
import "react-toastify/dist/ReactToastify.css";
import updateCourseAction from "../../redux/actions/updateCourseAction.jsx";

const CourseModal = (props) => {
  const dispatch = useDispatch();
  const [updatedDetails, setUpdatedDetails] = useState();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedDetails((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (id) => {
    dispatch(updateCourseAction(id, updatedDetails));
  };
  return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Update Course
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
      <form>
        <div className="grey-text">
          <MDBInput label="Course Category" name="course_category" value={props.data.course_category} group type="text" validate error="wrong" onChange={() => handleChange}
            success="right" />
          <MDBInput label="Course Title" name="course_title" group type="text" validate error="wrong" onChange={handleChange}
            success="right" />
          <MDBInput label="Course Duration in hours" name="course_duration " group type="text" validate onChange={handleChange}
            error="wrong" success="right" />
          <MDBInput label="Course Description" name="course_description" group type="text" validate onChange={handleChange} />
          <MDBInput label="Course Instructor" name="course_instructor" group type="text" validate onChange={handleChange} />
        </div>
      </form>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={() => handleSubmit(props.id)}>Update Course</Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
  );
};
export default CourseModal;
