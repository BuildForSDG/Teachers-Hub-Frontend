/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable linebreak-style */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable linebreak-style */
import * as actions from "./actionTypes.jsx";

const { REACT_APP_BASE_URL } = process.env;
const token = localStorage.getItem("token");

const postCommentAction = (id, payload) => (dispatch) =>
  fetch(`${REACT_APP_BASE_URL}/api/v1/courses/${id}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    mode: "cors",
    body: JSON.stringify(payload)
  })
    .then((response) => response.json())
    .then((json) => {
      if (json.message === "comment added successfully") {
        dispatch(actions.commentSuccess(json));
      } else {
        dispatch(actions.commentFail(json));
      }
    })
    .catch((err) => err);
export default postCommentAction;
