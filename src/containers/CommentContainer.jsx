/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Comment } from "../components/Comment/Comment.jsx";
import fetchCommentsAction from "../redux/actions/fetchCommentsAction.jsx";
import postCommentAction from "../redux/actions/postCommentAction.jsx";
import { isAuthenticated } from "../utils";

const CommentsContainer = (props) => {
  const dispatch = useDispatch();
  const commentData = useSelector((state) => state.fetchCourseCommentsReducer);
  useSelector((state) => state.addCommentReducer);
  const [commentBody, setCommentBody] = useState();
  const [commentState, setCommentState] = useState(0);

  useEffect(() => {
    dispatch(fetchCommentsAction(props.courseId));
  }, [commentState]);

  const incrementComment = () => {
    setCommentState(commentState + 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCommentBody((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postCommentAction(props.courseId, commentBody));
    incrementComment();
    if (isAuthenticated) {
      dispatch(postCommentAction(props.courseId, commentBody));
    } else {
      toast.error(<p>Please login to add a comment</p>);
    }
  };

  return (
    <div>
      <Comment data={commentData} onChange={handleChange} onSubmit={handleSubmit} />

      {Object.keys(commentData.data).length === 0 && !Object.keys(commentData.error).length === 0 ? null : (
        <ToastContainer
          position="top-right"
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick={false}
          draggable={false}
          rtl={false}
          autoClose={1000}
        />
      )}
    </div>
  );
};
export default CommentsContainer;
