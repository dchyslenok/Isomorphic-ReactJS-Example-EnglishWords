import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import ThemePage from './containers/ThemePage';

export default (
  <Route component={App} path="/" >
    <IndexRoute component={HomePage} />
    <Route component={ThemePage} path="theme/:id" />
  </Route>
);
