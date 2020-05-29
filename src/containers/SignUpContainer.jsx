import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SignupForm } from "../components/SignupForm";
import signUpAction from "../redux/actions/signupAction.jsx";

const SignUpContainer = () => {
  const [signUpDetails, setSignUpDetails] = useState({
    username: "", password: "", email: "", confirm_password: "", role: "Teacher"
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
  };

  const handleSignUpSuccess = () => {
    if (signUpData.data) {
      toast.success(<p className="text-white">
        Sign Up Successful
      </p>);
      setTimeout(() => window.location.assign("/login"), 400);
    }
  };

  const handleSignUpFail = () => {
    if (signUpData.error) {
      toast.error(<p>
            {signUpData.error.message}
          </p>);
    }
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
          <SignupForm onChange={handleChange} onSubmit={handleSubmit} />
          {(Object.keys(signUpData.data).length === 0
         && !Object.keys(signUpData.error).length === 0) ? null : <ToastContainer
        position="top-right"
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={false}
        draggable={false}
        rtl={false}
        autoClose={1000}
      /> }
      </div>
  );
};
export default SignUpContainer;
