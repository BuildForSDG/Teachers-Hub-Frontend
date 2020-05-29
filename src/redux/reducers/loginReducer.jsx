const initialState = {
  data: {}, error: {}
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        data: action.payload
      };
    case "LOGIN_FAIL":
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
export default loginReducer;
