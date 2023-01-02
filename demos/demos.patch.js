

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

let r = req._patchRequest({ hostname: "petstore.swagger.io", port: 443, path: "/v2/pet/idhere", method: "PATCH", headers: { "content-type": "application/json", "accept": "application/json" } }, data, "https");
r.then(rs => console.log(JSON.stringify(rs), rs.toString()))

data.name = "newstore";

let rc = req._patchRequest({ hostname: "petstore.swagger.io", port: 443, path: "/v2/pet/idhere", method: "PATCH", headers: { "content-type": "application/json", "accept": "application/json" } }, data, "https");
rc.then(rs => console.log(JSON.stringify(rs), rs.toString()))

let dataXML = `<?xml version="1.0" encoding="UTF-8"?>
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

let rxml = req._patchRequest({ hostname: "petstore.swagger.io", port: 443, path: "/v2/pet/idhere", method: "PATCH", headers: { "content-type": "application/xml", "accept": "application/xml" } }, dataXML, "https");
rxml.then(rs => console.log(JSON.stringify(rs), rs.toString()))

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

let rcxml = req._patchRequest({ hostname: "petstore.swagger.io", port: 443, path: "/v2/pet/idhere", method: "PATCH", headers: { "content-type": "application/xml", "accept": "application/xml" } }, dataXML, "https");
rcxml.then(rs => console.log(JSON.stringify(rs), rs.toString()))
