const initialState = {
  data: {},
  error: {}
};

const deleteOrganizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_ORGANIZATION_SUCCESS":
      return {
        ...state,
        data: action.payload
      };
    case "DELETE_ORGANIZATION_FAIL":
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
export default deleteOrganizationReducer;
