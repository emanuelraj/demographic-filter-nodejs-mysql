'use strict';
let local = require('../local.env.js');
// Development specific configuration
// ==================================
module.exports = {
    port: 8001,
    ip: '0.0.0.0',
    seedDB: false,
    mysql: {
        host: process.env.DB_HOST || local.mysql.host,
        user: process.env.DB_USER || local.mysql.user,
        password: process.env.DB_PASSWORD || local.mysql.password,
        database: process.env.DB_DATABASE || local.mysql.database,
        port: process.env.DB_DATABASE || local.mysql.port
    }
};