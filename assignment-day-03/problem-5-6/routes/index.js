const { Router } = require('express');
const router = Router();
const studentController = require('../controller/student.controller');

router.route('/students')
.get(studentController.getAllStudents);

router.route('/students/:studentId')
.get(studentController.getStudent);

module.exports = router;