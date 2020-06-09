
const initialState = {
  data: {}, error: {}
};

const fetchCourseCommentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_COMMENTS_SUCCESS":
      return {
        ...state,
        data: action.payload
      };
    case "FETCH_COMMENTS_FAIL":
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
export default fetchCourseCommentsReducer;
