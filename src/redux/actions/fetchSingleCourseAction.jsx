import * as actions from "./actionTypes.jsx";

const { REACT_APP_BASE_URL } = process.env;

const fetchSingleCourseAction = (id) => (dispatch) => fetch(`${REACT_APP_BASE_URL}/api/v1/courses/${id}`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json"
  },
  mode: "cors"
})
  .then((response) => response.json())
  .then((json) => {
    if (json.course) {
      dispatch(actions.fetchSingleCourseSuccess(json));
    } else {
      dispatch(actions.fetchSingleCourseFail(json));
    }
  })
  .catch((err) => err);
export default fetchSingleCourseAction;
