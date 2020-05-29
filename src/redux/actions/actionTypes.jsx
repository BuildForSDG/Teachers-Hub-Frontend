export const loginSuccess = (payload) => ({
  type: "LOGIN_SUCCESS",
  payload
});

export const loginFail = (error) => ({
  type: "LOGIN_FAIL",
  error
});

export const signUpSuccess = (payload) => ({
  type: "SIGNUP_SUCCESS",
  payload
});

export const signUpFail = (error) => ({
  type: "SIGNUP_FAIL",
  error
});
