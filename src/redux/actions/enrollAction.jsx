/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable linebreak-style */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable linebreak-style */
import * as actions from "./actionTypes.jsx";

const { REACT_APP_BASE_URL } = process.env;
const token = localStorage.getItem("token");

const enrollAction = (courseId) => (dispatch) =>
  fetch(`${REACT_APP_BASE_URL}/api/v1/courses/${courseId}/enroll`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    mode: "cors"
  })
    .then((response) => response.json())
    .then((json) => {
      if (json.message === "successfully enrolled") {
        dispatch(actions.enrollSuccess(json));
      } else {
        dispatch(actions.enrollFail(json));
      }
    })
    .catch((err) => err);
export default enrollAction;
