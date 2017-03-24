import express  from 'express';
import React    from 'react';
import ReactDom from 'react-dom/server';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { match, RouterContext } from 'react-router';
import routes from './routes';
import { test } from './actions/counterActions'

const app = express();

app.use((req, res) => {
  const store = configureStore();

  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (redirectLocation) { // Если необходимо сделать redirect
      return res.redirect(301, redirectLocation.pathname + redirectLocation.search);
    }

    if (error) { // Произошла ошибка любого рода
      return res.status(500).send(error.message);
    }

    if (!renderProps) { // Мы не определили путь, который бы подошел для URL
      return res.status(404).send('Not found');
    }

    const componentHTML = ReactDom.renderToString(
      <Provider store={store}>
        <RouterContext {...renderProps} />
      </Provider>
    );

    store.dispatch(test());
    const state = store.getState();
    return res.end(renderHTML(componentHTML, state));
  });
});

const assetUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:8050' : '/';

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
