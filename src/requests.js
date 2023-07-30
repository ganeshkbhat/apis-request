/**
 * 
 * Package: request-apis
 * Author: Ganesh B
 * Description: 
 * Install: npm i request-apis --save
 * Github: https://github.com/ganeshkbhat/apis-require
 * npmjs Link: https://www.npmjs.com/package/request-apis
 * File: src/request.js
 * File Description: 
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';


const path = require("path");
const fs = require('fs');
const https = require('https');
const http = require('http');
const METHODS = require("./constants/methods").METHODS;
const HTTP_PROTOCOLS = require("./constants/http_protocols").HTTP_PROTOCOLS;
const PROTOCOL_NODE_MODULES = require("./constants/http_protocols").PROTOCOL_NODE_MODULES;


/** New Structure for Revamped version of index.js with better isolation, and independent functions */

/**
 *
 *
 * @param {*} module_name
 * @return {*} 
 */
function _getRequireOrImport(module_name) {
    if (process.versions.node.split('.')[0] > "14") {
        if (module_name.includes(".json")) {
            return import(module_name, { assert: { type: 'json' } });
        }
        if (module_name.includes(".wasm")) {
            return import(module_name, { type: "module", assert: { type: "webassembly" } });
        }
        return import(module_name);
    }
    return require(module_name);
}


let textResponseTransformer = (res, options) => new String(res);
let jsonResponseTransformer = (res, options) => JSON.stringify(res);
let xmlResponseTransformer = (res, options) => require('xml-js').xml2json(textResponseTransformer(res));
let ymlResponseTransformer = (res, options) => require('yaml').parse(textResponseTransformer(res));
let iniResponseTransformer = (res, options) => require('ini').parse(textResponseTransformer(res));
let csvResponseTransformer = (res, options) => require('csv-parse/sync').parse(textResponseTransformer(res), { ...options });
let dotenvResponseTransformer = (res, options) => require('dotenv').config(Buffer.from(textResponseTransformer(res)));


/**
 *
 * _optionsRequest
 *
 * @param {*} options
 * @param {*} data
 * @param {*} protocol
 * @param {*} connectHandler
 * @param {*} contentHandler
 * @param {*} errorHandler
 * @param {*} upgradeHandler
 * @return {*} Promise: resolve<{ headers, body }>, reject <{ error }> 
 */
function _optionsRequest(options, data, protocol, connectHandler, contentHandler, errorHandler, upgradeHandler) {
    return _request({ ...options, method: METHODS.OPTIONS }, data, protocol, connectHandler, contentHandler, errorHandler, upgradeHandler);
}

/**
 *
 * _deleteRequest
 *
 * @param {*} options
 * @param {*} data
 * @param {*} protocol
 * @param {*} connectHandler
 * @param {*} contentHandler
 * @param {*} errorHandler
 * @param {*} upgradeHandler
 * @return {*} Promise: resolve<{ headers, body }>, reject <{ error }> 
 */
function _deleteRequest(options, data, protocol, connectHandler, contentHandler, errorHandler, upgradeHandler) {
    return _request({ ...options, method: METHODS.DELETE }, data, protocol, connectHandler, contentHandler, errorHandler, upgradeHandler);
}

/**
 *
 * _patchRequest
 *
 * @param {*} options
 * @param {*} data
 * @param {*} protocol
 * @param {*} connectHandler
 * @param {*} contentHandler
 * @param {*} errorHandler
 * @param {*} upgradeHandler
 * @return {*} Promise: resolve<{ headers, body }>, reject <{ error }> 
 */
function _patchRequest(options, data, protocol, connectHandler, contentHandler, errorHandler, upgradeHandler) {
    return _request({ ...options, method: METHODS.PATCH }, data, protocol, connectHandler, contentHandler, errorHandler, upgradeHandler);
}

/**
 *
 * _postRequest
 *
 * @param {*} options
 * @param {*} data
 * @param {*} protocol
 * @param {*} connectHandler
 * @param {*} contentHandler
 * @param {*} errorHandler
 * @param {*} upgradeHandler
 * @return {*} Promise: resolve<{ headers, body }>, reject <{ error }> 
 */
function _postRequest(options, data, protocol, connectHandler, contentHandler, errorHandler, upgradeHandler) {
    return _request({ ...options, method: METHODS.POST }, data, protocol, connectHandler, contentHandler, errorHandler, upgradeHandler);
}

/**
 *
 * _putRequest
 *
 * @param {*} options
 * @param {*} data
 * @param {*} protocol
 * @param {*} connectHandler
 * @param {*} contentHandler
 * @param {*} errorHandler
 * @param {*} upgradeHandler
 * @return {*} Promise: resolve<{ headers, body }>, reject <{ error }>
 */
function _putRequest(options, data, protocol, connectHandler, contentHandler, errorHandler, upgradeHandler) {
    return _request({ ...options, method: METHODS.PUT }, data, protocol, connectHandler, contentHandler, errorHandler, upgradeHandler);
}

