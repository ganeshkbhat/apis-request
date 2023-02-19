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

module.exports.PROTOCOL_NODE_MODULES = Object.freeze({
    "HTTP": "http",
    "HTTPS": "https",
    "HTTP2": "http2"
});

// // https://en.wikipedia.org/wiki/Category:Application_layer_protocols
module.exports.PROTOCOLS = Object.freeze({
    "APPLICATION_LAYER": {
        "BGP": "BGP",
        "DHCP(v6)": "DHCP(v6)",
        "DNS": "DNS",
        "FTP": "FTP",
        "HTTP": "HTTP",
        "HTTPS": "HTTPS",
        "IMAP": "IMAP",
        "IRC": "IRC",
        "LDAP": "LDAP",
        "MGCP": "MGCP",
        "MQTT": "MQTT",
        "NNTP": "NNTP",
        "NTP": "NTP",
        "OSPF": "OSPF",
        "POP": "POP",
        "PTP": "PTP",
        "ONC_RPC": "ONC/ RPC",
        "RTP": "RTP",
        "RTSP": "RTSP",
        "RIP": "RIP",
        "SIP": "SIP",
        "SMTP": "SMTP",
        "SNMP": "SNMP",
        "SSH": "SSH",
        "Telnet": "Telnet",
        "TLS_SSL": "TLS/ SSL",
        "XMPP": "XMPP"
    },
    "TRANSPORT_LAYER": {
        "TCP": "TCP",
        "UDP": "UDP",
        "DCCP": "DCCP",
        "SCTP": "SCTP",
        "RSVP": "RSVP",
        "QUIC": "QUIC"
    },
    "HTTP_LAYER": {
        "HTTP": "http:",
        "HTTPS": "https:",
        "HTTP2": "http2",
        "HTTP3": "http3"
    },
    "INTERNET_LAYER": {
        "IPv6": "IPv6",
        "IPv4": "IPv4",
        "ICMP(v6)": "ICMP(v6)",
        "NDP": "NDP",
        "ECN": "ECN",
        "IGMP": "IGMP",
        "IPsec": "IPsec"
    },
    "LINK_LAYER": {
        "Tunnels": "Tunnels",
        "PPP": "PPP",
        "MAC": "MAC"
    }
});


module.exports.HTTP_PROTOCOLS = Object.freeze({
    "HTTP": "http:",
    "HTTPS": "https:",
    "HTTP2": "http2"
});


module.exports.default = module.exports.HTTP_PROTOCOLS;

