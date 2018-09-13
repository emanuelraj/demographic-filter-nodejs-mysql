'use strict';


module.exports = (app) => {
    app.use('/api/v1/census', require('./api/census'));
};