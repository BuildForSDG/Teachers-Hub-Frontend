import React from 'react';
import ReactDOM from 'react-dom';

class HelloMessage extends React.Component {

  render() {
    const {name} = this.props
    return <div>Hello {name}</div>;
  }
}

ReactDOM.render(<HelloMessage name='TEAM 273' />, document.getElementById('app'));
