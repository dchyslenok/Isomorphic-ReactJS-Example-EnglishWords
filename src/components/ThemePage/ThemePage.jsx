import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { CardWord } from '../../controls/Card';

class ThemePage extends Component {

  renderList() {
    const { wordCards } = this.props;
    return wordCards.map((item, index) => {
      return (
        <CardWord key={index} {...item} />
      );
    });
  }

  render() {
    return (
      <div className='center'>
        {this.renderList()}
      </div>
    );
  }
}


ThemePage.propTypes = {
  wordCards: PropTypes.array,
};

const mapStateToProps = (state) => {
  const propsObj = {
    wordCards: state.root.wordCards,
  };
  return propsObj;
};

module.exports = connect(mapStateToProps)(ThemePage);