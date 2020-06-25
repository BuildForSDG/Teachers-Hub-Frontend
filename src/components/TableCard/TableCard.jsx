/* eslint-disable react/prop-types */
import * as React from "react";
import CoursesTable from "../CoursesTable/CoursesTable.jsx";

const TableCard = (props) => (
  <>
    <h5 style={{ textAlign: "center", color: "#000" }}>MY COURSES</h5>
    <CoursesTable renderPagination={props.renderPagination} getDataByPage={props.getDataByPage} />
  </>
);

export default TableCard;
