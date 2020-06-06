/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SingleCourse } from "../components/SingleCourse";
import fetchSingleCourseAction from "../redux/actions/fetchSingleCourseAction.jsx";
import fetchCourseModulesAction from "../redux/actions/fetchCourseModulesAction.jsx";

const SingleCourseContainer = (props) => {
  const dispatch = useDispatch();
  const singleCourseData = useSelector((state) => state.fetchSingleCourseReducer);
  const courseModuleData = useSelector((state) => state.fetchCourseModuleReducer);
  useEffect(() => {
    dispatch(fetchSingleCourseAction(props.match.params.id));
    dispatch(fetchCourseModulesAction(props.match.params.id));
  }, []);


  return (
        <div>
        <SingleCourse data={singleCourseData} modules={courseModuleData} />
    </div>
  );
};
export default SingleCourseContainer;
