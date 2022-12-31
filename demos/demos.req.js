
const path = require("path");
const querystring = require('querystring');
const http = require('http');
const https = require('https');
const fs = require('fs');


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


function httpsPost(options, postData, httpType = "http") {
    // https://nodejs.org/dist/latest-v18.x/docs/api/https.html

    return new Promise((resolve, reject) => {
        var netHttp = (httpType == "http") ? require("http") : require("https");
        options.agent = new netHttp.Agent(options) || false;
        const req = netHttp.request({
            method: 'POST',
            ...options,
        }, res => {
            const chunks = [];

            // res.setEncoding('utf8');
            res.on('data', data => chunks.push(data))

            res.on('end', () => {
                let resBody = Buffer.concat(chunks);
                switch (res.headers['content-type']) {
                    case 'application/json':
                        resBody = JSON.parse(resBody);
                        break;
                    case 'application/xml':
                        const XML = require("fast-xml-parser");
                        resBody = XML.parse(resBody);
                        break;
                    case 'text/html':
                        resBody = resBody.toString();
                        break;
                    case 'text/plain':
                        resBody = resBody.toString();
                        break;
                }
                resolve(resBody);
            })
        });

        req.on('error', reject);

        if (!!postData) {
            req.write(postData);
        }

        req.end();
    })
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


// const http2 = require('node:http2');
// const fs = require('node:fs');
// const client = http2.connect('https://localhost:8443', {
//   ca: fs.readFileSync('localhost-cert.pem')
// });
// client.on('error', (err) => console.error(err));

// const req = client.request({ ':path': '/' });

// req.on('response', (headers, flags) => {
//   for (const name in headers) {
//     console.log(`${name}: ${headers[name]}`);
//   }
// });

// req.setEncoding('utf8');
// let data = '';
// req.on('data', (chunk) => { data += chunk; });
// req.on('end', () => {
//   console.log(`\n${data}`);
//   client.close();
// });
// req.end();
