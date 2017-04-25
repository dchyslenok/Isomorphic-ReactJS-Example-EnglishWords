import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';

import {CardActions, CardMedia, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import StorageIcon from 'material-ui/svg-icons/device/storage';

import { themeSelect } from '../../actions';
import Card from '../../controls/Card';

class IndexPage extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    const { themeSelect } = this.props;

    themeSelect(id);
    browserHistory.push(`/theme/${id}`);
  }

  renderList() {
    const { themeCards } = this.props;
    return themeCards.map((item, index) => {
      return (
      <Card>
        <CardMedia>
          <img src={item.imgUrl} style={{height: 200, width: 200, borderRadius: 2}}/>
        </CardMedia>
        <CardText style={{textAlign: 'center', fontSize: 16}}>
          {item.name}
        </CardText>
        <CardActions >
          <RaisedButton
            label="список слов"
            fullWidth={true}
            icon={<StorageIcon />}
            onClick={() => this.handleClick(item.id)}
          />
        </CardActions>
      </Card>
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

function mapStateToProps(state) {
  const propsObj = {
    themeCards: state.root.themeCards,
  };
  return propsObj;
}

const mapDispatchToProps = (dispatch) => {
  const actionObj = {
    themeSelect: bindActionCreators(themeSelect, dispatch),
  };
  return actionObj;
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
