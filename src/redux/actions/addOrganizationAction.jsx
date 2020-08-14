/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable linebreak-style */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable linebreak-style */
import * as actions from "./actionTypes.jsx";

const { REACT_APP_BASE_URL } = process.env;
const token = localStorage.getItem("token");

const addOrganizationAction = (payload) => (dispatch) =>
  fetch(`${REACT_APP_BASE_URL}/api/v1/organizations`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    mode: "cors",
    body: JSON.stringify(payload)
  })
    .then((response) => response.json())
    .then((json) => {
      if (json.message === "organization added successfully") {
        dispatch(actions.addOrganizationSuccess(json));
      } else {
        dispatch(actions.addOrganizationFail(json));
      }
    })
    .catch((err) => err);
export default addOrganizationAction;
