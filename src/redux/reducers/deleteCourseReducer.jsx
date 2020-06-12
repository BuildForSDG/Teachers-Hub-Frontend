const initialState = {
  data: {}, error: {}
};

const deleteCourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_COURSE_SUCCESS":
      return {
        ...state,
        data: action.payload
      };
    case "DELETE_COURSE_FAIL":
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
export default deleteCourseReducer;
