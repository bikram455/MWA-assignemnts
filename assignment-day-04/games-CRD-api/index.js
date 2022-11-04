const express = require('express');
require('dotenv').config();
require('./data/db-connection').open();
const routes = require('./routes');
const bodyParser = require('body-parser');

const app = express();
app.use('/api', function(req, res, next) {
    console.log(req.method, req.url);
    next();
});
app.use(bodyParser.json());
app.use('/api', routes)
const server = app.listen(process.env.PORT, function() {
    console.log(process.env.SERVER_LISTEN_MESSAGE, server.address().port);
});