const { Router } = require('express');
const router = Router();
const gamesController = require('../controllers/games.controller');

router.route('/games')
.get(gamesController.getAll);

router.route('/games/:gameId')
.get(gamesController.getOne);

module.exports = router;