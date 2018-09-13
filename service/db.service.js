const config = require('../config/');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
});


connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;
