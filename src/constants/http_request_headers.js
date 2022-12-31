/**
 * 
 * Package: request-apis
 * Author: Ganesh B
 * Description: 
 * Install: npm i request-apis --save
 * Github: https://github.com/ganeshkbhat/apis-require
 * npmjs Link: https://www.npmjs.com/package/request-apis
 * File: src/.js
 * File Description: 
 * 
*/

/* eslint no-console: 0 */

'use strict';


module.exports.REQUEST_HEADERS = Object.freeze({
    "WWW-AUTHENTICATE": "WWW-Authenticate",
    "AUTHORIZATION": "Authorization",
    "PROXY-AUTHENTICATE": "Proxy-Authenticate",
    "PROXY-AUTHORIZATION": "Proxy-Authorization",

    "AGE": "Age",
    "CACHE-CONTROL": "Cache-Control",
    "CLEAR-SITE-DATA": "Clear-Site-Data",
    "EXPIRES": "Expires",
    "PRAGMA": "Pragma",
    "WARNING": "Warning",

    "ACCEPT-CH": "Accept-CH",
    "ACCEPT-CH-LIFETIME": "Accept-CH-Lifetime",
    "CRITICAL-CH": "Critical-CH",

    "SEC-CH-PREFERS-REDUCED-MOTION": "Sec-CH-Prefers-Reduced-Motion",
    "SEC-CH-UA": "Sec-CH-UA",
    "SEC-CH-UA-ARCH": "Sec-CH-UA-Arch",
    "SEC-CH-UA-BITNESS": "Sec-CH-UA-Bitness",
    "SEC-CH-UA-FULL-VERSION": "Sec-CH-UA-Full-Version",
    "SEC-CH-UA-FULL-VERSION-LIST": "Sec-CH-UA-Full-Version-List",
    "SEC-CH-UA-MOBILE": "Sec-CH-UA-Mobile",
    "SEC-CH-UA-MODEL": "Sec-CH-UA-Model",
    "SEC-CH-UA-PLATFORM": "Sec-CH-UA-Platform",
    "SEC-CH-UA-PLATFORM-VERSION": "Sec-CH-UA-Platform-Version",

    "CONTENT-DPR": "Content-DPR",
    "DEVICE-MEMORY": "Device-Memory",
    "DPR": "DPR",
    "VIEWPORT-WIDTH": "Viewport-Width",
    "WIDTH": "Width",

    "DOWNLINK": "Downlink",
    "ECT": "ECT",
    "RTT": "RTT",
    "SAVE-DATA": "Save-Data",

    "LAST-MODIFIED": "Last-Modified",
    "ETAG": "ETag",
    "IF-MATCH": "If-Match",
    "IF-NONE-MATCH": "If-None-Match",
    "IF-MODIFIED-SINCE": "If-Modified-Since",
    "IF-UNMODIFIED-SINCE": "If-Unmodified-Since",
    "VARY": "Vary",

    "CONNECTION": "Connection",
    "KEEP-ALIVE": "Keep-Alive",

    "ACCEPT": "Accept",
    "ACCEPT-ENCODING": "Accept-Encoding",
    "ACCEPT-LANGUAGE": "Accept-Language",

    "EXCEPT": "Expect",
    "MAX-FORWARDS": "Max-Forwards",

    "COOKIE": "Cookie",
    "SET-COOKIE": "Set-Cookie",

    "ACCESS-CONTROL-ALLOW-ORIGIN": "Access-Control-Allow-Origin",
    "ACCESS-CONTROL-ALLOW-CREDENTIALS": "Access-Control-Allow-Credentials",
    "ACCESS-CONTROL-ALLOW-HEADERS": "Access-Control-Allow-Headers",
    "ACCESS-CONTROL-ALLOW-METHODS": "Access-Control-Allow-Methods",
    "ACCESS-CONTROL-EXPOSE-HEADERS": "Access-Control-Expose-Headers",
    "ACCESS-CONTROL-MAX-AGE": "Access-Control-Max-Age",
    "ACCESS-CONTROL-REQUEST-HEADERS": "Access-Control-Request-Headers",
    "ACCESS-CONTROL-REQUEST-METHOD": "Access-Control-Request-Method",
    "ORIGIN": "Origin",
    "TIMING-ALLOW-ORIGIN": "Timing-Allow-Origin",

    "CONTENT-DISPOSITION": "Content-Disposition",

    "CONTENT-LENGTH": "Content-Length",
    "CONTENT-TYPE": "Content-Type",
    "CONTENT-ENCODING": "Content-Encoding",
    "CONTENT-LANGUAGE": "Content-Language",
    "CONTENT-LOCATION": "Content-Location",

    "FORWARD": "Forwarded",
    "X-FORWARDED-FOR": "X-Forwarded-For",
    "X-FORWARDED-HOST": "X-Forwarded-Host",
    "X-FORWARDED-PROTO": "X-Forwarded-Proto",
    "VIA": "Via",

    "LOCATION": "Location",
    "REFRESH": "Refresh",

    "FROM": "From",
    "HOST": "Host",
    "REFERER": "Referer",
    "REFERRER-POLICY": "Referrer-Policy",
    "USER-AGENT": "User-Agent",

    "ALLOW": "Allow",
    "SERVER": "Server",

    "ACCEPT-RANGES": "Accept-Ranges",
    "RANGE": "Range",
    "IF-RANGE": "If-Range",
    "CONTENT-RANGE": "Content-Range",

    "CROSS-ORIGIN-EMBEDDER-POLICY": "Cross-Origin-Embedder-Policy",
    "CROSS-ORIGIN-OPENER-POLICY": "Cross-Origin-Opener-Policy",
    "CROSS-ORIGIN-RESOURCE-POLICY": "Cross-Origin-Resource-Policy",
    "CONTENT-SECURITY-POLICY": "Content-Security-Policy",
    "CONTENT-SECURITY-POLICY-REPORT-ONLY": "Content-Security-Policy-Report-Only",
    "EXPECT-CT": "Expect-CT",
    "ORIGIN-ISOLATION": "Origin-Isolation",
    "PERMISSIONS-POLICY": "Permissions-Policy",
    "STRICT-TRANSPORT-SECURITY": "Strict-Transport-Security",
    "UPGRADE-INSECURE-REQUESTS": "Upgrade-Insecure-Requests",
    "X-CONTENT-TYPE-OPTIONS": "X-Content-Type-Options",
    "X-DOWNLOAD-OPTIONS": "X-Download-Options",
    "X-FRAME-OPTIONS": "X-Frame-Options",
    "X-PERMITTED-CROSS-DOMAIN-POLICIES": "X-Permitted-Cross-Domain-Policies",
    "X-POWERED-BY": "X-Powered-By",
    "X-XSS-PROTECTION": "X-XSS-Protection",

    "SEC-FETCH-SITE": "Sec-Fetch-Site",
    "SEC-FETCH-MODE": "Sec-Fetch-Mode",
    "SEC-FETCH-USER": "Sec-Fetch-User",
    "SEC-FETCH-DEST": "Sec-Fetch-Dest",
    "SERVICE-WORKER-NAVIGATION-PRELOAD": "Service-Worker-Navigation-Preload",

    "LAST-EVENT-ID": "Last-Event-ID",
    "NEL": "NEL",
    "PING-FROM": "Ping-From",
    "PING-TO": "Ping-To",
    "REPORT-TO": "Report-To",

    "TRANSFER-ENCODING": "Transfer-Encoding",
    "TE": "TE",
    "TRAILER": "Trailer",

    "SEC-WEBSOCKET-KEY": "Sec-WebSocket-Key",
    "SEC-WEBSOCKET-EXTENSIONS": "Sec-WebSocket-Extensions",
    "SEC-WEBSOCKET-ACCEPT": "Sec-WebSocket-Accept",
    "SEC-WEBSOCKET-PROTOCOL": "Sec-WebSocket-Protocol",
    "SEC-WEBSOCKET-VERSION": "Sec-WebSocket-Version",

    "ACCEPT-PUSH-POLICY": "Accept-Push-Policy",
    "ACCEPT-SIGNATURE": "Accept-Signature",
    "ALT-SVC": "Alt-Svc",
    "DATE": "Date",
    "EARLY-DATA": "Early-Data",
    "LARGE-ALLOCATION": "Large-Allocation",
    "LINK": "Link",
    "PUSH-POLICY": "Push-Policy",
    "RETRY-AFTER": "Retry-After",
    "SIGNATURE": "Signature",
    "SIGNED-HEADERS": "Signed-Headers",
    "SERVER-TIMING": "Server-Timing",
    "SERVICE-WORKER-ALLOWED": "Service-Worker-Allowed",
    "SOURCEMAP": "SourceMap",
    "UPGRADE": "Upgrade",
    "X-DNS-PREFETCH-CONTROL": "X-DNS-Prefetch-Control",
    "X-FIREFOX-SPDY": "X-Firefox-Spdy",
    "X-PINGBACK": "X-Pingback",
    "X-REQUESTED-WITH": "X-Requested-With",
    "X-ROBOTS-TAG": "X-Robots-Tag",
    "X-UA-COMPATIBLE": "X-UA-Compatible"
});

