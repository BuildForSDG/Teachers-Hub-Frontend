import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography >Course Overview</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          <ul>
            <li><a href="/" style={{ color: "inherit", textDecoration: "underline" }}>Beginning course(1m 05s)</a></li>
            <li><a href="/" style={{ color: "inherit", textDecoration: "underline" }}>Learning the basics(5m 05s)</a></li>
            <li><a href="/" style={{ color: "inherit", textDecoration: "underline" }}>Working with files(15m 00s)</a></li>
            </ul>

          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Introduction to course</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <ul>
            <li><a href="/" style={{ color: "inherit", textDecoration: "underline" }}>Beginning course(1m 05s)</a></li>
            <li><a href="/" style={{ color: "inherit", textDecoration: "underline" }}>Learning the basics(5m 05s)</a></li>
            <li><a href="/" style={{ color: "inherit", textDecoration: "underline" }}>Working with files(15m 00s)</a></li>
            </ul>

          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Deep Dive into the fundamentals</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <ul>
            <li><a href="/" style={{ color: "inherit", textDecoration: "underline" }}>Beginning course(1m 05s)</a></li>
            <li><a href="/" style={{ color: "inherit", textDecoration: "underline" }}>Learning the basics(5m 05s)</a></li>
            <li><a href="/" style={{ color: "inherit", textDecoration: "underline" }}>Working with files(15m 00s)</a></li>
            </ul>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Conclusion</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <ul>
            <li><a href="/" style={{ color: "inherit", textDecoration: "underline" }}>Beginning course(1m 05s)</a></li>
            <li><a href="/" style={{ color: "inherit", textDecoration: "underline" }}>Learning the basics(5m 05s)</a></li>
            <li><a href="/" style={{ color: "inherit", textDecoration: "underline" }}>Working with files(15m 00s)</a></li>
            </ul>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

CourseExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CourseExpansionPanel);
