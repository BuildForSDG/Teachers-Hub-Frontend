import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loginAction from "../redux/actions/loginAction.jsx";
import Login from "../components/Login.jsx";

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
    if (loginData.data.message === "successfully logged in") {
      toast.success(<p className="text-white">
        Login successful
      </p>);
      window.location.replace("/dashboard");
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
          <Login value={loginDetails} onChange={handleChange} onSubmit={handleSubmit} />
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