module.exports.REQUEST_HEADERS_CATEGORIZED = Object.freeze({
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
    // https://developer.mozilla.org/en-US/docs/Glossary/Request_header
    "AUTHENTICATION": {
        "WWW-AUTHENTICATE": "WWW-Authenticate",
        "AUTHORIZATION": "Authorization",
        "PROXY-AUTHENTICATE": "Proxy-Authenticate",
        "PROXY-AUTHORIZATION": "Proxy-Authorization"
    },
    "CACHING": {
        "AGE": "Age",
        "CACHE-CONTROL": "Cache-Control",
        "CLEAR-SITE-DATA": "Clear-Site-Data",
        "EXPIRES": "Expires",
        "PRAGMA": "Pragma",
        "WARNING": "Warning"
    },
    "CLIENT_HINTS": {
        "ACCEPT-CH": "Accept-CH",
        "ACCEPT-CH-LIFETIME": "Accept-CH-Lifetime",
        "CRITICAL-CH": "Critical-CH"
    },
    "USER_AGENT_CLIENT_HINTS": {
        "SEC-CH-PREFERS-REDUCED-MOTION": "Sec-CH-Prefers-Reduced-Motion",
        "SEC-CH-UA": "Sec-CH-UA",
        "SEC-CH-UA-ARCH": "Sec-CH-UA-Arch",
        "SEC-CH-UA-BITNESS": "Sec-CH-UA-Bitness",
        "SEC-CH-UA-FULL-VERSION": "Sec-CH-UA-Full-Version",
        "SEC-CH-UA-FULL-VERSION-LIST": "Sec-CH-UA-Full-Version-List",
        "SEC-CH-UA-MOBILE": "Sec-CH-UA-Mobile",
        "SEC-CH-UA-MODEL": "Sec-CH-UA-Model",
        "SEC-CH-UA-PLATFORM": "Sec-CH-UA-Platform",
        "SEC-CH-UA-PLATFORM-VERSION": "Sec-CH-UA-Platform-Version"
    },
    "DEVICE_CLIENT_HINTS": {
        "CONTENT-DPR": "Content-DPR",
        "DEVICE-MEMORY": "Device-Memory",
        "DPR": "DPR",
        "VIEWPORT-WIDTH": "Viewport-Width",
        "WIDTH": "Width"
    },
    "NETWORK_CLIENT_HINTS": {
        "DOWNLINK": "Downlink",
        "ECT": "ECT",
        "RTT": "RTT",
        "SAVE-DATA": "Save-Data"
    },
    "CONDITIONALS": {
        "LAST-MODIFIED": "Last-Modified",
        "ETAG": "ETag",
        "IF-MATCH": "If-Match",
        "IF-NONE-MATCH": "If-None-Match",
        "IF-MODIFIED-SINCE": "If-Modified-Since",
        "IF-UNMODIFIED-SINCE": "If-Unmodified-Since",
        "VARY": "Vary"
    },
    "CONNECTION_MANAGEMENT": {
        "CONNECTION": "Connection",
        "KEEP-ALIVE": "Keep-Alive"
    },
    "CONTENT_NEGOTIATION": {
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation
        "ACCEPT": "Accept",
        "ACCEPT-ENCODING": "Accept-Encoding",
        "ACCEPT-LANGUAGE": "Accept-Language",
        "VARY": "Vary",
        "ACCEPT-POST": "Accept-Post",
        "ACCEPT-PATCH": "Accept-Patch",
        "ACCEPT-CH": "Accept-CH",
        "ACCEPT-CH-LIFETIME": "Accept-CH-Lifetime"
    },
    "CONTROLS": {
        "EXCEPT": "Expect",
        "MAX-FORWARDS": "Max-Forwards"
    },
    "COOKIES": {
        "COOKIE": "Cookie",
        "SET-COOKIE": "Set-Cookie"
    },
    "CORS": {
        "ACCESS-CONTROL-ALLOW-ORIGIN": "Access-Control-Allow-Origin",
        "ACCESS-CONTROL-ALLOW-CREDENTIALS": "Access-Control-Allow-Credentials",
        "ACCESS-CONTROL-ALLOW-HEADERS": "Access-Control-Allow-Headers",
        "ACCESS-CONTROL-ALLOW-METHODS": "Access-Control-Allow-Methods",
        "ACCESS-CONTROL-EXPOSE-HEADERS": "Access-Control-Expose-Headers",
        "ACCESS-CONTROL-MAX-AGE": "Access-Control-Max-Age",
        "ACCESS-CONTROL-REQUEST-HEADERS": "Access-Control-Request-Headers",
        "ACCESS-CONTROL-REQUEST-METHOD": "Access-Control-Request-Method",
        "ORIGIN": "Origin",
        "TIMING-ALLOW-ORIGIN": "Timing-Allow-Origin"
    },
    "DOWNLOADS": {
        "CONTENT-DISPOSITION": "Content-Disposition"
    },
    "MESSAGE_BODY_INFORMATION": {
        "CONTENT-LENGTH": "Content-Length",
        "CONTENT-TYPE": "Content-Type",
        "CONTENT-ENCODING": "Content-Encoding",
        "CONTENT-LANGUAGE": "Content-Language",
        "CONTENT-LOCATION": "Content-Location"
    },
    "REPRESENTATIONAL_HEADERS": {
        // https://developer.mozilla.org/en-US/docs/Glossary/Representation_header
        "CONTENT-TYPE": "Content-Type",
        "CONTENT-ENCODING": "Content-Encoding",
        "CONTENT-LANGUAGE": "Content-Language",
        "CONTENT-LOCATION": "Content-Location"
    },
    "PAYLOAD_HEADER": {
        // https://developer.mozilla.org/en-US/docs/Glossary/Payload_header
        "CONTENT-LENGTH": "Content-Length",
        "CONTENT-RANGE": "Content-Range",
        "TRAILER": "Trailer",
        "TRANSFER-ENCODING": "Transfer-Encoding"
    },
    "PROXIES": {
        "FORWARD": "Forwarded",
        "X-FORWARDED-FOR": "X-Forwarded-For",
        "X-FORWARDED-HOST": "X-Forwarded-Host",
        "X-FORWARDED-PROTO": "X-Forwarded-Proto",
        "VIA": "Via"
    },
    "REDIRECTS": {
        "LOCATION": "Location",
        "REFRESH": "Refresh"
    },
    "REQUEST_CONTEXT": {
        "FROM": "From",
        "HOST": "Host",
        "REFERER": "Referer",
        "REFERRER-POLICY": "Referrer-Policy",
        "USER-AGENT": "User-Agent"
    },
    "RESPONSE_CONTEXT": {
        "ALLOW": "Allow",
        "SERVER": "Server"
    },
    "RANGE_REQUESTS": {
        "ACCEPT-RANGES": "Accept-Ranges",
        "RANGE": "Range",
        "IF-RANGE": "If-Range",
        "CONTENT-RANGE": "Content-Range"
    },
    "SECURITY": {
        "CROSS-ORIGIN-EMBEDDER-POLICY": "Cross-Origin-Embedder-Policy",
        "CROSS-ORIGIN-OPENER-POLICY": "Cross-Origin-Opener-Policy",
        "CROSS-ORIGIN-RESOURCE-POLICY": "Cross-Origin-Resource-Policy",
        "CONTENT-SECURITY-POLICY": "Content-Security-Policy",
        "CONTENT-SECURITY-POLICY-REPORT-ONLY": "Content-Security-Policy-Report-Only",
        "EXPECT-CT": "Expect-CT",
        "ORIGIN-ISOLATION": "Origin-Isolation",
        "PERMISSIONS-POLICY": "Permissions-Policy",
        "STRICT-TRANSPORT-SECURITY": "Strict-Transport-Security",
        "UPGRADE-INSECURE-REQUESTS": "Upgrade-Insecure-Requests",
        "X-CONTENT-TYPE-OPTIONS": "X-Content-Type-Options",
        "X-DOWNLOAD-OPTIONS": "X-Download-Options",
        "X-FRAME-OPTIONS": "X-Frame-Options",
        "X-PERMITTED-CROSS-DOMAIN-POLICIES": "X-Permitted-Cross-Domain-Policies",
        "X-POWERED-BY": "X-Powered-By",
        "X-XSS-PROTECTION": "X-XSS-Protection"
    },
    "FETCH_METADATA_REQUEST_HEADERS": {
        "SEC-FETCH-SITE": "Sec-Fetch-Site",
        "SEC-FETCH-MODE": "Sec-Fetch-Mode",
        "SEC-FETCH-USER": "Sec-Fetch-User",
        "SEC-FETCH-DEST": "Sec-Fetch-Dest",
        "SERVICE-WORKER-NAVIGATION-PRELOAD": "Service-Worker-Navigation-Preload"
    },
    "SERVER_SENT_EVENTS": {
        "LAST-EVENT-ID": "Last-Event-ID",
        "NEL": "NEL",
        "PING-FROM": "Ping-From",
        "PING-TO": "Ping-To",
        "REPORT-TO": "Report-To"
    },
    "TRANSFER_CODING": {
        "TRANSFER-ENCODING": "Transfer-Encoding",
        "TE": "TE",
        "TRAILER": "Trailer"
    },
    "WEBSOCKETS": {
        "SEC-WEBSOCKET-KEY": "Sec-WebSocket-Key",
        "SEC-WEBSOCKET-EXTENSIONS": "Sec-WebSocket-Extensions",
        "SEC-WEBSOCKET-ACCEPT": "Sec-WebSocket-Accept",
        "SEC-WEBSOCKET-PROTOCOL": "Sec-WebSocket-Protocol",
        "SEC-WEBSOCKET-VERSION": "Sec-WebSocket-Version"
    },
    "OTHER": {
        "ACCEPT-PUSH-POLICY": "Accept-Push-Policy",
        "ACCEPT-SIGNATURE": "Accept-Signature",
        "ALT-SVC": "Alt-Svc",
        "DATE": "Date",
        "EARLY-DATA": "Early-Data",
        "LARGE-ALLOCATION": "Large-Allocation",
        "LINK": "Link",
        "PUSH-POLICY": "Push-Policy",
        "RETRY-AFTER": "Retry-After",
        "SIGNATURE": "Signature",
        "SIGNED-HEADERS": "Signed-Headers",
        "SERVER-TIMING": "Server-Timing",
        "SERVICE-WORKER-ALLOWED": "Service-Worker-Allowed",
        "SOURCEMAP": "SourceMap",
        "UPGRADE": "Upgrade",
        "X-DNS-PREFETCH-CONTROL": "X-DNS-Prefetch-Control",
        "X-FIREFOX-SPDY": "X-Firefox-Spdy",
        "X-PINGBACK": "X-Pingback",
        "X-REQUESTED-WITH": "X-Requested-With",
        "X-ROBOTS-TAG": "X-Robots-Tag",
        "X-UA-COMPATIBLE": "X-UA-Compatible"
    }
});

