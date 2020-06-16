import * as actions from "./actionTypes.jsx";

const { REACT_APP_BASE_URL } = process.env;

const fetchCourseModulesAction = (id) => (dispatch) => fetch(`${REACT_APP_BASE_URL}/api/v1/courses/${id}/modules`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json"
  },
  mode: "cors"
})
  .then((response) => response.json())
  .then((json) => {
    if (typeof json.message === "object") {
      dispatch(actions.fetchCourseModuleSuccess(json));
    } else {
      dispatch(actions.fetchCourseModulesFail(json));
    }
  })
  .catch((err) => err);

export default fetchCourseModulesAction;
