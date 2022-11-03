require('dotenv').config();
const path = require('path');
const express = require('express');
const routes = require('./routes');

const app = express();
app.use('/api', function(req, res, next) {
    console.log(req.method, req.url);
    next();
});

app.use(express.static(path.join(__dirname, process.env.PUBLIC_FOLDER)));
app.use('/api', routes);

const server = app.listen(process.env.PORT, function() {
    console.log(process.env.SERVER_LISTEN_MESSAGE, server.address().port);
});


