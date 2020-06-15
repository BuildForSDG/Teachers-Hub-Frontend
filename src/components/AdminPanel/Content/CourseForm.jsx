import React from "react";

const AddCourse = () => (
  <div className="card">
  <h5 className="card-header info-color white-text text-center py-4">
      <strong>Add New Course</strong>
  </h5>
  <div className="card-body px-lg-5 pt-0">

      <form className="text-center" style={{ color: "#757575;" }} action="#!">
          <div className="md-form mt-3">
              <input type="text" id="materialContactFormName" className="form-control" placeholder="Course Category" />
          </div>

          <div className="md-form">
              <input type="text" id="materialContactFormEmail" className="form-control" placeholder="Course Title" />
          </div>

          <div className="md-form">
              <input type="text" id="materialContactFormEmail" className="form-control" placeholder="Course Instructor" />
          </div>

          <div className="md-form">
              <input type="text" id="materialContactFormEmail" className="form-control" placeholder="Course Duration" />
          </div>
          <div className="md-form">
              <textarea id="materialContactFormMessage" className="form-control md-textarea" rows="3" placeholder="Course Description"></textarea>
          </div>
          <button className="btn btn-outline-primary btn-rounded btn-block z-depth-0 my-4 waves-effect" type="submit">Add Course</button>

      </form>

  </div>

</div>
);

export default AddCourse;
