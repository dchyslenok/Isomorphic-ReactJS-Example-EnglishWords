import React, { Component, PropTypes } from 'react';

const propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.number
};

const defaultProps = {
  onClick: () => {},
  value: 0
};

class Counter extends Component {
  render() {
    const { onClick, value } = this.props;

    return (
      <div>
        <div className='counter-label'>
          Value: {value}
        </div>
        <div onClick={onClick}>Count +</div>
      </div>
    );
  }
}

Counter.propTypes = propTypes;
Counter.defaultProps = defaultProps;

export default Counter;