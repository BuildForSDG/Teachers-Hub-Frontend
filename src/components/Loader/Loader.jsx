import React from "react";
import Loader from "react-loader-spinner";

const LoaderComponent = () => (
  <Loader
    type="ThreeDots"
    color="rgb(121, 113, 234)"
    timeout={9000}
    className="spinner" // 3 secs
  />
);
export default LoaderComponent;
