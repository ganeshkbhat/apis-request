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

module.exports.PROTOCOL_NODE_MODULES = Object.freeze({
    "HTTP": "http",
    "HTTPS": "https",
    "HTTP2": "http2"
});

module.exports.PROTOCOLS = Object.freeze({
    "HTTP": "http:",
    "HTTPS": "https:",
    "HTTP2": "http2"
});

module.exports.default = module.exports.PROTOCOLS;
