(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');
    const doughnutRoute = require('../routes/doughnuts');
    const empRoute = require('../routes/employees');
    const storeRoute = require('../routes/stores');

    // *** register routes *** //
    app.use('/', routes);
    app.use('/doughnuts', doughnutRoute);
    app.use('/employees', empRoute)
    app.use('/stores', storeRoute)

  };
})(module.exports);
