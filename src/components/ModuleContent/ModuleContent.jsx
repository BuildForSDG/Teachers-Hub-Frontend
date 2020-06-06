/* eslint-disable react/prop-types */
import React from "react";

const ModuleContent = (props) => (<div>
  <ul>
    {props.moduleData.length > 0 ? props.moduleData.map((module, index) => (
        <li key={index}>
        <a href="/modules/">{module.module_content_title}</a>
      </li>
    )) : <li>No module content yet for this module</li>}
  </ul>
</div>);

export default ModuleContent;
