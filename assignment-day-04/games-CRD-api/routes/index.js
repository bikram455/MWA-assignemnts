const { Router } = require('express');
const router = Router();
const gamesController = require('../controller/games.controller');

router.route('/games')
.get(gamesController.getGames);

router.route('/add-game')
.post(gamesController.addGame);

router.route('/delete-game')
.delete(gamesController.deleteGame);

module.exports = router;