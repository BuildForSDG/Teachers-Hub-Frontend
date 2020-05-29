export const loginSuccess = (payload) => ({
  type: "LOGIN_SUCCESS",
  payload
});

export const loginFail = (error) => ({
  type: "LOGIN_FAIL",
  error
});
