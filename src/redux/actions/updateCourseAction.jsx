import * as actions from "./actionTypes.jsx";


const { REACT_APP_BASE_URL } = process.env;
const token = localStorage.getItem("token");


const signUpAction = (id, payload) => (dispatch) => fetch(`${REACT_APP_BASE_URL}/api/v1/courses/${id}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  },
  mode: "cors",
  body: JSON.stringify(
    payload
  )
})
  .then((response) => response.json())
  .then((json) => {
    if (json.message === "user registered successfully") {
      dispatch(actions.signUpSuccess(json));
    } else {
      dispatch(actions.signUpFail(json));
    }
  })
  .catch((err) => err);
export default signUpAction;
