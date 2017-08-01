import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { activePageHome } from '../actions';
import Loader from '../components/Loader';
import { Menu, Button, Icon } from 'semantic-ui-react';

class App extends Component {

  static propTypes = {
    children: PropTypes.node,
    actions: PropTypes.object,
    isLoading: PropTypes.bool,
  };

  constructor() {
    super();
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
      <div>
        <Menu secondary fixed="top" color="green" inverted>
          <Menu.Item onClick={this.handleGoToHome}>
            <h1>EnglishWords</h1>
          </Menu.Item>
          <Menu.Item position="right">
            <Button circular color='black' icon='github' size="large" />
          </Menu.Item>
        </Menu>
        {isLoading && <Loader />}
        {this.props.children}
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