/**
 *
 * _getRequest
 *
 * @param {*} options
 * @param {*} data
 * @param {*} protocol
 * @param {*} connectHandler
 * @param {*} contentHandler
 * @param {*} errorHandler
 * @param {*} upgradeHandler
 * @return {*} Promise: resolve<{ headers, body }>, reject <{ error }> 
 */
function _getRequest(options, data, protocol, connectHandler, contentHandler, errorHandler, upgradeHandler) {
    return _request({ ...options, method: METHODS.GET }, data, protocol, connectHandler, contentHandler, errorHandler, upgradeHandler);
}


/**
 * 
 * contentTypeHandler
 * 
 * Different contentTypeHandler Handlers
 * 
 * @param {*} responseObject
 * @param {*} responseBody
 * @return { headers, body }
 */
function contentTypeHandler(responseObject, responseBody) {
    switch (responseObject.headers['content-type']) {
        case 'application/json':
            responseBody = jsonResponseTransformer(responseBody);
            break;
        case 'application/xml':
            responseBody = xmlResponseTransformer(responseBody);
            break;
        case 'application/ini':
            responseBody = iniResponseTransformer(responseBody);
            break;
        case 'application/yml':
            responseBody = ymlResponseTransformer(responseBody);
            break;
        case 'application/csv':
            responseBody = csvResponseTransformer(responseBody);
            break;
        case 'application/dotenv':
            responseBody = dotenvResponseTransformer(responseBody);
            break;
        case 'text/html':
            responseBody = textResponseTransformer(responseBody);
            break;
        case 'text/plain':
            responseBody = textResponseTransformer(responseBody);
            break;
    }
    return { headers: responseObject.headers, body: responseBody }
}


/**
 *
 * _request
 *
 * @param {*} options
 * @param {*} postData
 * @param {string} [protocol="https"]
 * @param {*} [connectHandler=(res, socket, head) => { }]
 * @param {*} [contentHandler=contentTypeHandler]
 * @param {*} [errorHandler=(e) => e]
 * @param {*} [upgradeHandler=(res, socket, upgradeHead) => { socket.end(); process.exit(0); }]
 * @return {*} Promise: resolve<{ headers, body }>, reject <{ error }>
 */
function _request(options, postData, protocol = "https", connectHandler = (res, socket, head) => { }, contentHandler = contentTypeHandler, errorHandler = (e) => e, upgradeHandler = (res, socket, upgradeHead) => { socket.end(); process.exit(0); }) {
    return new Promise((resolve, reject) => {
        const querystring = require('querystring');
        var netHttp = (protocol === "https") ? require(PROTOCOL_NODE_MODULES.HTTPS) : (protocol === "http") ? require(PROTOCOL_NODE_MODULES.HTTP) : require(PROTOCOL_NODE_MODULES.HTTP2);
        options.agent = new netHttp.Agent(options) || false;

        const req = netHttp.request({ method: 'GET', ...options }, res => {
            const chunks = [];
            // res.setEncoding('utf8');
            res.on('data', data => chunks.push(data));
            res.on('end', () => {
                let resBody = Buffer.concat(chunks);
                let response = (!!contentHandler) ? contentHandler(res, resBody) : { headers: res.headers, body: resBody };
                resolve(response);
            });
        });

        req.on('connect', connectHandler);
        req.on('error', e => reject(errorHandler(e)));
        req.on('upgrade', upgradeHandler);

        if (!!postData) {
            if (typeof postData !== "string") {
                // req.write(querystring.escape(JSON.stringify(postData)));
                let pdata = (typeof postData === "object") ? JSON.stringify(postData) : postData.toString();
                req.write(pdata);
            } else {
                req.write(postData);
            }
        }
        req.end();
    });
}


/**
 *
 *
 * @param {*} url
 * @param {*} data
 * @param {string} [method='POST']
 * @return {*} 
 */
function makeRequest(options = { url, data, method: 'POST' }, connectHandler = (res, socket, head) => { }, contentHandler = contentTypeHandler, errorHandler = (e) => e, upgradeHandler = (res, socket, upgradeHead) => { socket.end(); process.exit(0); }) {

    options = {
        method: options.method,
        headers: { 'Content-Type': 'application/json' }
    };

    if (options.data) {
        options.body = JSON.stringify(options.data);
    }

    return new Promise((resolve, reject) => {

        const req = https.request(options, (res) => {
            let responseData = '';
            res.on('data', (chunk) => {
                responseData += chunk;
            });
            res.on('end', () => {
                const responseBody = responseData ? JSON.parse(responseData) : null;
                resolve({ statusCode: res.statusCode, body: responseBody });
            });
        });

        req.on('error', (err) => {
            reject(err);
        });

        req.end();

    });
}


/**
 *
 * _checkHttpsProtocol
 *
 * @param {*} url
 * @return {*} Boolean
 */
function _checkHttpsProtocol(url) {
    try {
        return new URL(url).protocol === "https:";
    } catch (error) {
        return false;
    }
}


