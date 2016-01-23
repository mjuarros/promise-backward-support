'use strict';

const fs = require('fs');

function readPackage (callback) {
    
    //as of now we do not have default values in Node.js
    callback = callback || function () {};

    return new Promise((resolve, reject) => {

        fs.readFile('./package.json', (err, data) => {

          if (err) {

            reject(err);
            return callback(err);
          }

          resolve(data);
          return callback(null, data);
      });
  });
}
module.exports.readPackage = readPackage
