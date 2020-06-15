/* eslint-disable react/prop-types */
import React from "react";
import { Column, Row } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray",
    width: 255,
    paddingTop: 32
  },
  mainContainer: {
    height: "100%",
    minHeight: "100vh"
  },
  menuItemList: {
    marginTop: 52
  }
});

const SidePanel = () => (

                <Row
                className={css(styles.mainContainer)}>
                    <Column
                    className={css(styles.container)}>
                        <Column className={css(styles.menuItemList)}>

                        </Column>
                    </Column>
                </Row>
);

export default SidePanel;
