const express = require('express');

const app = express();


if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpackConfig = require('../webpack');

  const compiler = webpack(webpackConfig);

  app.use(webpackDevMiddleware(compiler));
  app.use(webpackHotMiddleware(compiler));
} else {
  app.use(express.static('public'));
}

function renderHTML() {
  return `
      <!doctype html>
      <html>
        <head>
          <meta charset=utf-8>
          <title>React Server Side Rendering</title>
        </head>
        <body>
          <div id="rootTag"></div>
          <script src="/js/main.js"></script>
        </body>
      </html>
  `;
}

app.get('/', (req, res) => {
  res.send(renderHTML());
});



const port = process.env.PORT || 8001;

app.listen(port, () => {
  console.info(`Express listening on port ${port}`); // eslint-disable-line
});
