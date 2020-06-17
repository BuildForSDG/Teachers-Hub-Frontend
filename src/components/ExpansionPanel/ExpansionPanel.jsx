/* eslint-disable react/prop-types */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import axios from "axios";
import ModuleContent from "../ModuleContent/ModuleContent.jsx";
import { capitalize } from "../SingleCourse/utils";

const styles = (theme) => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
});

const CourseExpansionPanel = (props) => {
  const [moduleContent, setModuleContent] = useState([]);
  const { REACT_APP_BASE_URL } = process.env;
  const { classes } = props;
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
      <ExpansionPanel onClick={handlePanelClick}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography><h6>{capitalize(props.module_title)}</h6></Typography>
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

export default withStyles(styles)(CourseExpansionPanel);
