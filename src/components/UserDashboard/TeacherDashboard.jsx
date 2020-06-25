/* eslint-disable react/prop-types */
import React from "react";
import UserDashboard from "./UserDashboard.jsx";
import TableCard from "../TableCard/TableCard.jsx";

const TeacherDashboard = (props) => (
  <div>
    <UserDashboard onClick={props.onClick} onChange={props.onChange} />
    <div className="row">
      <div
        className="col-sm-8 card-body"
        style={{
          margin: "0 auto",
          float: "none",
          marginBottom: "10px;"
        }}
      >
        <TableCard getDataByPage={props.getDataByPage} renderPagination={props.renderPagination} />
      </div>
    </div>
  </div>
);
export default TeacherDashboard;
