/**
 * 
 * Package: request-apis
 * Author: Ganesh B
 * Description: 
 * Install: npm i request-apis --save
 * Github: https://github.com/ganeshkbhat/apis-require
 * npmjs Link: https://www.npmjs.com/package/request-apis
 * File: index.mjs
 * File Description: 
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';

import {
    _isValidURL, _getProtocol, _checkHttpsProtocol,
    isValidURL, getProtocol, checkHttpsProtocol,
    _fetch, _getRequireOrImport,
    _deleteRequest, _getRequest, _postRequest, _putRequest, _patchRequest, _optionsRequest, _request,
    deleteRequest, getRequest, postRequest, putRequest, patchRequest, optionsRequest, request,
    del, get, post, put, patch, options,
    constants,
    textResponseTransformer, jsonResponseTransformer, xmlResponseTransformer, 
    ymlResponseTransformer, iniResponseTransformer, 
    csvResponseTransformer, dotenvResponseTransformer
} from "./index.js";

export default _request;
export {
    _isValidURL, _getProtocol, _checkHttpsProtocol,
    isValidURL, getProtocol, checkHttpsProtocol,
    _fetch, _getRequireOrImport,
    _deleteRequest, _getRequest, _postRequest, _putRequest, _patchRequest, _optionsRequest, _request,
    deleteRequest, getRequest, postRequest, putRequest, patchRequest, optionsRequest, request,
    del, get, post, put, patch, options,
    constants,
    textResponseTransformer, jsonResponseTransformer, xmlResponseTransformer, 
    ymlResponseTransformer, iniResponseTransformer, 
    csvResponseTransformer, dotenvResponseTransformer
};
