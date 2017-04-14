import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class App extends Component {

  render() {
    return (
      <div>
        <Link to='/'>Home</Link><br />
        {/*<Link to='/theme'>theme</Link><br />*/}
        <Link to='/game'>game</Link><br />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
};

export default App;
