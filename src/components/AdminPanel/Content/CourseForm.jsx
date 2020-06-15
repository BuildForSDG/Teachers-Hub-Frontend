/* eslint-disable react/prop-types */
import React from "react";

const AddCourse = (props) => (
  <div className="card">
  <h5 className="card-header info-color white-text text-center py-4">
      <strong>Add New Course</strong>
  </h5>
  <div className="card-body px-lg-5 pt-0">

      <form className="text-center" style={{ color: "#757575;" }} onSubmit={props.onSubmit}>
          <div className="md-form mt-3">
              <input type="text" name="course_category" id="materialContactFormName" className="form-control" placeholder="Course Category" onChange={props.onChange} />
          </div>

          <div className="md-form">
              <input type="text" name= "course_title" id="materialContactFormEmail" className="form-control" placeholder="Course Title" onChange={props.onChange} />
          </div>

          <div className="md-form">
              <input type="text" name="course_instructor" id="materialContactFormEmail" className="form-control" placeholder="Course Instructor" onChange={props.onChange} />
          </div>

          <div className="md-form">
              <input type="text" name="course_duration" id="materialContactFormEmail" className="form-control" placeholder="Course Duration" onChange={props.onChange} />
          </div>
          <div className="md-form">
              <textarea id="materialContactFormMessage" name="course_description" className="form-control md-textarea" rows="3" placeholder="Course Description" onChange={props.onChange}></textarea>
          </div>
          <button className="btn btn-outline-primary btn-rounded btn-block z-depth-0 my-4 waves-effect" type="submit">Add Course</button>

      </form>

  </div>

</div>
);

export default AddCourse;
