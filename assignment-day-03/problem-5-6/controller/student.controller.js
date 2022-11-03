const studentsData = require('../data/students.json');

module.exports.getAllStudents = function(req, res) {
    res.status(parseInt(process.env.SUCCESS_STATUS_CODE)).send(studentsData);
}

module.exports.getStudent = function(req, res) {
    const student = studentsData[req.params.studentId - 1];
    if(!student) {
        res.status(parseInt(process.env.NOT_FOUND_STATUS_CODE)).send({error: process.env.STUDENT_NOT_FOUND_MESSAGE});
    } else {
        res.status(parseInt(process.env.SUCCESS_STATUS_CODE)).send(student);
    }
}