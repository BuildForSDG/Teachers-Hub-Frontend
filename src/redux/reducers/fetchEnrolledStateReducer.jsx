const initialState = {
  data: {},
  error: {}
};

const fetchEnrolledStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ENROLLED_STATE_SUCCESS":
      return {
        ...state,
        data: action.payload
      };
    case "FETCH_ENROLLED_STATE_FAILURE":
      return {
        ...state,
        error: action.payload
      };
    default:
      return {
        ...state
      };
  }
};

export default fetchEnrolledStateReducer;
