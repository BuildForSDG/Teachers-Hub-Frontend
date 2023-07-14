import axios from "axios";
import * as actions from "./actionTypes.jsx";

const { REACT_APP_BASE_URL } = process.env;
const token = localStorage.getItem("token");

const fetchEnrolledCoursesAction = () => (dispatch) =>
  axios
    .get(`${REACT_APP_BASE_URL}/api/v1/courses/enrolled`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      mode: "cors"
    })
    .then(
      (response) => {
        if (response.data.enrolled_courses) {
          dispatch(actions.fetchEnrolledCoursesSuccess(response.data.enrolled_courses));
        } else {
          dispatch(actions.fetchEnrolledCoursesFail(response));
        }
      },
      (error) => error
    );
export default fetchEnrolledCoursesAction;
