import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import { APP_TITLE } from '../../constants';

class Header extends Component {
  constructor() {
    super();
    this.style = {
      backgroundColor: '#37474f',
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
      />
    );
  }
}

Header.propTypes = {
  onTitleClick: PropTypes.func,
};

export default Header;
