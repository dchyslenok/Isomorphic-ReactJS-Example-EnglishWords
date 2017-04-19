import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { themeSelect } from '../../actions';

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
        <div key={index} onClick={() => {
          this.handleClick(item.id)
        }}>
          {item.id} name: {item.name}
        </div>
      );
    });
  }

  render() {
    return (
      <div>
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
