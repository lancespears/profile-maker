// Main starting point of the application
require('babel-polyfill');
require('babel-register');
// var http = require('http');
var path = require('path');
var express = require('express');
var compression = require('compression');
var bodyParser = require('body-parser');
var cors = require('cors');
var logger = require('morgan');
var errorhandler = require('errorhandler');
var webpack = require('webpack');
var webpackMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config.js');
require('dotenv').config();

var isDeveloping = process.env.NODE_ENV !== 'production';
var port = isDeveloping ? 4000 : process.env.PORT;

// Database
var db = require('./postgres_server/db/db');

// Express instance
var app = express();

var router = express.Router();
var profiles = express.Router();
require('./postgres_server/routes/profiles')(profiles);


if (isDeveloping) {
  var compiler = webpack(config);
  var middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });

  // App Setup
  app.use(errorhandler());
  app.use(logger('dev'));
  app.use(cors());
  app.use(bodyParser.json({ type: '*/*' }));
  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));

  // Routes
  app.use('/profiles', profiles);

  app.get('*', function response(req, res) {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
    res.end();
  });
} else {
  app.use(express.static(__dirname + '/dist'));
  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
}

// Server Setup
// var server = http.createServer(app);
app.listen(port, 'localhost', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎   Listening on port %s', port);
});
