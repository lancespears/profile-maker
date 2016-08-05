// Main starting point of the application
require('babel-register');
require('babel-polyfill');
const express = require('express');
const http = require('http');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const errorhandler = require('errorhandler');

// Database
const db = require('./db/db');

const router = express.Router();
const profiles = express.Router();
require('./routes/profiles')(profiles);

// Express instance
const app = express();

// App Setup
app.use(errorhandler());
app.use(logger('dev'));
app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: '*/*' }));


// Routes
app.use('/profiles', profiles);



// Server Setup
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
