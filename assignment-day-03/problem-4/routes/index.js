const { Router } = require('express');
const router = Router();
const mathController = require('../controller/math.controller');

router.route('/:dividend')
.get(mathController.getDivision);

module.exports = router;