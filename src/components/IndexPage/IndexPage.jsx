import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
};

class IndexPage extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    browserHistory.push(`/theme/${id}`);
  }

  renderList() {
    const { themeCards } = this.props;
    return themeCards.map((item, index) => {
      return (
        <div key={index} onClick={() => {
          this.handleClick(item.id)
        }}>
          {item.id} name: {item.name}
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderList()}
      </div>
    );
  }
}

IndexPage.propTypes = propTypes;

function mapStateToProps(state) {
  const propsObj = {
    themeCards: state.root.themeCards,
  };
  return propsObj;
}

export default connect(mapStateToProps)(IndexPage);
