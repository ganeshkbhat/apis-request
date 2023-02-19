/**
 * 
 * Package: 
 * Author: Ganesh B
 * Description: 
 * Install: npm i request-apis --save
 * Github: https://github.com/ganeshkbhat/apis-request
 * npmjs Link: https://www.npmjs.com/package/request-apis
 * File: test-.js
 * Test for File: demos.put.js
 * File Description: 
 * 
*/

'use strict';

// https://petstore.swagger.io/
// https://petstore.swagger.io/v2/pet


const req = require("../index.js");

describe('test-.mjs::request-apis: Test Suite for request-apis Files', function () {
	describe('test-.js::request-apis: [Test A] Test Suite for request-apis in main repo directory', function () {
		it('[Test A] Test for PUT request for request-apis with application/json - 1', function (done) {

			let data = {
				"id": 0,
				"category": {
					"id": 0,
					"name": "string"
				},
				"name": "doggie",
				"photoUrls": [
					"string"
				],
				"tags": [
					{
						"id": 0,
						"name": "string"
					}
				],
				"status": "available"
			}

			let r = req._putRequest({ hostname: "petstore.swagger.io", port: 443, path: "/v2/pet", method: "PUT", headers: { "content-type": "application/json", "accept": "application/json" } }, data, "https");
			r.then(rs => {
				expect(100).to.equal(100);
				done();
			});
		});

		it('[Test A] Test for PUT request for request-apis with application/json - 2', function (done) {
			let data = {
				"id": 0,
				"category": {
					"id": 0,
					"name": "string"
				},
				"name": "doggie",
				"photoUrls": [
					"string"
				],
				"tags": [
					{
						"id": 0,
						"name": "string"
					}
				],
				"status": "available"
			}

			data.name = "newstore";

			let rc = req._putRequest({ hostname: "petstore.swagger.io", port: 443, path: "/v2/pet", method: "PUT", headers: { "content-type": "application/json", "accept": "application/json" } }, data, "https");
			rc.then(rs => {
				expect(100).to.equal(100);
				done();
			});
		});

		it('[Test A] Test for PUT request for request-apis with application/xml - 3', function (done) {
			let dataXML = `<?xml version="1.0" encoding="UTF-8"?>
<Pet>
	<id>0</id>
	<Category>
		<id>0</id>
		<name>string</name>
	</Category>
	<name>doggie</name>
	<photoUrls>
		<photoUrl>string</photoUrl>
	</photoUrls>
	<tags>
		<Tag>
			<id>0</id>
			<name>string</name>
		</Tag>
	</tags>
	<status>available</status>
</Pet>`

			let rxml = req._putRequest({ hostname: "petstore.swagger.io", port: 443, path: "/v2/pet", method: "PUT", headers: { "content-type": "application/xml", "accept": "application/xml" } }, dataXML, "https");
			rxml.then(rs => {
				expect(100).to.equal(100);
				done();
			})

		});

		it('[Test A] Test for PUT request for request-apis with application/xml - 4', function (done) {
			let dataXML = `<?xml version="1.0" encoding="UTF-8"?>
<Pet>
	<id>0</id>
	<Category>
		<id>0</id>
		<name>string</name>
	</Category>
	<name>doggie</name>
	<photoUrls>
		<photoUrl>string</photoUrl>
	</photoUrls>
	<tags>
		<Tag>
			<id>0</id>
			<name>string</name>
		</Tag>
	</tags>
	<status>available</status>
</Pet>`


			let rcxml = req._putRequest({ hostname: "petstore.swagger.io", port: 443, path: "/v2/pet", method: "PUT", headers: { "content-type": "application/xml", "accept": "application/xml" } }, dataXML, "https");
			rcxml.then(rs => {
				expect(100).to.equal(100);
				done();
			})

		});
	});
});
