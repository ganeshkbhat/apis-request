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
const METHODS = require("./constants/methods").METHODS;
const PROTOCOLS = require("./constants/http_protocols").PROTOCOLS;
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



/**
 *
 *
 * @param {*} options
 * @param {*} data
 * @return {*} 
 */
function _optionsRequest(options, data, protocol) {
    return _request({ ...options, method: METHODS.OPTIONS }, data, protocol, connectHandler, errorHandler, upgradeHandler);
}



/**
 *
 *
 * @param {*} options
 * @param {*} data
 * @return {*} 
 */
function _deleteRequest(options, data, protocol) {
    return _request({ ...options, method: METHODS.DELETE }, data, protocol, connectHandler, errorHandler, upgradeHandler);
}


/**
 *
 *
 * @param {*} options
 * @param {*} data
 * @return {*} 
 */
function _patchRequest(options, data, protocol) {
    return _request({ ...options, method: METHODS.PATCH }, data, protocol, connectHandler, errorHandler, upgradeHandler);
}

/**
 *
 *
 * @param {*} options
 * @param {*} data
 * @return {*} 
 */
function _postRequest(options, data, protocol) {
    return _request({ ...options, method: METHODS.POST }, data, protocol, connectHandler, errorHandler, upgradeHandler);
}

/**
 *
 *
 * @param {*} options
 * @param {*} data
 * @return {*} 
 */
function _putRequest(options, data, protocol) {
    return _request({ ...options, method: METHODS.PUT }, data, protocol, connectHandler, errorHandler, upgradeHandler);
}

/**
 *
 *
 * @param {*} options
 * @param {*} data
 * @return {*} 
 */
function _getRequest(options, data, protocol, connectHandler, errorHandler, upgradeHandler) {
    return _request({ ...options, method: METHODS.GET }, data, protocol, connectHandler, errorHandler, upgradeHandler);
}

/**
 *
 *
 * @param {*} options
 * @param {*} data
 * @return {*} 
 */
function _request(options, data, protocol, httpType = "https", connectHandler = (res, socket, head) => { }, errorHandler = (e) => e, upgradeHandler = (res, socket, upgradeHead) => { socket.end(); process.exit(0); }) {
    return new Promise((resolve, reject) => {
        const querystring = require('querystring');
        var netHttp;
        
        switch (httpType) {
            case httpType === PROTOCOL_MODULES.HTTP:
                netHttp = require(PROTOCOL_MODULES.HTTP);
                break;
            case httpType === PROTOCOL_MODULES.HTTPS:
                netHttp = require(PROTOCOL_MODULES.HTTPS);
                break;
            case httpType === PROTOCOL_MODULES.HTTP2:
                netHttp = require(PROTOCOL_MODULES.HTTP2);
                break;
        }

        options.agent = new netHttp.Agent(options) || false;

        const req = netHttp.request({ method: 'GET', ...options }, res => {
            const chunks = [];
            // res.setEncoding('utf8');
            res.on('data', data => chunks.push(data));
            res.on('end', () => {
                let resBody = Buffer.concat(chunks);
                switch (res.headers['content-type']) {
                    case 'application/json':
                        resBody = JSON.parse(resBody);
                        break;
                    case 'application/xml':
                        const XML = require("fast-xml-parser");
                        resBody = XML.parse(resBody);
                        break;
                    case 'text/html':
                        resBody = resBody.toString();
                        break;
                    case 'text/plain':
                        resBody = resBody.toString();
                        break;
                }
                resolve(resBody);
            });
        });

        req.on('connect', connectHandler);
        req.on('error', e => reject(errorHandler(e)));
        req.on('upgrade', upgradeHandler);

        if (!!postData) {
            // req.write(querystring.escape(JSON.stringify(postData)));
            req.write(postData);
        }
        req.end();
    });
}


/**
 *
 *
 * @param {*} url
 * @return {*} 
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
 *
 * @param {*} url
 * @return {*} 
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
 * @return {*} 
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
 *
 * @param {*} request
 * @param {*} options
 * @param {*} localGitFileCacheUrl
 * @param {*} _requireWriteImport
 * @return {*} 
 */
function _fetchWrite(request, options, localGitFileCacheUrl, _requireWriteImport) {
    return fetch(request).then(response => response.text())
        .then(function (data) {
            return _requireWriteImport(request, localGitFileCacheUrl, data, options)
        }.bind(_requireWriteImport));
}


function _fetch(url = 'https://www.google.com') {
    return fetch(new URL(url))
        .then(res => {
            res.text()       // response body (=> Promise)
            res.json()       // parse response body (=> Promise)
            res.status       //=> 200
            res.statusText   //=> 'OK'
            res.redirected   //=> false
            res.ok           //=> true
            res.url          //=> 'https://new.example.com'
            res.type         //=> 'basic'
            //   ('cors' 'default' 'error'
            //    'opaque' 'opaqueredirect')
            res.headers.get('Content-Type')
        })
}


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
module.exports._fetchWrite = _fetchWrite;
module.exports._fetch = _fetch;
module.exports._getRequireOrImport = _getRequireOrImport;
