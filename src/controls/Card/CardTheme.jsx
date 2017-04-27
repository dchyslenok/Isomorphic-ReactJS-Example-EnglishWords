import React, { Component, PropTypes } from 'react';

import { CardActions, CardMedia, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import StorageIcon from 'material-ui/svg-icons/device/storage';
import Base from './Base';
import { CARD_THEME_LABEL } from '../../constants';

class CardTheme extends Component {

  constructor(props) {
    super(props);
    this.styleImg = {
      height: 200,
      width: 200,
      borderRadius: 2,
    };
    this.cardText = {
      textAlign: 'center',
      fontSize: 16,
    };
  }

  render() {
    const { id, name, imageUrl, handleClick } = this.props;

    return (
      <Base>
        <CardMedia>
          <img src={imageUrl} style={this.styleImg} />
        </CardMedia>
        <CardText style={this.cardText}>
          {name}
        </CardText>
        <CardActions >
          <RaisedButton
            label={CARD_THEME_LABEL}
            icon={<StorageIcon />}
            fullWidth={Boolean(true)}
            onClick={() => handleClick(id)}
          />
        </CardActions>
      </Base>
    );
  }
}

CardTheme.propTypes = {
  id: PropTypes.number,
  imageUrl: PropTypes.string,
  name: PropTypes.string,
};

export default CardTheme;
