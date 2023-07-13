/* eslint-disable react/prop-types */
import React, { useState } from "react";
import VideoModal from "../CoursePlayer/VideoModal.jsx";
import { capitalize } from "../SingleCourse/utils";

const ModuleContent = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const [activeModuleContent, setActiveModuleContent] = useState();
  const [activeModuleContentTitle, setActiveModuleContentTitle] = useState();

  const handleClick = (modulecontent, modulecontenttitle) => {
    setModalShow(true);
    setActiveModuleContent(modulecontent);
    setActiveModuleContentTitle(modulecontenttitle);
  };

  return (
    <div>
      <ul style={{ listStyleType: "none" }}>
        {props.moduleData && props.moduleData.length ? (
          props.moduleData.map((module) => (
            <li
              key={module.module_content_id}
              onClick={() => handleClick(module.module_content, module.module_content_title)}
              style={{ color: "#7971ea", cursor: "pointer" }}
            >
              <i class="bi bi-clipboard-heart me-2"></i>
              {capitalize(module.module_content_title)}
            </li>
          ))
        ) : (
          <li>No module content yet for this module</li>
        )}
        <VideoModal
          show={modalShow}
          content={activeModuleContent}
          contentTitle={activeModuleContentTitle}
          onHide={() => setModalShow(!modalShow)}
        />
      </ul>
      <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefaultidmod" />
        <label class="form-check-label" for="flexSwitchCheckDefaultidmod">
          Complete course Section
        </label>
      </div>
    </div>
  );
};

export default ModuleContent;
