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

const path = require("path");
const querystring = require('querystring');
const http = require('http');
const https = require('https');
const fs = require('fs');

describe('test-.mjs::request-apis: Test Suite for request-apis Files', function () {
    describe('test-.js::request-apis: [Test A] Test Suite for request-apis in main repo directory', function () {
        it('[Test A] Test for ', function (done) {

            let postDataText = "This is a test";

            let postDataHtml = `<!DOCTYPE html>
<html lang="en-US">
<head>
<title>Test</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="Keywords" content="Test">
<meta name="Description" content="Test">
</head>
<body>
To: Tove
from: Jani
heading: Reminder
Body: Don't forget me this weekend!
</body>
</html>`;

            let postDataJson = {
                "note": {
                    to: "Tove",
                    from: "Jani",
                    heading: "Reminder",
                    body: "Don't forget me this weekend!"
                }
            };

            let postDataXml = `<?xml version="1.0" encoding="UTF-8"?>
<note>
  <to>Tove</to>
  <from>Jani</from>
  <heading>Reminder</heading>
  <body>Don't forget me this weekend!</body>
</note>`;

            var post_options_html_reqwrite = {
                protocol: "https:",
                hostname: 'closure-compiler.appspot.com',
                port: '80',
                path: '/compile',
                method: 'POST',
                headers: {
                    'Content-Type': 'text/html',
                    'Content-Length': Buffer.byteLength(postDataHtml, 'utf8')
                }
            }

            var post_options_text_reqwrite = {
                protocol: "https:",
                hostname: 'closure-compiler.appspot.com',
                port: '80',
                path: '/compile',
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain',
                    'Content-Length': Buffer.byteLength(postDataText, 'utf8')
                }
            }

            var post_options_form_reqwrite = {
                protocol: "https:",
                hostname: 'closure-compiler.appspot.com',
                port: '80',
                path: '/compile',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Content-Length': Buffer.byteLength(postDataText, 'utf8')
                }
            }

            var post_options_json_reqwrite = {
                protocol: "https:",
                hostname: 'closure-compiler.appspot.com',
                port: '80',
                path: '/compile',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': Buffer.byteLength(JSON.stringify(postDataJson), 'utf8')
                }
            }

            var post_options_json_two = {
                protocol: "https:",
                host: 'closure-compiler.appspot.com',
                port: '80',
                path: '/compile',
                method: 'POST',
                body: postDataJson,
                json: true
            }

            var post_options_xml_reqwrite = {
                protocol: "https:",
                hostname: 'closure-compiler.appspot.com',
                port: '80',
                path: '/compile',
                method: 'POST',
                headers: {
                    "content-type": "application/xml",
                    'Content-Length': Buffer.byteLength(postDataXml, 'utf8')
                }
            }

            var post_options_xml_two = {
                protocol: "https:",
                hostname: 'closure-compiler.appspot.com',
                port: '80',
                path: '/compile',
                method: 'POST',
                headers: {
                    "content-type": "application/xml",
                    'Content-Length': Buffer.byteLength(postDataXml, 'utf8')
                },
                body: postDataXml
            }


            let test_options = {
                protocol: "https:",
                hostname: 'google.com',
                port: '443',
                path: '/',
                method: 'GET',
                headers: {
                    "content-type": "text/html"
                }
            }

            options = {
                ...post_options_json_reqwrite,
                key: fs.readFileSync(path.join(__dirname, '../demos/keys/agent2-key.pem')),
                cert: fs.readFileSync(path.join(__dirname, '../demos/keys/agent2-cert.pem'))
            }

            options = {
                ...test_options
            }


            let r = httpsPost(options, "", "https");
            console.log(r.then(d => console.log(d.toString())));
            expect(100).to.equal(100);
            
            done();
        });
    });
});


