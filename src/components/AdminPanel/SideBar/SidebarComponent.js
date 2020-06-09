/* eslint-disable react/prop-types */
import React from "react";
import { Column, Row } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite";
import LogoComponent from "./Logo.jsx";
import MenuItemComponent from "./MenuItem.jsx";
import IconTickets from "../../../assets/icon-tickets";
import IconContacts from "../../../assets/icon-contacts";
import IconAgents from "../../../assets/icon-agents";
import IconArticles from "../../../assets/icon-articles";
import IconSettings from "../../../assets/icon-settings";
import IconBurger from "../../../assets/icon-burger";

const styles = StyleSheet.create({
  burgerIcon: {
    cursor: "pointer",
    position: "absolute",
    left: 24,
    top: 34
  },
  container: {
    backgroundColor: "#363740",
    width: 255,
    paddingTop: 32,
    height: "calc(100% - 32px)"
  },
  containerMobile: {
    transition: "left 0.5s, right 0.5s",
    position: "absolute",
    width: 255,
    height: "calc(100% - 32px)",
    zIndex: 901
  },
  mainContainer: {
    height: "100%",
    minHeight: "100vh"
  },
  mainContainerMobile: {
    position: "absolute",
    top: 0,
    left: 0
  },
  mainContainerExpanded: {
    width: "100%",
    minWidth: "100vh"
  },
  menuItemList: {
    marginTop: 52
  },
  outsideLayer: {
    position: "absolute",
    width: "100vw",
    minWidth: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,.50)",
    zIndex: 900
  },
  separator: {
    borderTop: "1px solid #DFE0EB",
    marginTop: 16,
    marginBottom: 16,
    opacity: 0.06
  },
  hide: {
    left: -255
  },
  show: {
    left: 0
  }
});

class SidebarComponent extends React.Component {
    state = { expanded: false };

    onItemClicked = (item) => {
      this.setState({ expanded: false });
      return this.props.onChange(item);
    }

    isMobile = () => window.innerWidth <= 768;

    toggleMenu = () => this.setState((prevState) => ({ expanded: !prevState.expanded }));

    renderBurger = () => <div onClick={this.toggleMenu} className={css(styles.burgerIcon)}>
            <IconBurger />
        </div>

    render() {
      const { expanded } = this.state;
      const isMobile = this.isMobile();
      return (
            <div style={{ position: "relative" }}>
                <Row
                className={css(styles.mainContainer)}
                breakpoints={{
                  768: css(styles.mainContainerMobile,
                    expanded && styles.mainContainerExpanded)
                }}>
                    {(isMobile && !expanded) && this.renderBurger()}
                    <Column
                    className={css(styles.container)}
                    breakpoints={{
                      768: css(styles.containerMobile,
                        expanded ? styles.show : styles.hide)
                    }}>
                        <LogoComponent />
                        <Column className={css(styles.menuItemList)}>
                            <MenuItemComponent
                                title="Courses" icon={IconTickets}
                                onClick={() => this.onItemClicked("Courses")}
                                active={this.props.selectedItem === "Courses"}
                            />
                            <MenuItemComponent
                                title="Blog" icon={IconArticles}
                                onClick={() => this.onItemClicked("Blog")}
                                active={this.props.selectedItem === "Blog"} />
                            <MenuItemComponent
                                title="Partnerships" icon={IconContacts}
                                onClick={() => this.onItemClicked("Partnerships")}
                                active={this.props.selectedItem === "Partnerships"} />
                            <MenuItemComponent
                                title="Community" icon={IconAgents}
                                onClick={() => this.onItemClicked("Community")}
                                active={this.props.selectedItem === "Community"} />
                            <div className={css(styles.separator)}></div>
                            <MenuItemComponent
                                title="Settings" icon={IconSettings}
                                onClick={() => this.onItemClicked("Settings")}
                                active={this.props.selectedItem === "Settings"} />
                        </Column>
                    </Column>
                    {isMobile && expanded
                    && <div className={css(styles.outsideLayer)} onClick={this.toggleMenu}></div>}
                </Row>
            </div>
      );
    }
}

export default SidebarComponent;
