/**
 * 
 * Package: request-apis
 * Author: Ganesh B
 * Description: 
 * Install: npm i request-apis --save
 * Github: https://github.com/ganeshkbhat/apis-require
 * npmjs Link: https://www.npmjs.com/package/request-apis
 * File: src/.js
 * File Description: 
 * 
*/

/* eslint no-console: 0 */

'use strict';

module.exports.METHODS = module.exports.default = Object.freeze({
    "GET": "GET",
    "POST": "POST",
    "PUT": "PUT",
    "PATCH": "PATCH",
    "DELETE": "DELETE",
    "OPTIONS": "OPTIONS"
});

module.exports.default = module.exports.METHODS;

