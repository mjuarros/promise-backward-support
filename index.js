'use strict';

const readAppConfiguration = require('./lib/readPackageJson');
const internals = {};
const Promise = readAppConfiguration.readPackage();

Promise.then((config) => {
    
    console.log(config.toString());
}).catch((err) => {

    console.log(err);
});

readAppConfiguration.readPackage((err, data) => {

    if (err) {

        console.error(err);
    }

    console.log(data.toString());
});
