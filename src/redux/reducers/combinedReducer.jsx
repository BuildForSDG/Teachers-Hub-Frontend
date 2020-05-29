import { combineReducers } from "redux";
import loginReducer from "./loginReducer.jsx";
import signUpReducer from "./signUpReducer.jsx";

export default combineReducers({
  loginReducer,
  signUpReducer
});
