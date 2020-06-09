import * as actions from "./actionTypes.jsx";


const { REACT_APP_BASE_URL } = process.env;


const fetchBlogsAction = () => (dispatch) => fetch(`${REACT_APP_BASE_URL}/api/v1/articles`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json"
  },
  mode: "cors"
})
  .then((response) => response.json())
  .then((json) => {
    if (json.message) {
      dispatch(actions.fetchBlogsSuccess(json));
    } else {
      dispatch(actions.fetchBlogsFail(json));
    }
  })
  .catch((err) => err);
export default fetchBlogsAction;
