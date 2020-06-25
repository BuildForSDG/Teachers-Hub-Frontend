/* eslint-disable react/prop-types */
import React from "react";
import { CourseCard } from "../components/CourseCard";

const CourseCardContainer = (props) => (
  <div>
    <CourseCard data={props.courseData} />
  </div>
);
export default CourseCardContainer;
