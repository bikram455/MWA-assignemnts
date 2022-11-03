const http = require('http');
const { readFile } = require('fs');

const getTemplates = function(res, file) {
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200);
    readFile(file, function(err, buffer) {
        res.end(buffer);
    });
}

const getJSON = function(res) {
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    res.end("{\"message\": \"This server returns a json response.\"}");
}

const initServer = function(req, res) {
    if(req.method === 'POST') {
        getJSON(res);
    } else if(req.method == 'GET') {
        switch(req.url) {
            case '/page1':
                getTemplates(res, 'views/page1.html');
                break;
            case '/page2':
                getTemplates(res, 'views/page2.html');
                break;
            default:
                getTemplates(res, 'views/index.html');
                break;
        }
    }
};

const server = http.createServer(initServer);
server.listen(3434, function() {
    console.log('Listening to port: 3434');
});