const initialState = {
  data: {}, error: {}
};

const addCommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COMMENT_SUCCESS":
      return {
        ...state,
        data: action.payload
      };
    case "ADD_COMMENT_FAIL":
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
export default addCommentReducer;
