const initialState = {
  data: {},
  error: {}
};

const fetchOrganizationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ORGANIZATIONS_SUCCESS":
      return {
        ...state,
        data: action.payload
      };
    case "FETCH_ORGANISATIONS_FAIL":
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
export default fetchOrganizationsReducer;
