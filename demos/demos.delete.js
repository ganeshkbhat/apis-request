
const req = require("../index.js");


let data = "";

let r = req._deleteRequest({ hostname: "petstore.swagger.io", port: 443, path: "/v2/pet/9223372036854244000", method: "DELETE", headers: { "content-type": "application/json", "accept": "application/json" } }, data, "https");
r.then(rs => console.log(JSON.stringify(rs)))

let rc = req._deleteRequest({ hostname: "petstore.swagger.io", port: 443, path: "/v2/pet/9223372036854776000", method: "DELETE", headers: { "content-type": "application/json", "accept": "application/json" } }, data, "https");
rc.then(rs => console.log(JSON.stringify(rs)))


let rxml = req._deleteRequest({ hostname: "petstore.swagger.io", port: 443, path: "/v2/pet/9223372036854244000", method: "DELETE", headers: { "content-type": "application/xml", "accept": "application/xml" } }, data, "https");
r.then(rs => console.log(JSON.stringify(rs)))

let rcxml = req._deleteRequest({ hostname: "petstore.swagger.io", port: 443, path: "/v2/pet/9223372036854776000", method: "DELETE", headers: { "content-type": "application/xml", "accept": "application/xml" } }, data, "https");
rc.then(rs => console.log(JSON.stringify(rs)))

