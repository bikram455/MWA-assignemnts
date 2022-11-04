const { ObjectId } = require('mongodb');
const dbConnection = require('../data/db-connection');

module.exports.getGames = function(req, res) {
    const db = dbConnection.get();
    const connection = db.collection(process.env.GAMES_COLLECTION);
    let count = 4;
    let offset = 0;
    if(req.query && req.query.count) {
        count = parseInt(req.query.count);
        if(count > 7) count = 7;
    }
    if(req.query && req.query.offset) offset = parseInt(req.query.offset) * count;
    connection.find().skip(offset).limit(count).toArray(function(err, students) {
        res.send(students);
    });
}

module.exports.addGame = function(req, res) {
    const error = {};
    if(req.body && req.body.title && (req.body.price || req.body.price == 0) && (req.body.minimumAge || req.body.minimumAge == 0) && (req.body.minimumPlayers || req.body.minimumPlayers == 0)) {
        let flag = true;
        let game = {
            title: req.body.title,
            price: req.body.price,
            minimumAge: req.body.minimumAge,
            minimumPlayers: req.body.minimumPlayers
        };
        if(game.minimumAge < 6 || game.minimumAge > 99) {
            flag = false;
            error[process.env.MINIMUM_AGE] = process.env.INVALID_AGE;
        }
        if(game.minimumPlayers < 1 || game.minimumPlayers > 11) {
            flag = false;
            error[process.env.MINIMUM_PLAYERS] = process.env.INVALID_MINIMUM_PLAYERS;
        }
        if(flag) {
            const db = dbConnection.get();
            const connection = db.collection(process.env.GAMES_COLLECTION);
            connection.insertOne(game, function(err, data) {
                res.status(parseInt(process.env.SUCCESS_STATUS_CODE)).send({message: process.env.INSERT_GAME_SUCCESS});
            });
            return;
        }
    }
    if(JSON.stringify(error) == process.env.EMPTY_DATA) error[process.env.ERROR] = process.env.INVALID_DATA;
    res.status(parseInt(process.env.BAD_REQUEST_STATUS_CODE)).send(error);
}

module.exports.deleteGame = function(req, res) {
    if(req.query && req.query.gameId) {
        const game  = {
            '_id': ObjectId(req.query.gameId)
        }
        const db = dbConnection.get();
        const connection = db.collection(process.env.GAMES_COLLECTION);
        connection.find(game).toArray(function(err, students) {
            if(students && students.length > 0) {
                connection.deleteOne(game, function(err, data) {
                    res.status(parseInt(process.env.SUCCESS_STATUS_CODE)).send({message: process.env.DELETE_SUCCESS});
                });
            } else {
                res.status(parseInt(process.env.NOT_FOUND_STATUS_CODE)).send({message: process.env.GAME_NOT_FOUND});
            }
        });
        return;
    }
    res.status(process.env.BAD_REQUEST_STATUS_CODE).send({message: process.env.INVALID_REQUEST});
}