/**
 * 
 * Package: 
 * Author: Ganesh B
 * Description: 
 * Install: npm i request-apis --save
 * Github: https://github.com/ganeshkbhat/apis-request
 * npmjs Link: https://www.npmjs.com/package/request-apis
 * File: test-.js
 * Test for File: demos.get.js
 * File Description: 
 * 
*/

'use strict';

// https://petstore.swagger.io/
// https://petstore.swagger.io/v2/pet


const req = require("../index.js");

describe('test-.mjs::request-apis: Test Suite for request-apis Files', function () {

    it('[Test A] Test for GET request with application/json - 1', function (done) {
        let data = "";
        let rs = req._getRequest({ hostname: "petstore.swagger.io", port: 443, path: "/v2/pet/9222968140497182000", method: "GET", headers: { "content-type": "application/json", "accept": "application/json" } }, data, "https")
            .then(function (rs) {
                console.log(typeof rs);
                let contenttype = rs.headers["content-type"] === "application/json";
                let h = Object.assign({}, rs.headers);
                let b = Object.assign({}, rs.body);

                expect(!!h).to.equal(true);
                expect(!!b).to.equal(true);
                expect(b["content-type"]).to.eql("application/json");

                // expect(rs.headers["connection"]).to.equal("close");
                // expect(rs.headers["access-control-allow-origin"]).to.equal("*");
                // expect(rs.headers["access-control-allow-methods"]).to.equal("GET, POST, DELETE, PUT");
                // expect(rs.headers["access-control-allow-headers"]).to.equal("Content-Type, api_key, Authorization");
                done();
            });
    });

    // it('[Test A] Test for GET request with application/json - 2', function (done) {
    //     let data = "";
    //     let rc = req._getRequest({ hostname: "petstore.swagger.io", port: 443, path: "/v2/pet/9223372036854244000", method: "GET", headers: { "content-type": "application/json", "accept": "application/json" } }, data, "https");
    //     rc.then(function (rs) {
    //         expect(100).to.equal(100);
    //         expect(100).to.equal(100);
    //         expect(100).to.equal(100);
    //         expect(100).to.equal(100);
    //         done();
    //     });
    // });

    // it('[Test A] Test for GET request with application/xml - 3', function (done) {
    //     let data = "";
    //     let rxml = req._getRequest({ hostname: "petstore.swagger.io", port: 443, path: "/v2/pet/9222968140497182000", method: "GET", headers: { "content-type": "application/xml", "accept": "application/xml" } }, data, "https");
    //     rxml.then(function (rs) {
    //         expect(100).to.equal(100);
    //         expect(100).to.equal(100);
    //         expect(100).to.equal(100);
    //         expect(100).to.equal(100);
    //         done();
    //     });
    // });

    // it('[Test A] Test for GET request with application/xml - 4', function (done) {
    //     let data = "";
    //     let rcxml = req._getRequest({ hostname: "petstore.swagger.io", port: 443, path: "/v2/pet/9223372036854244000", method: "GET", headers: { "content-type": "application/xml", "accept": "application/xml" } }, data, "https");
    //     rcxml.then(function (rs) {
    //         expect(100).to.equal(100);
    //         expect(100).to.equal(100);
    //         expect(100).to.equal(100);
    //         expect(100).to.equal(100);
    //         done();
    //     });
    // });

});
