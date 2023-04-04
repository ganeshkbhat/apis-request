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


const {
    _isValidURL, _getProtocol, _checkHttpsProtocol,
    isValidURL, getProtocol, checkHttpsProtocol,
    _fetch, _getRequireOrImport,
    _deleteRequest, _getRequest, _postRequest, _putRequest, _patchRequest, _request,
    deleteRequest, getRequest, postRequest, putRequest, patchRequest, request, 
    textResponseTransformer, jsonResponseTransformer, xmlResponseTransformer, 
    ymlResponseTransformer, iniResponseTransformer, 
    csvResponseTransformer, dotenvResponseTransformer
} = require("./src/requests.js");

const { CONTENT_TYPE } = require("./src/constants/content_types");
const { PROTOCOLS, PROTOCOL_NODE_MODULES } = require("./src/constants/http_protocols");
const { REQUEST_HEADERS, REQUEST_HEADERS_CATEGORIZED } = require("./src/constants/http_request_headers");
const { RESPONSE_HEADERS, RESPONSE_HEADERS_CATEGORIZED } = require("./src/constants/http_response_headers");


// Make requests

module.exports._deleteRequest = _deleteRequest;
module.exports._getRequest = _getRequest;
module.exports._postRequest = _postRequest;
module.exports._putRequest = _putRequest;
module.exports._patchRequest = _patchRequest;
module.exports._request = _request;

module.exports.deleteRequest = deleteRequest;
module.exports.getRequest = getRequest;
module.exports.postRequest = postRequest;
module.exports.putRequest = putRequest;
module.exports.patchRequest = patchRequest;
module.exports.request = request;


// Make http checks

module.exports._isValidURL = _isValidURL;
module.exports._getProtocol = _getProtocol;
module.exports._checkHttpsProtocol = _checkHttpsProtocol;

module.exports.isValidURL = isValidURL;
module.exports.getProtocol = getProtocol;
module.exports.checkHttpsProtocol = checkHttpsProtocol;


module.exports._fetch = _fetch;
module.exports._getRequireOrImport = _getRequireOrImport;


module.exports.textResponseTransformer = textResponseTransformer;
module.exports.jsonResponseTransformer = jsonResponseTransformer;
module.exports.xmlResponseTransformer = xmlResponseTransformer;
module.exports.ymlResponseTransformer = ymlResponseTransformer;
module.exports.iniResponseTransformer = iniResponseTransformer;
module.exports.csvResponseTransformer = csvResponseTransformer;
module.exports.dotenvResponseTransformer = dotenvResponseTransformer;


module.exports.constants = { CONTENT_TYPE, PROTOCOLS, PROTOCOL_NODE_MODULES, REQUEST_HEADERS, REQUEST_HEADERS_CATEGORIZED, RESPONSE_HEADERS, RESPONSE_HEADERS_CATEGORIZED };
