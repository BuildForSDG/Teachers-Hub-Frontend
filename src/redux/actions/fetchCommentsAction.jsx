import * as actions from "./actionTypes.jsx";

const { REACT_APP_BASE_URL } = process.env;

const fetchCommentsAction = (id) => (dispatch) => fetch(`${REACT_APP_BASE_URL}/api/v1/courses/${id}/comments`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json"
  },
  mode: "cors"
})
  .then((response) => response.json())
  .then((json) => {
    if (json.comments) {
      dispatch(actions.fetchCommentsSuccess(json));
    } else {
      dispatch(actions.fetchCommentsFail(json));
    }
  })
  .catch((err) => err);
export default fetchCommentsAction;
