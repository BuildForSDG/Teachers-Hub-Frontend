/* eslint-disable react/prop-types */
import React from "react";
import ReactPlayer from "react-player";

const CoursePlayer = (props) => (
    <div className='player-wrapper'>
        <ReactPlayer url={props.moduleContent} className='react-player' width='100%'
        height='100%'
        />
        </div>
);
export default CoursePlayer;
