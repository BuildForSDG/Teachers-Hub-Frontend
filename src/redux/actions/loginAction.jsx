import * as actions from "./actionTypes.jsx";


const { REACT_APP_BASE_URL } = process.env;


const loginAction = (payload) => (dispatch) => fetch(`${REACT_APP_BASE_URL}/api/v1/auth/login`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  mode: "cors",
  body: JSON.stringify(
    payload
  )
})
  .then((response) => response.json())
  .then((json) => {
    if ("token" in json) {
      localStorage.setItem("token", json.token);
      dispatch(actions.loginSuccess(json));
    } else {
      dispatch(actions.loginFail(json));
    }
  })
  .catch((err) => err);
export default loginAction;
