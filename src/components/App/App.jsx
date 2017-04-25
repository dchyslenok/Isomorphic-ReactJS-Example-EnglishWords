import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Loader from '../Loader';
import Heade from './Header';
import { activePageHome } from '../../actions';

injectTapEventPlugin();

class App extends Component {

  constructor(props) {
    super(props);
    this.handleGoToHome = ::this.handleGoToHome;
  }

  handleGoToHome() {
    const { activePageHome } = this.props.actions;
    browserHistory.push('/');
    activePageHome();
  }

  render() {
    const { isLoading } = this.props;
    return (
      <MuiThemeProvider>
        <div>
          <Heade
            onTitleClick={this.handleGoToHome}
          />
          { isLoading && <Loader />}
          <div>
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
  actions: PropTypes.object,
  isLoading: PropTypes.bool,
};

const mapStateToProps = (state) => {
  const propsObj = {
    isLoading: state.root.isLoading,
  };
  return propsObj;
};

const mapDispatchToProps = (dispatch) => {
  const actionObj = {
    actions: bindActionCreators({ activePageHome }, dispatch),
  };
  return actionObj;
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(App);
