/**
 * 
 * Package: 
 * Author: Ganesh B
 * Description: 
 * Install: npm i request-apis --save
 * Github: https://github.com/ganeshkbhat/apis-request
 * npmjs Link: https://www.npmjs.com/package/request-apis
 * File: test-.js
 * Test for File: index.js
 * File Description: 
 * 
*/

'use strict';

const req = require("../index.js");


const expect = require('chai').expect;

describe('test-.mjs::request-apis: Test Suite for request-apis Files', function () {
    describe('test-.js::request-apis: [Test A] Test Suite for request-apis in main repo directory', function () {
        it('[Test A] Test for ', function (done) {

            let data = "";

            let r = req._deleteRequest({ hostname: "petstore.swagger.io", port: 443, path: "/v2/pet/9223372036854244000", method: "DELETE", headers: { "content-type": "application/json", "accept": "application/json" } }, data, "https");
            r.then(rs => console.log(JSON.stringify(rs)));
            expect(100).to.equal(100);

            let rc = req._deleteRequest({ hostname: "petstore.swagger.io", port: 443, path: "/v2/pet/9223372036854776000", method: "DELETE", headers: { "content-type": "application/json", "accept": "application/json" } }, data, "https");
            rc.then(rs => console.log(JSON.stringify(rs)));
            expect(100).to.equal(100);


            let rxml = req._deleteRequest({ hostname: "petstore.swagger.io", port: 443, path: "/v2/pet/9223372036854244000", method: "DELETE", headers: { "content-type": "application/xml", "accept": "application/xml" } }, data, "https");
            r.then(rs => console.log(JSON.stringify(rs)));
            expect(100).to.equal(100);

            let rcxml = req._deleteRequest({ hostname: "petstore.swagger.io", port: 443, path: "/v2/pet/9223372036854776000", method: "DELETE", headers: { "content-type": "application/xml", "accept": "application/xml" } }, data, "https");
            rc.then(rs => console.log(JSON.stringify(rs)));
            expect(100).to.equal(100);
            
            done();
        });
    });
});

