import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';

class Card extends Component {

  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    children: PropTypes.node,
  };

  static defaultProps = {
    width: 280,
    height: 300,
  };

  constructor(props) {
    super(props);

    this.state = {
      shadow: 1,
    };

    this.defaultStyle = {
      width: props.width,
      height: props.height,
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
        style={this.defaultStyle}
        zDepth={this.state.shadow}
        onMouseOver={::this.onMouseOver}
        onMouseOut={::this.onMouseOut}
      >
        {this.props.children}
      </Paper>
    );
  }
}

export default Card;
