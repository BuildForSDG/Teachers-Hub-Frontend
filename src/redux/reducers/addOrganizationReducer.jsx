const initialState = {
  data: {},
  error: {}
};

const addOrganizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ORGANIZATION_SUCCESS":
      return {
        ...state,
        data: action.payload
      };
    case "ADD_ORGANIZATION_FAIL":
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
export default addOrganizationReducer;
