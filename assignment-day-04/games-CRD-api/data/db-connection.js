const MongoClient = require('mongodb').MongoClient;
let _connection = null;

const open = function() {
    if(!get()) {
        MongoClient.connect(process.env.MONGO_CONNECTION_STRING, function(err, client) {
            if(err) {
                console.error(process.env.DB_CONNECTION_ERROR, err);
                return;
            } else {
                _connection = client.db(process.env.DB_NAME);
            }
        });
    }
}

const get = function() {
    return _connection;
}

module.exports = {open, get};