/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable linebreak-style */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable linebreak-style */
import * as actions from "./actionTypes.jsx";

const { REACT_APP_BASE_URL } = process.env;

const signUpAction = (payload) => (dispatch) =>
  fetch(`${REACT_APP_BASE_URL}/api/v1/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    mode: "cors",
    body: JSON.stringify(payload)
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
