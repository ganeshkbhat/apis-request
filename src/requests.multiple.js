


const http = require('http');
const https = require('https');
const makeRequest = require("./requests").makeRequest;


async function fetchUrl(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
    }
    return response.text();
};


function postRequest(url, data, options = {}) {
    const { headers = {}, ...restOptions } = options;
    const requestData = JSON.stringify(data);

    const requestOptions = {
        ...restOptions,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(requestData),
            ...headers,
        },
    };

    return new Promise((resolve, reject) => {
        const req = https.request(url, requestOptions, (res) => {
            const chunks = [];
            res.on('data', (chunk) => chunks.push(chunk));
            res.on('end', () => {
                const responseBody = Buffer.concat(chunks).toString();
                resolve({ statusCode: res.statusCode, body: responseBody });
            });
        });

        req.on('error', (error) => {
            reject(error);
        });

        req.write(requestData);
        req.end();
    });
}


async function fetchMultiple(urls) {
    const results = await runInThreads(fetchUrl, urls.map((url) => [url]));

    const errors = results.errors.filter((error) => error);
    if (errors.length > 0) {
        throw new Error(`Failed to fetch ${errors.length} URLs`);
    }

    return results.results;
}


// Async Simple Promise based function
async function runInPromises(requests, makeRequestFn) {
    const responses = [];
    for (const request of requests) {
        const { url, data, method = 'POST' } = request;
        const response = await makeRequestFn(url, data, method);
        responses.push(response);
    }
    return responses;
}


function runInThreads(func, argsArray) {
    const { Worker } = require("worker_threads");
    const promises = [];

    for (let i = 0; i < argsArray.length; i++) {
        const worker = new Worker('worker.js');

        const promise = new Promise((resolve) => {
            worker.onmessage = (event) => {
                resolve({ result: event.data, index: i });
                worker.terminate();
            };
        });

        worker.onerror = (error) => {
            resolve({ error, index: i });
            worker.terminate();
        };

        worker.postMessage({ func, args: argsArray[i], index: i });
        promises.push(promise);
    }

    return Promise.all(promises).then((results) => {
        const output = { results: [], errors: [] };
        results.forEach((result) => {
            if (result.error) {
                output.errors[result.index] = result.error;
            } else {
                output.results[result.index] = result.result;
            }
        });
        return output;
    });
}


module.exports.fetchMultiple = fetchMultiple;
module.exports.postRequest = postRequest;
module.exports.makeRequest = makeRequest;
module.exports.runInPromises = runInPromises;
module.exports.runInThreads = runInThreads;

