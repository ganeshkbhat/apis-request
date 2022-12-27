
const request = require("../index.js");
// console.log(request._getRequest("https://api.github.com/repos/ganeshkbhat/cgi-js"));
console.log(fetch("https://api.github.com/repos/cgi-js/cgi-js/").then(async (data) => { console.log(await data.json()) }));
