module.exports = function(req, res, next) {
    setTimeout(next, 2000); // Затримка у 2000 мілісекунд (2 секунди)
}
