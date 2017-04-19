import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Loader from '../Loader';
import { activePageHome } from '../../actions';

injectTapEventPlugin();


class App extends Component {

  render() {
    const { activePageHome, isLoading } = this.props;
    return (
      <MuiThemeProvider>
        <div>
          { isLoading && <Loader />}
          <Link to='/' onClick={activePageHome}>Home</Link><br />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  const propsObj = {
    isLoading: state.root.isLoading,
  };
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
  activePageHome: PropTypes.func,
  isLoading: PropTypes.bool,
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(App);
