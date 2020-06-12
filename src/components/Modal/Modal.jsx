/* eslint-disable react/prop-types */
import React from "react";
import { Modal, Button } from "react-bootstrap";
import { MDBInput } from "mdbreact";

const CourseModal = (props) => {
  const handleChange = () => {
    console.log("clciked");
  };

  const handleSubmit = () => {
    console.log("submit");
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
          <MDBInput label="Course Category" group type="text" validate error="wrong" onChange={handleChange}
            success="right" />
          <MDBInput label="Course Title" group type="text" validate error="wrong" onChange={handleChange}
            success="right" />
          <MDBInput label="Course Duration in hours" group type="text" validate onChange={handleChange}
            error="wrong" success="right" />
          <MDBInput label="Course Description" group type="text" validate onChange={handleChange} />
          <MDBInput label="Course Instructor" group type="text" validate onChange={handleChange} />
        </div>
      </form>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={handleSubmit}>Update Course</Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
  );
};
export default CourseModal;
