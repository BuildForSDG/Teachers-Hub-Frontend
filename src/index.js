import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

class HelloMessage extends React.Component {
  render() {
    const { name } = this.props;
    return <div> Hello { name } </div>;
  }
}

HelloMessage.propTypes = {
  name:PropTypes.string
};

ReactDOM.render(<HelloMessage name = "TEAM 273" />, document.getElementById('app'));
