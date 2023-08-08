/* eslint-disable react/prop-types */
import React from "react";
import { CourseCard } from "../components/CourseCard";

const CourseCardContainer = ({ courseData }) => (
  <div>
    <CourseCard courseData={[courseData].flat()} />
  </div>
);
export default CourseCardContainer;
