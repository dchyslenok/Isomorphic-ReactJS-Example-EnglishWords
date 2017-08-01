import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card } from 'semantic-ui-react';

import WordCard from '../components/WordCard';

class ThemePage extends Component {

  static propTypes = {
    wordCards: PropTypes.array,
  };

  static defaultProps = {
    wordCards: [],
  };

  render() {
    const { wordCards } = this.props;

    return (
      <div className="content-wrapper">
        <Card.Group >
          {wordCards.map((item) => (
            <WordCard
              id={item.id}
              key={item.id}
              imgUrl={item.imgUrl}
              word={item.word}
              transcription={item.transcription}
              translate={item.translate}
            />
          ))}
        </Card.Group>
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

export default connect(mapStateToProps)(ThemePage);