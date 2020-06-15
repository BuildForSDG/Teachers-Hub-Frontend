import React from "react";
import SidePanel from "./SidePanel.jsx";
import MainPanel from "./MainPanel.jsx";
import RightPanel from "./RightPanel.jsx";

const CommunityMainSection = () => (
<div className="container">
  <div className="row">
    <div className="col-sm">
        <SidePanel />
    </div>
    <div className="col-sm">
        <MainPanel />
    </div>
    <div className="col-sm">
        <RightPanel />
    </div>
  </div>
  </div>
);

export default CommunityMainSection;
