const initialState = {
  data: {},
  error: {}
};

const deleteBlogReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_BLOG_SUCCESS":
      return {
        ...state,
        data: action.payload
      };
    case "DELETE_BLOG_FAILURE":
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
export default deleteBlogReducer;
