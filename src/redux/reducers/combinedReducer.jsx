import { combineReducers } from "redux";
import loginReducer from "./loginReducer.jsx";
import signUpReducer from "./signUpReducer.jsx";
import fetchCoursesReducer from "./fetchCoursesReducer.jsx";
import fetchSingleCourseReducer from "./fetchSingleCourseReducer.jsx";
import fetchCourseModuleReducer from "./fetchCourseModuleReducer.jsx";
import fetchCourseCommentsReducer from "./fetchCourseCommentsReducer.jsx";
import fetchBlogsReducer from "./fetchBlogsReducer.jsx";
import deleteCourseReducer from "./deleteCourseReducer.jsx";
import addCourseReducer from "./addCourseReducer.jsx";
import addCommentReducer from "./addCommentReducer.jsx";
import enrollReducer from "./enrollReducer.jsx";

export default combineReducers({
  loginReducer,
  signUpReducer,
  fetchCoursesReducer,
  fetchSingleCourseReducer,
  fetchCourseModuleReducer,
  fetchCourseCommentsReducer,
  fetchBlogsReducer,
  deleteCourseReducer,
  addCourseReducer,
  addCommentReducer,
  enrollReducer
});
