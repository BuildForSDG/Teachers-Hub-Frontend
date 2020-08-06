import * as actions from "./actionTypes.jsx";

const { REACT_APP_BASE_URL } = process.env;

const token = localStorage.getItem("token");

const deleteBlogAction = (id) => (dispatch) =>
  fetch(`${REACT_APP_BASE_URL}/api/v1/articles/${id}`, {
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
        dispatch(actions.deleteBlogSuccess(json));
      } else {
        dispatch(actions.deleteBlogFailure(json));
      }
    })
    .catch((err) => err);
export default deleteBlogAction;
