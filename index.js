/**
 * 
 * Package: request-apis
 * Author: Ganesh B
 * Description: 
 * Install: npm i request-apis --save
 * Github: https://github.com/ganeshkbhat/apis-require
 * npmjs Link: https://www.npmjs.com/package/request-apis
 * File: index.js
 * File Description: 
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';


const { _isValidURL, _getProtocol, _checkHttpsProtocol, _fetch, _deleteRequest, _getRequest, _postRequest, _putRequest, _patchRequest, _request } = require("./src/requests.js");


// Make requests

module.exports._deleteRequest = _deleteRequest;
module.exports._getRequest = _getRequest;
module.exports._postRequest = _postRequest;
module.exports._putRequest = _putRequest;
module.exports._patchRequest = _patchRequest;
module.exports._request = _request;


// Make http checks

module.exports._isValidURL = _isValidURL;
module.exports._getProtocol = _getProtocol;
module.exports._checkHttpsProtocol = _checkHttpsProtocol;
module.exports._fetch = _fetch;


