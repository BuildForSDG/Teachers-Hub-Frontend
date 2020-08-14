import axios from "axios";
import * as actions from "./actionTypes.jsx";

const { REACT_APP_BASE_URL } = process.env;

const fetchOrganizationsAction = () => (dispatch) =>
  axios
    .get(`${REACT_APP_BASE_URL}/api/v1/organizations`, {
      headers: {
        "Content-Type": "application/json"
      },
      mode: "cors"
    })
    .then(
      (response) => {
        if (response.data.organizations) {
          dispatch(actions.fetchOrganizationsSuccess(response.data));
        } else {
          dispatch(actions.fetchOrganizationsFail(response.data));
        }
      },
      (error) => error
    );
export default fetchOrganizationsAction;
