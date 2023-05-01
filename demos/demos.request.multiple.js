
const makeRequest = require("../src/requests").makeRequest;
const { runInPromises, runInThreads, fetchMultiple, postRequest } = require("../src/requests.multiple")


async function requestMultiple() {
    const requests = [
        { url: 'https://www.google.com', data: { foo: 'bar' }, method: 'PUT' },
        { url: 'https://www.google.com/search?q=javascript', data: { baz: 'qux' }, method: 'DELETE' },
    ];

    const responses = await runInPromises(requests, makeRequest);
    return responses
}

requestMultiple()

//
// function requestMultipleThreads() {
//     const urls = ['https://www.google.com', 'https://www.google.com/search?q=javascript', 'https://www.google.com/search?q=web+workers'];
//     return fetchMultiple(urls)
//         .then((results) => {
//             console.log(results);
//         })
//         .catch((error) => {
//             console.error(error);
//         });
// }
// requestMultipleThreads()
//
