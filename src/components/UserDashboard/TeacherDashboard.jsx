import React from "react";
import Search from "../Search/Search.jsx";
import TableCard from "../TableCard/TableCard.jsx";

const TeacherDashboard = () => (
  <div>
    <Search />
    <div className="container">
      <div className="row" style={{ color: "#000" }}>
        <div className="col-sm card border-primary mb-3" style={{ maxWidth: "20rem" }}>
          <div className="card-header">Profile</div>
          <div className="card-body">
            <h4 className="card-title">Primary card title</h4>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the cards content.
            </p>
          </div>
        </div>
        <div className="col-sm card border-primary mb-3 offset-sm-1" style={{ maxWidth: "20rem" }}>
          <div className="card-header">Content Authored</div>
          <div className="card-body">
            <p className="card-text">17</p>
          </div>
        </div>
        <div className="col-sm card border-primary mb-3 offset-sm-1" style={{ maxWidth: "20rem" }}>
          <div className="card-header">Average Rating</div>
          <div className="card-body">
            <p className="card-text">4.6</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col card-body">
          <TableCard />
        </div>
      </div>
    </div>
  </div>
);
export default TeacherDashboard;
