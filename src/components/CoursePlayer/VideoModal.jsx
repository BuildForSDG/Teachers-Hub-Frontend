/* eslint-disable react/prop-types */
import React from "react";
import { Modal, Button } from "react-bootstrap";
import { isWebUri } from "valid-url";
import CoursePlayer from "./CoursePlayer.jsx";

const VideoModal = (props) => (
  <div>
    {isWebUri(props.content) ? (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>
            <i class="bi bi-file-earmark-play-fill"></i>
            {props.contentTitle}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CoursePlayer moduleContent={props.content} />
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex justify-content-evenly">
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefaultid1" />
              <label class="form-check-label" for="flexSwitchCheckDefaultid1">
                Complete course Section
              </label>
            </div>
            <div className="">
              <Button onClick={props.onHide}>Close</Button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    ) : (
      <Modal {...props} size="xl" aria-labelledby="contained-modal-title-vcenter" centered backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>
            <i class="bi bi-clipboard-heart me-2"></i>
            {props.contentTitle}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.content}</Modal.Body>
        <Modal.Footer>
          <div className="d-flex justify-content-evenly">
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefaultid" />
              <label class="form-check-label" for="flexSwitchCheckDefaultid">
                Complete course Section
              </label>
            </div>
            <div className="">
              <Button onClick={props.onHide}>Close</Button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    )}
  </div>
);
export default VideoModal;
