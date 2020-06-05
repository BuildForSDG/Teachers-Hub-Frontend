import { combineReducers } from "redux";
import loginReducer from "./loginReducer.jsx";
import signUpReducer from "./signUpReducer.jsx";
import fetchCoursesReducer from "./fetchCoursesReducer.jsx";
import fetchSingleCourseReducer from "./fetchSingleCourseReducer.jsx";
import fetchCourseModuleReducer from "./fetchCourseModuleReducer.jsx";


export default combineReducers({
  loginReducer,
  signUpReducer,
  fetchCoursesReducer,
  fetchSingleCourseReducer,
  fetchCourseModuleReducer
});
