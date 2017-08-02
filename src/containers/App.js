import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Menu, Button } from 'semantic-ui-react';
import { browserHistory } from 'react-router';
import { activePageHome } from '../actions';
import Loader from '../components/Loader';
import { APP_TITLE, GIT_HUB_LINK_IN_PROJECT } from '../constants';

class App extends Component {

  static propTypes = {
    children: PropTypes.node,
    actions: PropTypes.object.isRequired,
    isLoading: PropTypes.bool,
  };

  static defaultProps = {
    children: null,
    isLoading: false,
  };

  constructor() {
    super();
    this.handlerGoToHome = ::this.handlerGoToHome;
  }

  handlerGoToHome() {
    const { activePageHome } = this.props.actions;

    browserHistory.push('/');
    activePageHome();
  }

  handlerGitHub() {
    window.open(GIT_HUB_LINK_IN_PROJECT, '_blank');
  }

  render() {
    const { isLoading, children } = this.props;

    return (
      <div>
        {isLoading && <Loader />}
        <Menu secondary fixed="top" color="green" inverted>
          <Menu.Item>
            <div className="app-title" onClick={this.handlerGoToHome}>{APP_TITLE}</div>
          </Menu.Item>
          <Menu.Item position="right">
            <Button
              circular
              inverted
              color="black"
              icon="github"
              size="large"
              onClick={this.handlerGitHub}
            />
          </Menu.Item>
        </Menu>
        {children}
      </div>
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
    actions: bindActionCreators({ activePageHome }, dispatch),
  };
  return actionObj;
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
