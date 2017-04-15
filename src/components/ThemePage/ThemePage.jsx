import React, { Component } from 'react';
import { bindActionCreators } from 'redux';;
import { connect } from 'react-redux';

class ThemePage extends Component {

  renderList() {
    const { wordCards } = this.props;
    return wordCards.map((item, index) => {
      return(
        <div key={index}>
          <p>{item.word}</p>
        </div>
      );
    });
  }

  render() {

    return (
      <div>
        <h1>ThemePage Page</h1>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const propsObj = {
    wordCards: state.root.wordCards,
  };
  return propsObj;
};

module.exports = connect(mapStateToProps)(ThemePage);