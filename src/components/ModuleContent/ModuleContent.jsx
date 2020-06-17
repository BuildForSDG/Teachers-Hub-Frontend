/* eslint-disable react/prop-types */
import React, { useState } from "react";
import VideoModal from "../CoursePlayer/VideoModal.jsx";
import { capitalize } from "../SingleCourse/utils";

const ModuleContent = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const [activeModuleContent, setActiveModuleContent] = useState();

  const handleClick = (modulecontent) => {
    setModalShow(true);
    setActiveModuleContent(modulecontent);
  };

  return (
<div>
  <ul style={{ listStyleType: "none" }}>
    {props.moduleData && props.moduleData.length ? props.moduleData.map((module) => (
        <li key={module.module_content_id} onClick={() => handleClick(module.module_content)} style={{ color: "#7971ea", cursor: "pointer" }}>
        {capitalize(module.module_content_title)}
      </li>
    )) : <li>No module content yet for this module</li>}
     <VideoModal show={modalShow}
        content={activeModuleContent} onHide={() => setModalShow(!modalShow)}/>
  </ul>
</div>);
};

export default ModuleContent;
