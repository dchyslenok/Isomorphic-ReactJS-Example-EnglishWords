import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class ThemePage extends Component {

  renderList() {
    const { wordCards } = this.props;
    return wordCards.map((item, index) => {
      return (
        <div key={index} className='card-container'>
          <div className='card'>
            <div className='front'>
              <div>
                <img src={item.imgUrl} className='front-img'/>
              </div>
              <div className='card-text'>
                <span className='word'>{item.word}</span>
                <span className='transcript'>{`[${item.transcription}]`}</span></div>
            </div>
            <div className='back'>
              <span className='word'>{item.translate}</span>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="center">
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