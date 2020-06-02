import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CourseCard } from "../components/CourseCard";
import fetchCoursesAction from "../redux/actions/fetchCoursesAction.jsx";


const CourseCardContainer = () => {
  const dispatch = useDispatch();
  const courseData = useSelector((state) => state.fetchCoursesReducer);


  useEffect(() => {
    dispatch(fetchCoursesAction());
  }, []);
  return (
      <div>
        <CourseCard data={courseData} />
      </div>
  );
};
export default CourseCardContainer;
