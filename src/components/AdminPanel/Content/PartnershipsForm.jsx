/* eslint-disable react/prop-types */
import React from "react";

const AddOrganization = (props) => (
  <div className="card">
    <h5 className="card-header info-color white-text text-center py-4">
      <strong>Add New Organization</strong>
    </h5>
    <div className="card-body px-lg-5 pt-0">
      <form className="text-center" style={{ color: "#757575" }} onSubmit={props.onSubmit}>
        <div className="md-form mt-3">
          <label htmlFor="organization_name">Organization Name</label>
          <input
            type="text"
            name="organization_name"
            id="materialContactFormName"
            className="form-control"
            placeholder="Organization Name"
            onChange={props.onChange}
            required
          />
        </div>

        <button className="btn btn-outline-primary btn-rounded btn-block z-depth-0 my-4 waves-effect" type="submit">
          Add partner Organisation
        </button>
      </form>
    </div>
  </div>
);

export default AddOrganization;
