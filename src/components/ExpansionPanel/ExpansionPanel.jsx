/* eslint-disable react/prop-types */
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
// import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import axios from "axios";
import PropTypes from "prop-types";
import React, { useState } from "react";
import ModuleContent from "../ModuleContent/ModuleContent.jsx";
import { capitalize } from "../SingleCourse/utils";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));
const CourseExpansionPanel = (props) => {
  const classes = useStyles();
  const [moduleContent, setModuleContent] = useState([]);
  const { REACT_APP_BASE_URL } = process.env;

  const handlePanelClick = () => {
    axios
      .get(`${REACT_APP_BASE_URL}/api/v1/courses/${props.course_id}/modules/${props.id}`)
      .then((res) => {
        setModuleContent(res.data.module_content);
      })
      .catch((err) => err);
  };

  return (
    <div className={classes.root}>
      <ExpansionPanel onClick={handlePanelClick} disabled={props.disabled}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <h6>{capitalize(props.module_title)}</h6>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.heading}>
          <ModuleContent module_id={props.id} moduleData={moduleContent} />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

CourseExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default CourseExpansionPanel;
