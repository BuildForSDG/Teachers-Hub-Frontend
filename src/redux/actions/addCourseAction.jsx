/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable linebreak-style */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable linebreak-style */
import * as actions from "./actionTypes.jsx";

const { REACT_APP_BASE_URL } = process.env;

const addCourseAction = (payload) => (dispatch) =>
  fetch(`${REACT_APP_BASE_URL}/api/v1/courses`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    mode: "cors",
    body: JSON.stringify(payload)
  })
    .then((response) => response.json())
    .then((json) => {
        console.log(json)
      if (json.message === "user registered successfully") {
        dispatch(actions.addCourseSuccess(json));
      } else {
        dispatch(actions.addCourseFail(json));
      }
    })
    .catch((err) => err);
export default addCourseAction;
