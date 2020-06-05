const initialState = {
  data: {}, error: {}
};

const fetchSingleCourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_SINGLE_COURSE_SUCCESS":
      return {
        ...state,
        data: action.payload
      };
    case "FETCH_SINGLE_COURSE_FAIL":
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
export default fetchSingleCourseReducer;
