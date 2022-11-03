const gamesData = require('../data/games.json');

module.exports.getAll = function(req, res) {
    res.status(parseInt(process.env.SUCCESS_STATUS_CODE)).json({'Games Data': gamesData});
}

module.exports.getOne = function(req, res) {
    const gameIndex = req.params.gameId;
    const theGame = gamesData[gameIndex];
    res.status(parseInt(process.env.SUCCESS_STATUS_CODE)).json({'Game Data': theGame});
}