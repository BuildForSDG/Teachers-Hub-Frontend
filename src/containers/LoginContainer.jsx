import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "../components/Login.jsx";
import loginAction from "../redux/actions/loginAction.jsx";

const jwt = require("jsonwebtoken");

const LoginContainer = () => {
  const loginData = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();
  const [loginDetails, setLoginDetails] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAction(loginDetails));
  };

  const handleSuccess = () => {
    if (loginData.data) {
      toast.success(<p className="text-white">
        Login successful
      </p>);
      const { token } = loginData.data;
      const decoded = jwt.decode(token);

      if (decoded.identity.role[0] === "Admin") {
        setTimeout(() => window.location.assign("/admin"), 400);
      } else if (decoded.identity.role[0] === "Teacher") {
        setTimeout(() => window.location.assign("/teacher"), 400);
      } else {
        setTimeout(() => window.location.assign("/institution"), 400);
      }
    }
  };

  const handleErrors = () => {
    if (loginData.error) {
      toast.error(<p>
        {loginData.error.message}
      </p>);
    }
  };

  useEffect(() => {
    if (loginData.data.message) {
      handleSuccess();
    }
    if (!loginData.data.message && loginData.error.message) {
      handleErrors();
    }
  }, [loginData]);


  return (
      <div>
          <Login onChange={handleChange} onSubmit={handleSubmit} />
         {(Object.keys(loginData.data).length === 0
         && !Object.keys(loginData.error).length === 0) ? null : <ToastContainer
        position="top-right"
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={false}
        draggable={false}
        rtl={false}
        autoClose={900}
      /> }
      </div>
  );
};
export default LoginContainer;
