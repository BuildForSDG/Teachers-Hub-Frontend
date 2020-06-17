/* eslint-disable react/prop-types */
import React from "react";
import { Modal, Button } from "react-bootstrap";
import { isWebUri } from "valid-url";
import CoursePlayer from "./CoursePlayer.jsx";

const VideoModal = (props) => (
        <div>
            {isWebUri(props.content)
              ? <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Body>
  <CoursePlayer moduleContent={props.content} />
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={props.onHide}>Close</Button>
    </Modal.Footer>
  </Modal> : <Modal {...props} size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered><Modal.Body>{props.content}</Modal.Body>
     <Modal.Footer>
      <Button onClick={props.onHide}>Close</Button>
    </Modal.Footer>
    </Modal>}
        </div>
);
export default VideoModal;
