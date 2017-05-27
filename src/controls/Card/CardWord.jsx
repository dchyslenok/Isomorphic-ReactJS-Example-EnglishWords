import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import TranslateIcon from 'material-ui/svg-icons/action/g-translate';
import VoiceIcon from 'material-ui/svg-icons/action/record-voice-over';
import { CardActions, CardMedia, CardTitle, CardHeader } from 'material-ui/Card';
import Card from './Card';
import constants from '../../constants';

class CardWord extends Component {

  static propTypes = {
    imgUrl: PropTypes.string,
    word: PropTypes.string,
    transcription: PropTypes.string,
    translate: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      rotate: false,
    };

    this.styleImg = {
      height: 200,
      width: 200,
      borderRadius: 2,
    };
    this.translateBtnStyle = {
      minWidth: 163,
    };
    this.voiceBtnStyle = {
      minWidth: 33,
      marginRight: 0,
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

  renderFront() {
    const { imgUrl, word, transcription } = this.props;

    return (
      <div>
        <CardMedia>
          <img src={imgUrl} style={this.styleImg}/>
        </CardMedia>
        <CardTitle
          style={{ textAlign: 'center' }}
          title={word}
          subtitle={`[${transcription}]`}
          subtitleStyle={{ fontSize: 16 }}
        />
        <CardActions>
          <RaisedButton
            style={this.translateBtnStyle}
            label={constants.TRANSLATE_BTN_LABEL}
            icon={<TranslateIcon />}
          />
          <RaisedButton
            style={this.voiceBtnStyle}
            icon={<VoiceIcon />}
            onClick={this.handleSpellWord}
          />
        </CardActions>
      </div>
    );
  }

  renderBack() {
    const { translate } = this.props;

    return (
      <div className="card-text">
        <div className="text-center">
          {translate}
        </div>
      </div>
    );
  }

  renderCardContent() {
    return this.renderBack();
  }

  render() {
    return (
      <Card>
        {this.renderCardContent()}
      </Card>
    );
  }
}

export default CardWord;
