/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable linebreak-style */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable linebreak-style */
import * as actions from "./actionTypes.jsx";

const { REACT_APP_BASE_URL } = process.env;
const token = localStorage.getItem("token");

const addCourseAction = (payload) => (dispatch) =>
  fetch(`${REACT_APP_BASE_URL}/api/v1/courses`, {
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
      if (json.message === "course added successfully") {
        dispatch(actions.addCourseSuccess(json));
      } else {
        dispatch(actions.addCourseFail(json));
      }
    })
    .catch((err) => err);
export default addCourseAction;
