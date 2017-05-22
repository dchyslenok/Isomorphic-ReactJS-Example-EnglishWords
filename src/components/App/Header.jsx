import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import { APP_TITLE, GIT_HUB_LINK_IN_PROJECT } from '../../constants';

class Header extends Component {
  constructor() {
    super();
    this.style = {
      backgroundColor: '#48B484',
      position: 'fixed',
      top: 0,
    };
    this.styleTitle = {
      cursor: 'pointer',
    };
  }

  render() {
    const { onTitleClick } = this.props;
    return (
      <AppBar
        style={this.style}
        title={APP_TITLE}
        titleStyle={this.styleTitle}
        showMenuIconButton={false}
        iconClassNameRight='muidocs-icon-custom-github'
        onTitleTouchTap={onTitleClick}
        onRightIconButtonTouchTap={() => window.open(GIT_HUB_LINK_IN_PROJECT, '_blank')}
      />
    );
  }
}

Header.propTypes = {
  onTitleClick: PropTypes.func,
};

export default Header;