/**
 * 
 * _getProtocol
 *
 * @param {*} url
 * @return {*} Boolean
 */
function _getProtocol(url) {
    try {
        return new URL(url).protocol;
    } catch (error) {
        return false;
    }
}


// // Avoid 
// function isValidURLRegex(string) {
//     var res =
//         string.match(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-
//             ]+[a - zA - Z0 - 9]\.[^\s]{ 2,}| www\.[a - zA - Z0 - 9][a - zA - Z0 - 9 -] + [a - zA - Z0 - 9]
//     \.[^\s]{ 2,}| https ?: \/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|w
//     ww\.[a - zA - Z0 - 9] +\.[^\s]{ 2,}) /gi);
//     return (res !== null);
// };


/**
 *
 *
 * @param {*} url
 * @return {*} Boolean
 */
function _isValidURL(url) {
    try {
        return !!new URL(url);
    } catch (error) {
        return false;
    }
}


/**
 * 
 * _fetchWrite
 *
 * 
 * @param {*} request
 * @param {*} options
 * @param {*} localGitFileCacheUrl
 * @param {*} _requireWriteImport
 * @return {*} 
 */
function _fetchWrite(request, options, localGitFileCacheUrl, _requireWriteImport) {
    return _fetch(request, "text", options.transformOptions).then(function (data) {
        return _requireWriteImport(request, localGitFileCacheUrl, data, options)
    }.bind(_requireWriteImport));
}


/**
 * 
 * transformFetchResponse
 * 
 *
 * @param {*} response
 * @param {*} transform
 * @param {string} [transformOptions={ delimiter: ",", comment: "#", columns: true, skip_empty_lines: true }]
 * @return {*} 
 */
function transformFetchResponse(response, transform, transformOptions = { delimiter: ",", comment: "#", columns: true, skip_empty_lines: true }) {
    let func = textResponseTransformer;
    if (transform === "json") {
        func = jsonResponseTransformer;
    } else if (transform === "xml") {
        func = xmlResponseTransformer;
    } else if (transform === "yml") {
        func = ymlResponseTransformer;
    } else if (transform === "ini") {
        func = iniResponseTransformer;
    } else if (transform === "csv") {
        func = csvResponseTransformer;
    } else if (transform === "dotenv") {
        func = dotenvResponseTransformer;
    }
    return func(response, transformOptions);
}


/**
 *
 * _fetch
 *
 * @param {string} [url]
 * @param {string} [transform="text"]
 * @param {*} transformOptions
 * @return {*} 
 */
function _fetch(url, transform = "text", transformOptions) {
    return fetch(new URL(url)).then((res) => transformFetchResponse(res, transform, transformOptions));

    // .then(res => {
    //     res.text()       // response body (=> Promise)
    //     res.json()       // parse response body (=> Promise)
    //     res.status       //=> 200
    //     res.statusText   //=> 'OK'
    //     res.redirected   //=> false
    //     res.ok           //=> true
    //     res.url          //=> 'https://new.example.com'
    //     res.type         //=> 'basic'
    //     //   ('cors' 'default' 'error'
    //     //    'opaque' 'opaqueredirect')
    //     res.headers.get('Content-Type')
    // })
}


module.exports._deleteRequest = _deleteRequest;
module.exports._getRequest = _getRequest;
module.exports._postRequest = _postRequest;
module.exports._putRequest = _putRequest;
module.exports._patchRequest = _patchRequest;
module.exports._request = _request;


module.exports.deleteRequest = _deleteRequest;
module.exports.getRequest = _getRequest;
module.exports.postRequest = _postRequest;
module.exports.putRequest = _putRequest;
module.exports.patchRequest = _patchRequest;
module.exports.request = _request;

module.exports.del = _deleteRequest;
module.exports.get = _getRequest;
module.exports.post = _postRequest;
module.exports.put = _putRequest;
module.exports.patch = _patchRequest;
module.exports.request = _request;


// Make http checks

module.exports._isValidURL = _isValidURL;
module.exports._getProtocol = _getProtocol;
module.exports._checkHttpsProtocol = _checkHttpsProtocol;

module.exports.isValidURL = _isValidURL;
module.exports.getProtocol = _getProtocol;
module.exports.checkHttpsProtocol = _checkHttpsProtocol;


module.exports._fetchWrite = _fetchWrite;
module.exports._fetch = _fetch;
module.exports.makeRequest = makeRequest;
module.exports._getRequireOrImport = _getRequireOrImport;

module.exports.textResponseTransformer = textResponseTransformer;
module.exports.jsonResponseTransformer = jsonResponseTransformer;
module.exports.xmlResponseTransformer = xmlResponseTransformer;
module.exports.ymlResponseTransformer = ymlResponseTransformer;
module.exports.iniResponseTransformer = iniResponseTransformer;
module.exports.csvResponseTransformer = csvResponseTransformer;
module.exports.dotenvResponseTransformer = dotenvResponseTransformer;
