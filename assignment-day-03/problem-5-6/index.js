/*
* /api/students GET (to get all students)
* /api/students/2 GET (to return the 2rd student)
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