const { Router } = require('express');
const jsonController = require('../controller/json.controller');

const router = Router();

router.route('*')
.post(jsonController.sendJSON);

module.exports = router;