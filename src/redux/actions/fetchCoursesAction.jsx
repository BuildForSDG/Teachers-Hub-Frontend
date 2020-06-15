import * as actions from "./actionTypes.jsx";

const { REACT_APP_BASE_URL } = process.env;

const fetchCoursesAction = () => (dispatch) => fetch(`${REACT_APP_BASE_URL}/api/v1/courses`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json"
  },
  mode: "cors"
})
  .then((response) => response.json())
  .then((json) => {
    if (json.courses) {
      dispatch(actions.fetchCoursesSuccess(json));
    } else {
      dispatch(actions.fetchCoursesFail(json));
    }
  })
  .catch((err) => err);
export default fetchCoursesAction;
