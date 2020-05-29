const initialState = {
  data: {}, error: {}
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNUP_SUCCESS":
      return {
        ...state,
        data: action.payload
      };
    case "SIGNUP_FAIL":
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
export default signUpReducer;
