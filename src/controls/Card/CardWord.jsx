import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import VoiceIcon from 'material-ui/svg-icons/action/record-voice-over';
import { CardMedia, CardTitle } from 'material-ui/Card';
import Card from './Card';

class CardWord extends Component {

  static propTypes = {
    imgUrl: PropTypes.string,
    word: PropTypes.string,
    transcription: PropTypes.string,
    translate: PropTypes.string,
  };

  constructor() {
    super();

    this.width = 280;
    this.height = 350;
    this.styleImg = {
      height: 240,
      width: 250,
      borderRadius: 2,
    };

    this.handleSpellWord = ::this.handleSpellWord;
  }

  handleSpellWord() {
    const { word } = this.props;

    if (responsiveVoice.isPlaying()) {
      responsiveVoice.cancel();
    } else {
      responsiveVoice.speak(word, 'UK English Female');
    }
  }

  render() {
    const { imgUrl, word, transcription, translate } = this.props;

    return (
      <Card width={this.width} height={this.height}>
        <CardMedia>
          <img src={imgUrl} style={this.styleImg}/>
        </CardMedia>
        <FloatingActionButton
          mini={Boolean(true)}
          style={{ marginRight: 20, margin: '-20px 0px 0px 230px', position: 'absolute' }}
          onClick={this.handleSpellWord}
        >
          <VoiceIcon />
        </FloatingActionButton>
        <CardTitle
          style={{ textAlign: 'center', padding: 5 }}
          title={word}
          subtitle={`[${transcription}]`}
          subtitleStyle={{ fontSize: 16 }}
        />
        <CardTitle
          style={{ textAlign: 'center', padding: 0 }}
          titleStyle={{ fontSize: 18 }}
          title={translate}
        />
      </Card>
    );
  }
}

export default CardWord;
