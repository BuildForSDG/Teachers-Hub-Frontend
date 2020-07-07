/* eslint-disable react/prop-types */
import React from "react";
import LoaderComponent from "../Loader/Loader.jsx";
import { Formik, Form, FormikProps } from "formik";
import * as Yup from "yup";

const LoginForm = (props) => (
  <form className="form-box" onSubmit={props.onSubmit} style={{ marginBottom: "20%" }}>
    {props.loading ? <LoaderComponent /> : null}
    <h3 className="h4 text-black mb-4">Login</h3>
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        name="username"
        placeholder="UserName"
        required
        onChange={props.onChange}
      />
    </div>
    <div className="form-group">
      <input
        type="password"
        className="form-control"
        name="password"
        placeholder="Password"
        required
        onChange={props.onChange}
      />
    </div>

    <div className="form-group">
      <input type="submit" className="btn btn-primary btn-pill" value="Login" onSubmit={props.onSubmit} />
    </div>
    <div>
      <span>No account yet? </span>
      <a href="/">SignUp</a>
    </div>
  </form>
);
export default LoginForm;
