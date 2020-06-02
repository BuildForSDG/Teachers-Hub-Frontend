const initialState = {
  data: {}, error: {}
};

const fetchCoursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_COURSES_SUCCESS":
      return {
        ...state,
        data: action.payload
      };
    case "FETCH_COURSES_FAIL":
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
export default fetchCoursesReducer;
