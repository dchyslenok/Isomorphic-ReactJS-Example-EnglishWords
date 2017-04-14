import React from 'react';
import { IndexRoute, Route }  from 'react-router';
import App from 'components/App';
import IndexPage from 'components/IndexPage';
import ThemePage from 'components/ThemePage';
import GamePage from 'components/GamePage';

export default (
  <Route component={App} path='/'>
    <IndexRoute component={IndexPage} />
    <Route component={ThemePage} path='theme/:id' />
    <Route component={GamePage} path='game' />
  </Route>
);
