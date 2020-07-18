/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable linebreak-style */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable linebreak-style */
import * as actions from "./actionTypes.jsx";

const { REACT_APP_BASE_URL } = process.env;
const token = localStorage.getItem("token");

const fetchEnrolledStateAction = (courseId) => (dispatch) =>
  fetch(`${REACT_APP_BASE_URL}/api/v1/courses/enrolled/${courseId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    mode: "cors"
  })
    .then((response) => response.json())
    .then((json) => {
      if (json.message === "Registered") {
        dispatch(actions.fetchEnrolledStateSuccess(json));
      } else if (json.message === "Not Registered") {
        dispatch(actions.fetchEnrolledStateFailure(json));
      } else if (json.msg === "Missing Authorization Header") {
        dispatch(actions.fetchEnrolledStateFailure(json));
      } else {
        dispatch(actions.fetchEnrolledStateFailure(json));
      }
    })
    .catch((err) => {
      const errorMSG = err.message;
      dispatch(actions.fetchEnrolledStateFailure(errorMSG));
    });
export default fetchEnrolledStateAction;
