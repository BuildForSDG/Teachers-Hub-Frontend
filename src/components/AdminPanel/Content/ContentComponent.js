/* eslint-disable react/prop-types */
import React from "react";
import { Column, Row } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite/no-important";
import Courses from "./Courses.jsx";
import Blog from "./Blog.jsx";
import Partnerships from "./Partnerships.jsx";
import Community from "./Community.jsx";
import Settings from "./Settings.jsx";

const styles = StyleSheet.create({
  cardsContainer: {
    marginRight: -30,
    marginTop: -30
  },
  cardRow: {
    marginTop: 30,
    "@media (max-width: 768px)": {
      marginTop: 0
    }
  },

  unresolvedTickets: {
    marginRight: 30,
    "@media (max-width: 1024px)": {
      marginRight: 0
    }
  },
  tasks: {
    marginTop: 0,
    "@media (max-width: 1024px)": {
      marginTop: 30
    }
  }
});

const ContentComponent = (props) => {
  let toRender = null;
  switch (props.selected) {
    case "Courses":
      toRender = <Courses />;
      break;
    case "Blog":
      toRender = <Blog />;
      break;
    case "Partnerships":
      toRender = <Partnerships />;
      break;
    case "Community":
      toRender = <Community />;
      break;
    case "Settings":
      toRender = <Settings />;
      break;
    default:
      toRender = <Courses />;
  }
  return (
      <Column>
          <Row horizontal="space-between" className={css(styles.lastRow)} breakpoints={{ 1024: "column" }}>
            {toRender}
          </Row>
      </Column>
  );
};

export default ContentComponent;
