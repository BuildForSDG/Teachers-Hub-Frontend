import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "../components/Login.jsx";
import loginAction from "../redux/actions/loginAction.jsx";

const jwt = require("jsonwebtoken");

const LoginContainer = () => {
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
  };

  const handleSuccess = () => {
    if (loginData.data) {
      setLoading(false);
      toast.success(<p className="text-white">Login successful</p>);
      const { token } = loginData.data;
      const decoded = jwt.decode(token);

      if (decoded.identity.role[0] === "Admin") {
        setTimeout(() => window.location.replace("/admin"), 400);
      } else if (decoded.identity.role[0] === "Teacher") {
        setTimeout(() => window.location.replace("/teacher"), 400);
      } else {
        setTimeout(() => window.location.replace("/instructor"), 400);
      }
    }
  };

  const handleErrors = () => {
    if (loginData.error) {
      setLoading(false);
      toast.error(<p>{loginData.error.message}</p>);
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
      <Login onChange={handleChange} onSubmit={handleSubmit} loading={loading} />
    </div>
  );
};
export default LoginContainer;
