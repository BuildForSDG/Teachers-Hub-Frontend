import React from "react";
import SrcImg from "../../assets/images/img_4.jpg";
import { Link } from "react-router-dom";

const SingleCourseCard = (props) => {
  return (
    <div className="col-sm">
      <Link to={`courses/${props.courseid}`} style={{ color: "#000", textDecoration: "inherit" }}>
        <div class="card course">
          <img src={SrcImg} alt="" className="img-fluid" />
          <div className="course-name">{props.coursecat}</div>
          <div class="card-body">
            <h5 class="card-title">{props.courset}</h5>
            <p class="card-text">{props.coursedes}</p>
            <div className="meta">
              <span className="icon-clock-o"></span>Duration: {props.coursetime} hours
            </div>
            <div className="meta">
              <span className="icon-user"></span>Mr {props.courseinstructor} as Instructor
            </div>
            <div className="d-flex border-top stats">
              <div className="py-3 px-4">
                <span className="icon-users"></span> 2,193 students
              </div>
              <div className="py-3 px-4 w-25 ml-auto border-left">
                <span className="icon-chat"></span> 2
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SingleCourseCard;
