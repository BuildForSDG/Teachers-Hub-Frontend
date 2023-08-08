import axios from "axios";
import * as actions from "./actionTypes.jsx";

const { REACT_APP_BASE_URL } = process.env;

const fetchCoursesAction = () => (dispatch) =>
  axios
    .get(`${REACT_APP_BASE_URL}/api/v1/courses`, {
      headers: {
        "Content-Type": "application/json"
      },
      mode: "cors"
    })
    .then(
      (response) => {
        if (response.data.courses) {
          dispatch(actions.fetchCoursesSuccess(response.data.courses));
        } else {
          dispatch(actions.fetchCoursesFail(response.data));
        }
      },
      (error) => error
    );
export default fetchCoursesAction;
