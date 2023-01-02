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

// https://petstore.swagger.io/
// https://petstore.swagger.io/v2/pet


const req = require("../index.js");

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

let r = req._putRequest({ hostname: "petstore.swagger.io", port: 443, path: "/v2/pet", method: "PUT", headers: { "content-type": "application/json", "accept": "application/json"} }, data, "https");
r.then(rs => console.log(JSON.stringify(rs)))

data.name = "newstore";

let rc = req._putRequest({ hostname: "petstore.swagger.io", port: 443, path: "/v2/pet", method: "PUT", headers: { "content-type": "application/json", "accept": "application/json" } }, data, "https");
rc.then(rs => console.log(JSON.stringify(rs)))


let dataXML= `<?xml version="1.0" encoding="UTF-8"?>
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


let rxml = req._putRequest({ hostname: "petstore.swagger.io", port: 443, path: "/v2/pet", method: "PUT", headers: { "content-type": "application/xml", "accept": "application/xml"} }, dataXML, "https");
rxml.then(rs => console.log(JSON.stringify(rs)))


dataXML = `<?xml version="1.0" encoding="UTF-8"?>
<Pet>
	<id>0</id>
	<Category>
		<id>0</id>
		<name>string</name>
	</Category>
	<name>newstore</name>
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
rcxml.then(rs => console.log(JSON.stringify(rs)))
