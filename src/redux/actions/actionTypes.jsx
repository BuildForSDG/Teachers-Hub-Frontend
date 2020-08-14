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

export const fetchCommentsFail = (error) => ({
  type: "FETCH_COMMENTS_FAIL",
  error
});

export const fetchCommentsSuccess = (payload) => ({
  type: "FETCH_COMMENTS_SUCCESS",
  payload
});

export const fetchBlogsSuccess = (payload) => ({
  type: "FETCH_BLOGS_SUCCESS",
  payload
});

export const fetchBlogsFail = (error) => ({
  type: "FETCH_BLOGS_FAIL",
  error
});

export const deleteCourseSuccess = (payload) => ({
  type: "DELETE_COURSE_SUCCESS",
  payload
});

export const deleteCourseFail = (error) => ({
  type: "DELETE_COURSE_FAIL",
  error
});

export const addCourseSuccess = (payload) => ({
  type: "ADD_COURSE_SUCCESS",
  payload
});

export const addCourseFail = (error) => ({
  type: "ADD_COURSE_FAIL",
  error
});

export const commentSuccess = (payload) => ({
  type: "ADD_COMMENT_SUCCESS",
  payload
});

export const commentFail = (error) => ({
  type: "ADD_COMMENT_FAIL",
  error
});

export const enrollSuccess = (payload) => ({
  type: "ENROLL_SUCCESS",
  payload
});

export const enrollFail = (error) => ({
  type: "ENROLL_FAIL",
  error
});

export const addOrganizationSuccess = (payload) => ({
  type: "ADD_ORGANIZATION_SUCCESS",
  payload
});

export const addOrganizationFail = (error) => ({
  type: "ADD_ORGANIZATION_FAIL",
  error
});

export const deleteOrganizationSuccess = (payload) => ({
  type: "DELETE_ORGANIZATION_SUCCESS",
  payload
});

export const deleteOrganizationFail = (error) => ({
  type: "DELETE_ORGANIZATION_FAIL",
  error
});

export const fetchOrganizationsSuccess = (payload) => ({
  type: "FETCH_ORGANIZATIONS_SUCCESS",
  payload
});

export const fetchOrganizationsFail = (error) => ({
  type: "FETCH_ORGANIZATIONS_FAIL",
  error
});
