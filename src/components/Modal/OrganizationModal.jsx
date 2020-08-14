/* eslint-disable react/prop-types */
import React from "react";
import { Modal, Button } from "react-bootstrap";
import { MDBInput } from "mdbreact";
import "react-toastify/dist/ReactToastify.css";

const OrganizationModal = (props) => (
  <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">Update organisation</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <form>
        <div className="grey-text">
          <MDBInput
            label="Organization Name"
            name="organization_name"
            type="text"
            onChange={props.onChange}
            success="right"
          />
        </div>
      </form>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={() => props.handleSubmit(props.id)}>Update Organization</Button>
      <Button onClick={props.onHide}>Close</Button>
    </Modal.Footer>
  </Modal>
);
export default OrganizationModal;
