/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SingleCourse } from "../components/SingleCourse";
import fetchSingleCourseAction from "../redux/actions/fetchSingleCourseAction.jsx";
import fetchCourseModulesAction from "../redux/actions/fetchCourseModulesAction.jsx";
import fetchEnrolledStateAction from "../redux/actions/fetchEnrolledStateAction.jsx";

const SingleCourseContainer = (props) => {
  const dispatch = useDispatch();
  const singleCourseData = useSelector((state) => state.fetchSingleCourseReducer);
  const courseModuleData = useSelector((state) => state.fetchCourseModuleReducer);
  const courseEnrolledStatusData = useSelector((state) => state.fetchEnrolledStateReducer);

  useEffect(() => {
    dispatch(fetchSingleCourseAction(props.match.params.id));
    dispatch(fetchCourseModulesAction(props.match.params.id));
    dispatch(fetchEnrolledStateAction(props.match.params.id));
  }, []);

  return (
    <div>
      <SingleCourse
        data={singleCourseData}
        enrolledstt={courseEnrolledStatusData}
        modules={courseModuleData}
        course_id={props.match.params.id}
      />
    </div>
  );
};
export default SingleCourseContainer;
