import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

    this.width = 280;
    this.height = 350;
    this.styleImg = {
      height: 240,
      width: 250,
      borderRadius: 2,
    };
  }

  render() {
    const { id, name, imageUrl, handleClick } = this.props;

    return (
      <Card width={this.width} height={this.height}>
        <CardMedia>
          <img src={imageUrl} style={this.styleImg}/>
        </CardMedia>
        <CardText style={{ textAlign: 'center', fontSize: 22 }}>
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
