import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';

class Base extends Component {

  constructor(props) {
    super(props);
    this.state = {
      shadow: 1,
    };
    this.style = {
      width: 220,
      display: 'inline-block',
      margin: 10,
    };
  }

  onMouseOver() {
    this.setState({ shadow: 5 });
  }

  onMouseOut() {
    this.setState({ shadow: 1 });
  }

  render() {
    return (
      <Paper
        style={this.style}
        zDepth={this.state.shadow}
        onMouseOver={::this.onMouseOver}
        onMouseOut={::this.onMouseOut}
      >
        {this.props.children}
      </Paper>
    );
  }
}

Base.propTypes = {
  children: PropTypes.node,
};

export default Base;