module.exports.default = module.exports.REQUEST_HEADERS;


/** 
 * Connection
 * Keep-Alive
 * Proxy-Authenticate
 * Proxy-Authorization
 * TE
 * Trailer
 * Transfer-Encoding
 * Upgrade 
 * 
 * AUTHENTICATION
 * 
 * WWW-Authenticate
 * Authorization
 * Proxy-Authenticate
 * Proxy-Authorization
 * 
 * CACHING
 * 
 * Age
 * Cache-Control
 * Clear-Site-Data
 * Expires
 * Pragma
 * Warning
 * 
 * CLIENT HINTS 
 * 
 * Accept-CH
 * Accept-CH-Lifetime
 * Critical-CH 
 * 
 * USER AGENT CLIENT HINTS
 * 
 * Sec-CH-Prefers-Reduced-Motion
 * Sec-CH-UA
 * Sec-CH-UA-Arch
 * Sec-CH-UA-Bitness
 * Sec-CH-UA-Full-Version
 * Sec-CH-UA-Full-Version-List
 * Sec-CH-UA-Mobile
 * Sec-CH-UA-Model
 * Sec-CH-UA-Platform
 * Sec-CH-UA-Platform-Version
 * 
 * CLIENT HINTS 
 * 
 * Accept-CH
 * Accept-CH-Lifetime
 * Critical-CH 
 * 
 * USER AGENT CLIENT HINTS
 * 
 * Sec-CH-Prefers-Reduced-Motion
 * Sec-CH-UA
 * Sec-CH-UA-Arch
 * Sec-CH-UA-Bitness
 * Sec-CH-UA-Full-Version
 * Sec-CH-UA-Full-Version-List
 * Sec-CH-UA-Mobile
 * Sec-CH-UA-Model
 * Sec-CH-UA-Platform
 * Sec-CH-UA-Platform-Version
 * 
 * DEVICE CLIENT HINTS
 * 
 * Content-DPR
 * Device-Memory
 * DPR
 * Viewport-Width
 * Width 
 * 
 * NETWORK CLIENT HINTS
 * 
 * Downlink
 * ECT
 * RTT
 * Save-Data
 * 
 * CONDITIONALS
 * 
 * Last-Modified
 * ETag
 * If-Match
 * If-None-Match
 * If-Modified-Since
 * If-Unmodified-Since
 * Vary
 * 
 * CONNECTION MANAGEMENT
 * 
 * Connection
 * Keep-Alive
 * 
 * CONTENT NEGOTIATION
 * 
 * Accept
 * Accept-Encoding
 * Accept-Language
 * 
 * CONTROLS
 * 
 * Expect
 * Max-Forwards
 * 
 * COOKIES
 * 
 * Cookie
 * Set-Cookie
 * 
 * CORS
 * 
 * Access-Control-Allow-Origin
 * Access-Control-Allow-Credentials
 * Access-Control-Allow-Headers
 * Access-Control-Allow-Methods
 * Access-Control-Expose-Headers
 * Access-Control-Max-Age
 * Access-Control-Request-Headers
 * Access-Control-Request-Method
 * Origin
 * Timing-Allow-Origin
 * 
 * DOWNLOADS
 * 
 * Content-Disposition
 * MESSAGE BODY INFORMATION
 * Content-Length
 * Content-Type
 * Content-Encoding
 * Content-Language
 * Content-Location
 * 
 * PROXIES
 * 
 * Forwarded
 * X-Forwarded-For
 * X-Forwarded-Host
 * X-Forwarded-Proto
 * Via
 * 
 * REDIRECTS
 * 
 * Location
 * Refresh
 * 
 * REQUEST CONTEXT
 * 
 * From
 * Host
 * Referer
 * Referrer-Policy
 * User-Agent
 * 
 * RESPONSE CONTEXT
 * 
 * Allow
 * Server
 * 
 * RANGE REQUESTS 
 * 
 * Accept-Ranges
 * Range
 * If-Range
 * Content-Range
 * 
 * SECURITY
 * 
 * Cross-Origin-Embedder-Policy (COEP)
 * Cross-Origin-Opener-Policy (COOP)
 * Cross-Origin-Resource-Policy (CORP)
 * Content-Security-Policy (CSP)
 * Content-Security-Policy-Report-Only
 * Expect-CT
 * Origin-Isolation
 * Permissions-Policy
 * Strict-Transport-Security (HSTS)
 * Upgrade-Insecure-Requests
 * X-Content-Type-Options
 * X-Download-Options
 * X-Frame-Options (XFO)
 * X-Permitted-Cross-Domain-Policies
 * X-Powered-By
 * X-XSS-Protection
 * 
 * FETCH METADATA REQUEST HEADERS
 * 
 * Sec-Fetch-Site
 * Sec-Fetch-Mode
 * Sec-Fetch-User
 * Sec-Fetch-Dest
 * Service-Worker-Navigation-Preload
 * 
 * SERVER SENT EVENTS
 * 
 * Last-Event-ID
 * NEL
 * Ping-From
 * Ping-To
 * Report-To
 * 
 * TRANSFER CODING
 * 
 * Transfer-Encoding
 * TE
 * Trailer
 * 
 * WEBSOCKETS
 * 
 * Sec-WebSocket-Key
 * Sec-WebSocket-Extensions
 * Sec-WebSocket-Accept
 * Sec-WebSocket-Protocol
 * Sec-WebSocket-Version
 * 
 * OTHER
 * 
 * Accept-Push-Policy
 * Accept-Signature
 * Alt-Svc
 * Date
 * Early-Data
 * Large-Allocation
 * Link
 * Push-Policy
 * Retry-After
 * Signature
 * Signed-Headers
 * Server-Timing
 * Service-Worker-Allowed
 * SourceMap
 * Upgrade
 * X-DNS-Prefetch-Control
 * X-Firefox-Spdy
 * X-Pingback
 * X-Requested-With
 * X-Robots-Tag
 * X-UA-Compatible
 * 
 */
