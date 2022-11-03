module.exports.sendJSON = function(req, res) {
    res.status(parseInt(process.env.SUCCESS_STATUS_CODE)).send({'message': process.env.JSON_MESSAGE});
}