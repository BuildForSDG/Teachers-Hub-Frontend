/* eslint camelcase: ["error", {properties: "never"}] */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddOrganization from "../components/AdminPanel/Content/PartnershipsForm";
import addOrganizationAction from "../redux/actions/addOrganizationAction.jsx";

const AddOrganizationContainer = () => {
  const [addOrganizationDetails, setAddOrganizationDetails] = useState({});
  const dispatch = useDispatch();
  const addOrganizationData = useSelector((state) => state.addOrganizationReducer);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddOrganizationDetails((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addOrganizationAction(addOrganizationDetails));
  };

  const handleAddOrganizationSuccess = () => {
    if (addOrganizationData.data) {
      toast.success(<p className="text-white">Organization added successfully</p>);
    }
  };

  const handleAddOrganizationFail = () => {
    if (addOrganizationData.error) {
      toast.error(<p>{addOrganizationData.error.message}</p>);
    }
  };

  useEffect(() => {
    if (addOrganizationData.data.message) {
      handleAddOrganizationSuccess();
    }
    if (!addOrganizationData.data.message && addOrganizationData.error.message) {
      handleAddOrganizationFail();
    }
  }, [addOrganizationData]);

  return (
    <div>
      <AddOrganization onChange={handleChange} onSubmit={handleSubmit} />
      {Object.keys(addOrganizationData.data).length === 0 &&
      !Object.keys(addOrganizationData.error).length === 0 ? null : (
        <ToastContainer
          position="top-right"
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick={false}
          draggable={false}
          rtl={false}
          autoClose={1000}
        />
      )}
    </div>
  );
};

export default AddOrganizationContainer;
