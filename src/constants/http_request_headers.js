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
    "WWW_AUTHENTICATE": "WWW-Authenticate",
    "AUTHORIZATION": "Authorization",
    "PROXY_AUTHENTICATE": "Proxy-Authenticate",
    "PROXY_AUTHORIZATION": "Proxy-Authorization",

    "AGE": "Age",
    "CACHE_CONTROL": "Cache-Control",
    "CLEAR_SITE_DATA": "Clear-Site-Data",
    "EXPIRES": "Expires",
    "PRAGMA": "Pragma",
    "WARNING": "Warning",

    "ACCEPT_CH": "Accept-CH",
    "ACCEPT_CH_LIFETIME": "Accept-CH-Lifetime",
    "CRITICAL_CH": "Critical-CH",

    "SEC_CH_PREFERS_REDUCED_MOTION": "Sec-CH-Prefers-Reduced-Motion",
    "SEC_CH_UA": "Sec-CH-UA",
    "SEC_CH_UA_ARCH": "Sec-CH-UA-Arch",
    "SEC_CH_UA_BITNESS": "Sec-CH-UA-Bitness",
    "SEC_CH_UA_FULL_VERSION": "Sec-CH-UA-Full-Version",
    "SEC_CH_UA_FULL_VERSION_LIST": "Sec-CH-UA-Full-Version-List",
    "SEC_CH_UA_MOBILE": "Sec-CH-UA-Mobile",
    "SEC_CH_UA_MODEL": "Sec-CH-UA-Model",
    "SEC_CH_UA_PLATFORM": "Sec-CH-UA-Platform",
    "SEC_CH_UA_PLATFORM_VERSION": "Sec-CH-UA-Platform-Version",

    "CONTENT_DPR": "Content-DPR",
    "DEVICE_MEMORY": "Device-Memory",
    "DPR": "DPR",
    "VIEWPORT_WIDTH": "Viewport-Width",
    "WIDTH": "Width",

    "DOWNLINK": "Downlink",
    "ECT": "ECT",
    "RTT": "RTT",
    "SAVE_DATA": "Save-Data",

    "LAST_MODIFIED": "Last-Modified",
    "ETAG": "ETag",
    "IF_MATCH": "If-Match",
    "IF_NONE_MATCH": "If-None_Match",
    "IF_MODIFIED_SINCE": "If-Modified-Since",
    "IF_UNMODIFIED_SINCE": "If-Unmodified-Since",
    "VARY": "Vary",

    "CONNECTION": "Connection",
    "KEEP_ALIVE": "Keep-Alive",

    "ACCEPT": "Accept",
    "ACCEPT_ENCODING": "Accept-Encoding",
    "ACCEPT_LANGUAGE": "Accept-Language",

    "EXCEPT": "Expect",
    "MAX_FORWARDS": "Max-Forwards",

    "COOKIE": "Cookie",
    "SET_COOKIE": "Set-Cookie",

    "ACCESS_CONTROL_ALLOW_ORIGIN": "Access-Control-Allow-Origin",
    "ACCESS_CONTROL_ALLOW_CREDENTIALS": "Access-Control-Allow-Credentials",
    "ACCESS_CONTROL_ALLOW_HEADERS": "Access-Control-Allow-Headers",
    "ACCESS_CONTROL_ALLOW_METHODS": "Access-Control-Allow-Methods",
    "ACCESS_CONTROL_EXPOSE_HEADERS": "Access-Control-Expose-Headers",
    "ACCESS_CONTROL_MAX_AGE": "Access-Control-Max-Age",
    "ACCESS_CONTROL_REQUEST_HEADERS": "Access-Control-Request-Headers",
    "ACCESS_CONTROL_REQUEST_METHOD": "Access-Control-Request-Method",
    "ORIGIN": "Origin",
    "TIMING_ALLOW_ORIGIN": "Timing-Allow-Origin",

    "CONTENT_DISPOSITION": "Content-Disposition",

    "CONTENT_LENGTH": "Content-Length",
    "CONTENT_TYPE": "Content-Type",
    "CONTENT_ENCODING": "Content-Encoding",
    "CONTENT_LANGUAGE": "Content-Language",
    "CONTENT_LOCATION": "Content-Location",

    "FORWARD": "Forwarded",
    "X_FORWARDED_FOR": "X-Forwarded-For",
    "X_FORWARDED_HOST": "X-Forwarded-Host",
    "X_FORWARDED_PROTO": "X-Forwarded-Proto",
    "VIA": "Via",

    "LOCATION": "Location",
    "REFRESH": "Refresh",

    "FROM": "From",
    "HOST": "Host",
    "REFERER": "Referer",
    "REFERRER_POLICY": "Referrer-Policy",
    "USER_AGENT": "User-Agent",

    "ALLOW": "Allow",
    "SERVER": "Server",

    "ACCEPT_RANGES": "Accept-Ranges",
    "RANGE": "Range",
    "IF_RANGE": "If-Range",
    "CONTENT_RANGE": "Content-Range",

    "CROSS_ORIGIN_EMBEDDER_POLICY": "Cross-Origin-Embedder-Policy",
    "CROSS_ORIGIN_OPENER_POLICY": "Cross-Origin-Opener-Policy",
    "CROSS_ORIGIN_RESOURCE_POLICY": "Cross-Origin-Resource-Policy",
    "CONTENT_SECURITY_POLICY": "Content-Security-Policy",
    "CONTENT_SECURITY_POLICY_REPORT_ONLY": "Content-Security-Policy-Report-Only",
    "EXPECT_CT": "Expect-CT",
    "ORIGIN_ISOLATION": "Origin-Isolation",
    "PERMISSIONS_POLICY": "Permissions-Policy",
    "STRICT_TRANSPORT_SECURITY": "Strict-Transport-Security",
    "UPGRADE_INSECURE_REQUESTS": "Upgrade-Insecure-Requests",
    "X_CONTENT_TYPE_OPTIONS": "X-Content-Type-Options",
    "X_DOWNLOAD_OPTIONS": "X-Download-Options",
    "X_FRAME_OPTIONS": "X-Frame-Options",
    "X_PERMITTED_CROSS_DOMAIN_POLICIES": "X-Permitted-Cross-Domain-Policies",
    "X_POWERED_BY": "X-Powered_By",
    "X_XSS_PROTECTION": "X-XSS-Protection",

    "SEC_FETCH_SITE": "Sec-Fetch-Site",
    "SEC_FETCH_MODE": "Sec-Fetch-Mode",
    "SEC_FETCH_USER": "Sec-Fetch-User",
    "SEC_FETCH_DEST": "Sec-Fetch-Dest",
    "SERVICE_WORKER_NAVIGATION_PRELOAD": "Service-Worker-Navigation-Preload",

    "LAST_EVENT_ID": "Last-Event-ID",
    "NEL": "NEL",
    "PING_FROM": "Ping-From",
    "PING_TO": "Ping-To",
    "REPORT_TO": "Report-To",

    "TRANSFER_ENCODING": "Transfer-Encoding",
    "TE": "TE",
    "TRAILER": "Trailer",

    "SEC_WEBSOCKET_KEY": "Sec-WebSocket-Key",
    "SEC_WEBSOCKET_EXTENSIONS": "Sec-WebSocket-Extensions",
    "SEC_WEBSOCKET_ACCEPT": "Sec-WebSocket-Accept",
    "SEC_WEBSOCKET_PROTOCOL": "Sec-WebSocket-Protocol",
    "SEC_WEBSOCKET_VERSION": "Sec-WebSocket-Version",

    "ACCEPT_PUSH_POLICY": "Accept-Push-Policy",
    "ACCEPT_SIGNATURE": "Accept-Signature",
    "ALT_SVC": "Alt-Svc",
    "DATE": "Date",
    "EARLY_DATA": "Early-Data",
    "LARGE_ALLOCATION": "Large-Allocation",
    "LINK": "Link",
    "PUSH_POLICY": "Push-Policy",
    "RETRY_AFTER": "Retry-After",
    "SIGNATURE": "Signature",
    "SIGNED_HEADERS": "Signed-Headers",
    "SERVER_TIMING": "Server-Timing",
    "SERVICE_WORKER_ALLOWED": "Service-Worker-Allowed",
    "SOURCEMAP": "SourceMap",
    "UPGRADE": "Upgrade",
    "X_DNS_PREFETCH_CONTROL": "X-DNS-Prefetch-Control",
    "X_FIREFOX_SPDY": "X-Firefox-Spdy",
    "X_PINGBACK": "X-Pingback",
    "X_REQUESTED_WITH": "X-Requested-With",
    "X_ROBOTS_TAG": "X-Robots-Tag",
    "X_UA_COMPATIBLE": "X-UA-Compatible"
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
