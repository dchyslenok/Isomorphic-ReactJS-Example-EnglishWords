import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Image } from 'semantic-ui-react';

class WordCard extends Component {

  static propTypes = {
    id: PropTypes.number.isRequired,
    imgUrl: PropTypes.string,
    word: PropTypes.string,
    translate: PropTypes.string,
    transcription: PropTypes.string,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    imgUrl: null,
    word: null,
    translate: null,
    transcription: null,
    onClick: () => {},
  };

  handleClick = (e) => {
    const { onClick } = this.props;

    if (onClick) onClick(e, this.props);
  };

  render() {
    const { id, imgUrl, word, translate, transcription } = this.props;

    const defaultImgHeight = 260;
    const defaultImgWidth = 290;

    return (
      <Card className="card-text" centered={Boolean(true)} >
        <Card.Content extra>
          <Image src={imgUrl} width={defaultImgWidth} height={defaultImgHeight} />
          <Card.Header>
            <div className="lg-text-header">
              {word}
              <Button circular color="twitter" icon="volume up" floated="right" />
            </div>
          </Card.Header>
          <Card.Meta>
            <div className="transcription-text">
              {`[${transcription}]`}
            </div>
          </Card.Meta>
          <Card.Description>
            <div className="translate-text">
              {translate}
            </div>
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

export default WordCard;