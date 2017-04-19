import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { activePageHome } from '../../actions';

class App extends Component {

  render() {
    const { activePageHome } = this.props;
    return (
      <div>
        <Link to='/' onClick={activePageHome}>Home</Link><br />
        {/*<Link to='/game'>game</Link><br />*/}
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const propsObj = {};
  return propsObj;
};

const mapDispatchToProps = (dispatch) => {
  const actionObj = {
    activePageHome: bindActionCreators(activePageHome, dispatch),
  };
  return actionObj;
};

App.propTypes = {
  children: PropTypes.node,
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(App);
