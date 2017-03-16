import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class App extends Component {

  render() {
    return (
      <div>
        <Link to='/'>Hello World</Link><br />
        <Link to='/time'>time</Link><br />
        <Link to='/counters'>counters</Link><br />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node
};

export default App;
