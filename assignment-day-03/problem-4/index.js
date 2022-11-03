/*
* the api for this app must be like
* http://localhost:3000/api/12?second=3
*/

require('dotenv').config();
const express = require('express');
const routes = require('./routes');

const app = express();
app.use('/api', function(req, res, next) {
    console.log(req.method, req.url);
    next();
});
app.use('/api', routes);

const server = app.listen(process.env.PORT, function(req, res) {
    console.log(process.env.SERVER_LISTEN_MESSAGE, server.address().port);
});
