import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { Card } from 'semantic-ui-react';

import ThemeCard from '../components/ThemeCard';
import { themeSelect } from '../actions';

class HomePage extends Component {

  static propTypes = {
    themeCards: PropTypes.array,
    actionThemeSelect: PropTypes.func.isRequired,
  };

  static defaultProps = {
    themeCards: [],
  };

  constructor(props) {
    super(props);
    this.handleClick = ::this.handleClick;
  }

  handleClick(e, options) {
    const { actionThemeSelect } = this.props;
    const { id } = options;

    actionThemeSelect(id);
    browserHistory.push(`/theme/${id}`);
  }

  render() {
    const { themeCards } = this.props;

    return (
      <div className="content-wrapper">
        <Card.Group stackable={Boolean(true)}>
          {themeCards.map(item => (
            <ThemeCard
              id={item.id}
              key={item.id}
              name={item.name}
              imgUrl={item.imgUrl}
              onClick={this.handleClick}
            />
          ))}
        </Card.Group>
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
    actionThemeSelect: bindActionCreators(themeSelect, dispatch),
  };
  return actionObj;
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);