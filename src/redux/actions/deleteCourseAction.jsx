import * as actions from "./actionTypes.jsx";

const { REACT_APP_BASE_URL } = process.env;

const token = localStorage.getItem("token");

const deleteCourseAction = (id) => (dispatch) => fetch(`${REACT_APP_BASE_URL}/api/v1/courses/${id}`, {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`

  },
  mode: "cors"
})
  .then((response) => response.json())
  .then((json) => {
    if (json.course) {
      dispatch(actions.deleteCourseSuccess(json));
    } else {
      dispatch(actions.deleteCourseFail(json));
    }
  })
  .catch((err) => err);
export default deleteCourseAction;
