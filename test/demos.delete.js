/**
 * 
 * Package: 
 * Author: Ganesh B
 * Description: 
 * Install: npm i request-apis --save
 * Github: https://github.com/ganeshkbhat/apis-request
 * npmjs Link: https://www.npmjs.com/package/request-apis
 * File: test-.js
 * Test for File: demos.delete.js
 * File Description: 
 * 
*/

'use strict';

const req = require("../index.js");


const expect = require('chai').expect;

describe('test-.mjs::request-apis: Test Suite for request-apis Files', function () {
    describe('test-.js::request-apis: [Test A] Test Suite for request-apis in main repo directory', function () {

        it('[Test A] Test for delete using application/json content type for response - 1', function (done) {
            let data = "";
            let r = req._deleteRequest({ hostname: "petstore.swagger.io", port: 443, path: "/v2/pet/9223372036854244000", method: "DELETE", headers: { "content-type": "application/json", "accept": "application/json" } }, data, "https");
            r.then(rs => {
                rs = JSON.parse(JSON.stringify(rs));
                expect(!!rs.headers).to.equal(true);
                expect(!!rs.body).to.equal(true);
                // expect(!!rs.headers["content-type"]).to.equal(true);
                // expect(rs.headers["content-type"]).to.equal("application/json");
                // expect(rs.headers["transfer-encoding"]).to.equal("chunked");
                // expect(rs.headers["connection"]).to.equal("close");
                // expect(rs.headers["access-control-allow-origin"]).to.equal("*");
                // expect(rs.headers["access-control-allow-methods"]).to.equal("GET, POST, DELETE, PUT");
                // expect(rs.headers["access-control-allow-headers"]).to.equal("Content-Type, api_key, Authorization");
                // expect(rs.body.code).to.equal(404);
                // expect(rs.body.type).to.equal("unknown");
                done();
            });
        });

        it('[Test A] Test for delete using application/json content type for response - 2', function (done) {
            let data = "";
            let rc = req._deleteRequest({ hostname: "petstore.swagger.io", port: 443, path: "/v2/pet/9223372036854776000", method: "DELETE", headers: { "content-type": "application/json", "accept": "application/json" } }, data, "https");
            rc.then(rs => {
                rs = JSON.parse(JSON.stringify(rs));
                expect(!!rs.headers).to.equal(true);
                expect(!!rs.body).to.equal(true);
                // expect(!!rs.headers["content-type"]).to.equal(true);
                // expect(rs.headers["content-type"]).to.equal("application/json");
                // expect(rs.headers["transfer-encoding"]).to.equal("chunked");
                // expect(rs.headers["connection"]).to.equal("close");
                // expect(rs.headers["access-control-allow-origin"]).to.equal("*");
                // expect(rs.headers["access-control-allow-methods"]).to.equal("GET, POST, DELETE, PUT");
                // expect(rs.headers["access-control-allow-headers"]).to.equal("Content-Type, api_key, Authorization");
                // expect(rs.body.code).to.equal(404);
                // expect(rs.body.type).to.equal("unknown");
                done();
            });
        });

        it('[Test A] Test for delete using application/xml content type for response - 3', function (done) {
            let data = "";
            let rxml = req._deleteRequest({ hostname: "petstore.swagger.io", port: 443, path: "/v2/pet/9223372036854244000", method: "DELETE", headers: { "content-type": "application/xml", "accept": "application/xml" } }, data, "https");
            rxml.then(rs => {
                rs = JSON.parse(JSON.stringify(rs));
                expect(!!rs.headers).to.equal(true);
                expect(!!rs.body).to.equal(true);
                // expect(!!rs.headers["content-type"]).to.equal(true);
                // expect(rs.headers["content-type"]).to.equal("application/json");
                // expect(rs.headers["transfer-encoding"]).to.equal("chunked");
                // expect(rs.headers["connection"]).to.equal("close");
                // expect(rs.headers["access-control-allow-origin"]).to.equal("*");
                // expect(rs.headers["access-control-allow-methods"]).to.equal("GET, POST, DELETE, PUT");
                // expect(rs.headers["access-control-allow-headers"]).to.equal("Content-Type, api_key, Authorization");
                // expect(rs.body.data.length).to.equal(0);
                // expect(!!rs.body.data).to.equal(false);
                // expect(rs.body.type).to.equal("Buffer");
                done();
            });
        });

        it('[Test A] Test for delete using application/xml content type for response - 4', function (done) {
            let data = "";
            let rcxml = req._deleteRequest({ hostname: "petstore.swagger.io", port: 443, path: "/v2/pet/9223372036854776000", method: "DELETE", headers: { "content-type": "application/xml", "accept": "application/xml" } }, data, "https");
            rcxml.then(rs => {
                rs = JSON.parse(JSON.stringify(rs));
                expect(!!rs.headers).to.equal(true);
                expect(!!rs.body).to.equal(true);
                // expect(!!rs.headers["content-type"]).to.equal(true);
                // expect(rs.headers["content-type"]).to.equal("application/json");
                // expect(rs.headers["transfer-encoding"]).to.equal("chunked");
                // expect(rs.headers["connection"]).to.equal("close");
                // expect(rs.headers["access-control-allow-origin"]).to.equal("*");
                // expect(rs.headers["access-control-allow-methods"]).to.equal("GET, POST, DELETE, PUT");
                // expect(rs.headers["access-control-allow-headers"]).to.equal("Content-Type, api_key, Authorization");
                // expect(rs.body.data.length).to.equal(0);
                // expect(!!rs.body.data).to.equal(false);
                // expect(rs.body.type).to.equal("Buffer");
                done();
            });
        });

    });
});

