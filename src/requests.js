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
 * git-rest: https://www.softwaretestinghelp.com/github-rest-api-tutorial/#:~:text=Log%20in%20to%20your%20GitHub,and%20click%20on%20Create%20Token.
 * 
*/

/* eslint no-console: 0 */

'use strict';


const path = require('path');
const fs = require('fs');


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
function _deleteRequest(options, data, protocol) {
    return new Promise((resolve, reject) => {
        const { request } = (protocol === "https") ? _getRequireOrImport("https") : _getRequireOrImport("http");
        return request(options, (res) => {
            let result = '';
            res.on('data', (chunk) => result += chunk);
            res.on('end', () => resolve(JSON.parse(result)));
        }).on('error', (err) => reject(err));
    });
}


/**
 *
 *
 * @param {*} options
 * @param {*} data
 * @return {*} 
 */
function _getRequest(options, data, protocol) {
    return new Promise((resolve, reject) => {
        const { get } = (protocol === "https") ? _getRequireOrImport("https") : _getRequireOrImport("http");
        let req = get(options, (res) => {
            let result = '';
            res.on('data', (chunk) => result += chunk);
            res.on('end', () => resolve(JSON.parse(result)));
        }).on('error', (err) => reject(err));
    });
}

/**
 *
 *
 * @param {*} options
 * @param {*} data
 * @return {*} 
 */
function _patchRequest(options, data, protocol) {

}

/**
 *
 *
 * @param {*} options
 * @param {*} data
 * @return {*} 
 */
function _postRequest(options, data, protocol) {

}

/**
 *
 *
 * @param {*} options
 * @param {*} data
 * @return {*} 
 */
function _putRequest(options, data, protocol) {

}

/**
 *
 *
 * @param {*} options
 * @param {*} data
 * @return {*} 
 */
function _request(options, data, protocol) {
    return new Promise((resolve, reject) => {
        const https = (protocol === "https") ? _getRequireOrImport("https") : _getRequireOrImport("http");
        const querystring = _getRequireOrImport('querystring');

        let req = https.request(options, (res) => {
            let result = '';
            res.on('data', (chunk) => result += chunk);
            res.on('end', () => resolve(JSON.parse(result)));
        }).on('error', (err) => reject(err));

        let out_text = querystring.escape(JSON.stringify(data));
        req.write(out_text);
        req.on('connect', (res, socket, head) => { });
        req.on('error', (e) => { console.error(e); });
        req.on('upgrade', (res, socket, upgradeHead) => {
            socket.end();
            process.exit(0);
        });
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
    var givenURL;
    try {
        givenURL = new URL(url);
    } catch (error) {
        return false;
    }
    return givenURL.protocol === "https:";
}

/**
 *
 *
 * @param {*} url
 * @return {*} 
 */
function _getProtocol(url) {
    var givenURL;
    try {
        givenURL = new URL(url);
    } catch (error) {
        return false;
    }
    return givenURL.protocol === "http:" || givenURL.protocol === "https:";
}

// // Avoid 
// function isValidURL(string) {
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
    var givenURL;
    try {
        givenURL = new URL(url);
    } catch (error) {
        return false;
    }
    return true;
}

/**
 *
 *
 * @param {*} options
 * @param {*} data
 * @return {*} 
 */
function _getRequest(options, data, protocol) {
    return new Promise((resolve, reject) => {
        const { get } = (protocol === "https") ? require("https") : require("http");
        return get(options, (res) => {
            let result = '';
            res.on('data', (chunk) => result += chunk);
            res.on('end', () => resolve(JSON.parse(result)));
        }).on('error', (err) => reject(err));
    });
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


function _fetch() {
    return fetch('https://example.com')
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
