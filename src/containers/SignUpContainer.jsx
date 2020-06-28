/* eslint camelcase: ["error", {properties: "never"}] */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SignupForm } from "../components/SignupForm";
import signUpAction from "../redux/actions/signupAction.jsx";

const SignUpContainer = () => {
  const [loading, setLoading] = useState(false);
  const [signUpDetails, setSignUpDetails] = useState({
    username: "",
    password: "",
    email: "",
    confirm_password: "",
    role: "Teacher"
  });
  const dispatch = useDispatch();
  const signUpData = useSelector((state) => state.signUpReducer);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpDetails((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUpAction(signUpDetails));
    setLoading(true);
  };

  const handleSignUpSuccess = () => {
    if (signUpData.data) {
      toast.success(<p className="text-white">Sign Up Successful</p>);
      setLoading(false);
      setTimeout(() => window.location.assign("/login"), 400);
    }
  };

  const handleSignUpFail = () => {
    if (signUpData.error) {
      toast.error(<p>{signUpData.error.message}</p>);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (signUpData.data.message) {
      handleSignUpSuccess();
    }
    if (!signUpData.data.message && signUpData.error.message) {
      handleSignUpFail();
    }
  }, [signUpData]);

  return (
    <div>
      <SignupForm onChange={handleChange} onSubmit={handleSubmit} loading={loading} />
    </div>
  );
};
export default SignUpContainer;
