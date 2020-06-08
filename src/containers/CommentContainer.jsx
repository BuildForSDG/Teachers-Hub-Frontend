/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Comment } from "../components/Comment/Comment.jsx";
import fetchCommentsAction from "../redux/actions/fetchCommentsAction.jsx";


const CommentsContainer = (props) => {
  const dispatch = useDispatch();
  const commentData = useSelector((state) => state.fetchCourseCommentsReducer);


  useEffect(() => {
    dispatch(fetchCommentsAction(props.courseId));
  }, []);
  return (
      <div>
        <Comment data={commentData} />
      </div>
  );
};
export default CommentsContainer;
