export const loginSuccess = (payload) => ({
  type: "LOGIN_SUCCESS",
  payload
});

export const loginFail = (error) => ({
  type: "LOGIN_FAIL",
  error
});

export const signUpSuccess = (payload) => ({
  type: "SIGNUP_SUCCESS",
  payload
});

export const signUpFail = (error) => ({
  type: "SIGNUP_FAIL",
  error
});

export const fetchCoursesSuccess = (payload) => ({
  type: "FETCH_COURSES_SUCCESS",
  payload
});

export const fetchCoursesFail = (error) => ({
  type: "FETCH_COURSES_FAIL",
  error
});

export const fetchSingleCourseSuccess = (payload) => ({
  type: "FETCH_SINGLE_COURSE_SUCCESS",
  payload
});

export const fetchSingleCourseFail = (error) => ({
  type: "FETCH_SINGLE_COURSE_FAIL",
  error
});

export const fetchCourseModuleSuccess = (payload) => ({
  type: "FETCH_COURSE_MODULE_SUCCESS",
  payload
});

export const fetchCourseModulesFail = (error) => ({
  type: "FETCH_COURSE_MODULE_FAIL",
  error
});
