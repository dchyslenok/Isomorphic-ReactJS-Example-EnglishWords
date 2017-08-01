import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Image, Icon } from 'semantic-ui-react';

class ThemeCard extends Component {

  static propTypes = {
    id: PropTypes.number.isRequired,
    imgUrl: PropTypes.string,
    name: PropTypes.string,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    imgUrl: null,
    name: null,
    onClick: () => {},
  };

  handleClick = (e) => {
    const { onClick } = this.props;

    if (onClick) onClick(e, this.props);
  };

  render() {
    const { id, imgUrl, name } = this.props;

    return (
      <Card centered={Boolean(true)} onClick={this.handleClick}>
        <Card.Content>
          <Image src={imgUrl} width={290} height={260} />
          <Card.Header>
            <div className="md-text-header">
              {name}
            </div>
          </Card.Header>
        </Card.Content>
        <Card.Content extra>
          <div className="ui one buttons">
            <Button basic color="green">
              <Icon name="browser"/>
              Слова</Button>
          </div>
        </Card.Content>
      </Card>
    );
  }
}

export default ThemeCard;