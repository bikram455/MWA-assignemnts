module.exports.getDivision = function(req, res) {
    let division = {
        dividend: req.params.dividend,
        divisor: req.query.divisor,
        result: parseInt(req.params.dividend) / parseInt(req.query.divisor) 
    };
    res.status(parseInt(process.env.SUCCESS_STATUS_CODE)).send(division);
}