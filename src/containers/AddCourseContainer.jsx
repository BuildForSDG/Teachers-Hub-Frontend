/* eslint camelcase: ["error", {properties: "never"}] */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddCourse from "../components/AdminPanel/Content/CourseForm.jsx";
import addCourseAction from "../redux/actions/addCourseAction.jsx";

const AddCourseContainer = () => {
  const [addCourseDetails, setAddCourseDetails] = useState({});
  const dispatch = useDispatch();
  const addCourseData = useSelector((state) => state.addCourseReducer);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddCourseDetails((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCourseAction(addCourseDetails));
  };

  const handleAddCourseSuccess = () => {
    if (addCourseData.data) {
      toast.success(<p className="text-white">
       Course added successfully
      </p>);
    }
  };

  const handleAddCourseFail = () => {
    if (addCourseData.error) {
      toast.error(<p>
            {addCourseData.error.message}
          </p>);
    }
  };

  useEffect(() => {
    if (addCourseData.data.message) {
      handleAddCourseSuccess();
    }
    if (!addCourseData.data.message && addCourseData.error.message) {
      handleAddCourseFail();
    }
  }, [addCourseData]);

  return (
      <div>
          <AddCourse onChange={handleChange} onSubmit={handleSubmit} />
          {(Object.keys(addCourseData.data).length === 0
         && !Object.keys(addCourseData.error).length === 0) ? null : <ToastContainer
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

export default AddCourseContainer;
