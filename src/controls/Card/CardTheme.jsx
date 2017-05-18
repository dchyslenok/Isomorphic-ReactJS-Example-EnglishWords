import React, { Component, PropTypes } from 'react';

import { CardActions, CardMedia, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import StorageIcon from 'material-ui/svg-icons/device/storage';
import Card from './Card';
import { CARD_THEME_LABEL } from '../../constants';

class CardTheme extends Component {

  static propTypes = {
    id: PropTypes.number,
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    handleClick: PropTypes.func,
  };

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
      <Card>
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
      </Card>
    );
  }
}

export default CardTheme;
