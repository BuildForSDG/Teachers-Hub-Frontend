/* eslint-disable no-shadow */
import React from "react";
import { Column, Row } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite";
import SidebarComponent from "./SideBar/SidebarComponent";
import HeaderComponent from "./MainBlock/Header.jsx";
import ContentComponent from "./Content/ContentComponent";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    minHeight: "100vh"
  },
  content: {
    marginTop: 54
  },
  mainBlock: {
    backgroundColor: "#F7F8FC",
    padding: 30
  }
});

class AdminPanel extends React.Component {
    state = { selectedItem: "Courses" };

    componentDidMount() {
      window.addEventListener("resize", this.resize);
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.resize);
    }

    resize = () => this.forceUpdate();

    render() {
      const { selectedItem } = this.state;
      return (
            <Row className={css(styles.container)}>
                <SidebarComponent
                selectedItem={selectedItem}
                onChange={(selectedItem) => this.setState({ selectedItem })} />
                <Column flexGrow={1} className={css(styles.mainBlock)}>
                    <HeaderComponent title={selectedItem} />
                    <div className={css(styles.content)}>
                        <ContentComponent selected={selectedItem} />
                    </div>
                </Column>
            </Row>
      );
    }
}

export default AdminPanel;
