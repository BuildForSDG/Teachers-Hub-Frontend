const initialState = {
  data: {}, error: {}
};

const fetchCourseModuleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_COURSE_MODULE_SUCCESS":
      return {
        ...state,
        data: action.payload
      };
    case "FETCH_COURSE_MODULE_FAIL":
      return {
        ...state,
        error: action.error
      };
    default:
      return {
        ...state
      };
  }
};
export default fetchCourseModuleReducer;
