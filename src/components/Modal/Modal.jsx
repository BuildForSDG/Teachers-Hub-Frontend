/* eslint-disable react/prop-types */
import React from "react";
import { Modal, Button } from "react-bootstrap";
import { MDBInput } from "mdbreact";
import "react-toastify/dist/ReactToastify.css";

const CourseModal = (props) => {
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
      <MDBInput label="Course Category" name="course_category" type="text"
        success="right" />
      <MDBInput label="Course Title" name="course_title"  type="text" onChange={props.onChange}
        success="right" />
      <MDBInput label="Course Duration in hours" name="course_duration "  type="text"
        error="wrong" success="right" />
      <MDBInput label="Course Description" name="course_description"  type="text" />
      <MDBInput label="Course Instructor" name="course_instructor" type="text" />
    </div>
  </form>
    </Modal.Body>
    <Modal.Footer>
        <Button onClick={() => props.handleSubmit(props.id)}>Update Course</Button>
      <Button onClick={props.onHide}>Close</Button>
    </Modal.Footer>
  </Modal>
  );
};
export default CourseModal;
