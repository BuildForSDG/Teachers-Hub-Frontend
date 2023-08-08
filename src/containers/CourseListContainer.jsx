import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TeacherDashboard from "../components/UserDashboard/TeacherDashboard.jsx";
import fetchCoursesAction from "../redux/actions/fetchCoursesAction.jsx";
import fetchEnrolledCoursesAction from "../redux/actions/fetchEnrolledCoursesAction.jsx";

const CourseListContainer = () => {
  const dispatch = useDispatch();
  const EnrolledCoursesList = useSelector((state) => state.fetchEnrolledCoursesReducer);
  const AllCoursesList = useSelector((state) => state.fetchCoursesReducer);

  useEffect(() => {
    dispatch(fetchEnrolledCoursesAction());
    dispatch(fetchCoursesAction());
  }, []);

  return (
    <div>
      <TeacherDashboard enrolledcourses={EnrolledCoursesList.data} allcourses={AllCoursesList.data} />
    </div>
  );
};

export default CourseListContainer;
