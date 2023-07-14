const initialState = {
  data: {},
  error: {}
};

const fetchEnrolledCoursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ENROLLED_COURSES_SUCCESS":
      return {
        ...state,
        data: action.payload
      };
    case "FETCH_ENROLLED_COURSES_FAIL":
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
export default fetchEnrolledCoursesReducer;
