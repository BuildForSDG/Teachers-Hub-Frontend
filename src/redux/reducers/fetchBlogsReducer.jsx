const initialState = {
  data: {}, error: {}
};

const fetchBlogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_BLOGS_SUCCESS":
      return {
        ...state,
        data: action.payload
      };
    case "FETCH_BLOGS_FAIL":
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
export default fetchBlogsReducer;
