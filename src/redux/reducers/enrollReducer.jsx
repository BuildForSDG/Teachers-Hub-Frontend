const initialState = {
  data: {},
  error: {}
};

const enrollReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ENROLL_SUCCESS":
      return {
        ...state,
        data: action.payload
      };
    case "ENROLL_FAIL":
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
export default enrollReducer;
