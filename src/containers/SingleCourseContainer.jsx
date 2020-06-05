/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SingleCourse } from "../components/SingleCourse";
import fetchSingleCourseAction from "../redux/actions/fetchSingleCourseAction.jsx";

const SingleCourseContainer = (props) => {
  const dispatch = useDispatch();
  const singleCourseData = useSelector((state) => state.fetchSingleCourseReducer);
  useEffect(() => {
    dispatch(fetchSingleCourseAction(props.match.params.id));
  }, []);


  // useEffect(() => {
  //   if (singleCourseData.data.course) {
  //     props.history.push(`/courses/${props.match.params.id}`);
  //   }
  // }, [singleCourseData]);


  return (
        <div>
        <SingleCourse data={singleCourseData} />
    </div>
  );
};
export default SingleCourseContainer;
