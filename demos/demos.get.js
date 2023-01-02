
// https://petstore.swagger.io/
// https://petstore.swagger.io/v2/pet


const req = require("../index.js");

let data = "";

let r = req._getRequest({ hostname: "petstore.swagger.io", port: 443, path: "/v2/pet/9222968140497182000", method: "GET", headers: { "content-type": "application/json", "accept": "application/json"} }, data, "https");
r.then(rs => console.log(JSON.stringify(rs), rs.toString()))

let rc = req._getRequest({ hostname: "petstore.swagger.io", port: 443, path: "/v2/pet/9223372036854244000", method: "GET", headers: { "content-type": "application/json", "accept": "application/json" } }, data, "https");
rc.then(rs => console.log(JSON.stringify(rs), rs.toString()))


let rxml = req._getRequest({ hostname: "petstore.swagger.io", port: 443, path: "/v2/pet/9222968140497182000", method: "GET", headers: { "content-type": "application/xml", "accept": "application/xml"} }, data, "https");
rxml.then(rs => console.log(JSON.stringify(rs)))

let rcxml = req._getRequest({ hostname: "petstore.swagger.io", port: 443, path: "/v2/pet/9223372036854244000", method: "GET", headers: { "content-type": "application/xml", "accept": "application/xml" } }, data, "https");
rcxml.then(rs => console.log(JSON.stringify(rs)))

