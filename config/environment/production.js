'use strict';
let local = require('../local.env.js');
// Production specific configuration
// =================================
module.exports = {
     // Server IP
     ip: process.env.IP ||undefined,
     port: 8080,
     mysql: {
        host: process.env.DB_HOST || local.mysql.host,
        user: process.env.DB_USER || local.mysql.user,
        password: process.env.DB_PASSWORD || local.mysql.password,
        database: process.env.DB_DATABASE || local.mysql.database,
        port: process.env.DB_DATABASE || local.mysql.port
     }
};