import express  from 'express';
import React    from 'react';
import ReactDom from 'react-dom/server';
import { Provider } from 'react-redux';
import { match, RouterContext } from 'react-router';

import waterfall from 'async/waterfall';
import API from './shared/api';

import configureStore from './store/configureStore';
import routes from './routes';
import actions from './actions';

global.navigator = { userAgent: 'all' };
const app = express();
app.use(express.static('public'));

app.use('/theme/:id', (req, res) => {
  const store = configureStore();
  waterfall([
    function (callback) {
      store.dispatch(actions.wordsRequest());
      API.card.byThemeId(req.params.id).then(data => {
        if (!data) {
          store.dispatch(actions.wordsRequestFailed());
          return callback(true, {});
        }
        store.dispatch(actions.wordsRequestSuccess(data));
        callback();
      });
    },
  ], (err, result) => {
    renderApp(req, res, store);
  });
});

app.use((req, res) => {
  const store = configureStore();
  waterfall([
    function (callback) {
      store.dispatch(actions.themesRequest());
      API.theme.getAll().then(data => {
        if (!data) {
          store.dispatch(actions.themesRequestFailed());
          return callback(true, {});
        }
        store.dispatch(actions.themesRequestSuccess(data));
        callback();
      });
    },
  ], function(err, result) {
    renderApp(req, res, store);
  });
});

const assetUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:8050' : '/';

function renderApp(req, res, store) {
  match({ routes, location: req.originalUrl }, (error, redirectLocation, renderProps) => {
    if (redirectLocation) {
      return res.redirect(301, redirectLocation.pathname + redirectLocation.search);
    }

    if (error) {
      return res.status(500).send(error.message);
    }

    if (!renderProps) {
      return res.status(404).send('Not found');
    }
    const componentHTML = ReactDom.renderToString(
      <Provider store={store}>
        <RouterContext {...renderProps} />
      </Provider>
    );
    const state = store.getState();
    return res.end(renderHTML(componentHTML, state));
  });

}

function renderHTML(componentHTML, initialState) {
  return `
    <!DOCTYPE html>
      <html>
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Hello React</title>
          <link rel="stylesheet" href="${assetUrl}/public/assets/styles.css">
          <script type="application/javascript">
            window.REDUX_INITIAL_STATE = ${JSON.stringify(initialState)};
          </script>
      </head>
      <body>
        <div id="react-view">${componentHTML}</div>
        <script type="application/javascript" src="${assetUrl}/public/assets/bundle.js"></script>
      </body>
    </html>
  `;
}

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on: ${PORT}`);
});
