/* eslint-disable react/prop-types */
import React from "react";
import { Redirect } from "react-router-dom";

const jwt = require("jsonwebtoken");

const PrivateAdminRoute = (props) => {
  const Component = props.component;
  const isAuthenticated = localStorage.getItem("token");
  const getRole = () => {
    if (isAuthenticated) {
      const role = jwt.decode(isAuthenticated).identity.role[0] === "Admin";
      return role;
    }
    return null;
  };

  return isAuthenticated && getRole() ? (
        <Component />
  ) : (
        <Redirect to={{ pathname: "/login" }} />
  );
};
export default PrivateAdminRoute;
