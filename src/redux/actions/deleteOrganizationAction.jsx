import * as actions from "./actionTypes.jsx";

const { REACT_APP_BASE_URL } = process.env;

const token = localStorage.getItem("token");

const deleteOrganizationAction = (id) => (dispatch) =>
  fetch(`${REACT_APP_BASE_URL}/api/v1/organizations/${id}`, {
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
        dispatch(actions.deleteOrganizationSuccess(json));
      } else {
        dispatch(actions.deleteOrganizationFail(json));
      }
    })
    .catch((err) => err);
export default deleteOrganizationAction;
