const fs = require('fs');
const path = require('path');

function userLogs(req, res, next) {
    fs.appendFileSync(path.join(__dirname, '../logs/userLogs.txt'), 'El usuario ingresó a la ruta: ' + req.url)

    next()
}

module.exports = userLogs;

/* fs.appendFileSync('userLogs.txt', 'El usuario ingresó a la ruta: ' + req.url) */