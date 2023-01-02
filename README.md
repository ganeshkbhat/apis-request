# request-apis
npm module with APIs for cleaner request and basic http requests utils. Contains constants for protocols, http headers, methods, and content types


Find the demos in the [demos folder](./demos)

## Usage:


```

const reqApis = require("request-apis");
reqApis.request("https://www.google.com");

```


## All request-apis Methods:


#### request
Create a general `any` method request. Allows for handling connect, error, upgrade events specifically. Simple implementation and allows for request and response interceptor functions.


Usage:

`.request(options, data, protocol, connectHandler, errorHandler, upgradeHandler)`


```
/**
 *
 *
 * @param {*} options
 * @param {*} data
 * @param {*} protocol
 * @param {*} connectHandler
 * @param {*} contentHandler
 * @param {*} errorHandler
 * @param {*} upgradeHandler
 * @return {*} Promise: resolve<{ headers, body }>, reject <{ error }> 
 * 
 */
```


#### getRequest
Create a get request. Allows for handling connect, error, upgrade events specifically. Simple implementation and allows for request and response interceptor functions.


Usage:

`.getRequest(options, data, protocol, connectHandler, errorHandler, upgradeHandler)`

`.getRequest(options)`


```
/**
 *
 *
 * @param {*} options
 * @param {*} data
 * @param {*} protocol
 * @param {*} connectHandler
 * @param {*} contentHandler
 * @param {*} errorHandler
 * @param {*} upgradeHandler
 * @return {*} Promise: resolve<{ headers, body }>, reject <{ error }> 
 * 
 */
```


#### postRequest
Create a post request. Allows for handling connect, error, upgrade events specifically. Simple implementation and allows for request and response interceptor functions.


Usage:

`.postRequest(options, data, protocol, connectHandler, errorHandler, upgradeHandler)`

`.postRequest(options, data, protocol)`


```
/**
 *
 *
 * @param {*} options
 * @param {*} data
 * @param {*} protocol
 * @param {*} connectHandler
 * @param {*} contentHandler
 * @param {*} errorHandler
 * @param {*} upgradeHandler
 * @return {*} Promise: resolve<{ headers, body }>, reject <{ error }> 
 * 
 */
```


#### putRequest
Create a put request. Allows for handling connect, error, upgrade events specifically. Simple implementation and allows for request and response interceptor functions.


Usage:

`.putRequest(options, data, protocol, connectHandler, errorHandler, upgradeHandler)`

`.putRequest(options, data, protocol)`


```
/**
 *
 * @param {*} options
 * @param {*} data
 * @param {*} protocol
 * @param {*} connectHandler
 * @param {*} errorHandler
 * @param {*} upgradeHandler
 * @return {*} Promise: resolve<{ headers, body }>, reject <{ error }>
 * 
 */
```


#### patchRequest
Create a patch request. Allows for handling connect, error, upgrade events specifically. Simple implementation and allows for request and response interceptor functions.


`.patchRequest(options, data, protocol, connectHandler, errorHandler, upgradeHandler)`

`.patchRequest(options, data, protocol)`


```
/**
 *
 *
 * @param {*} options
 * @param {*} data
 * @param {*} protocol
 * @param {*} connectHandler
 * @param {*} contentHandler
 * @param {*} errorHandler
 * @param {*} upgradeHandler
 * @return {*} Promise: resolve<{ headers, body }>, reject <{ error }> 
 * 
 */
```


#### deleteRequest
Create a delete request. Allows for handling connect, error, upgrade events specifically. Simple implementation and allows for request and response interceptor functions.


Usage:

`.deleteRequest(options, data, protocol, connectHandler, errorHandler, upgradeHandler)`

`.deleteRequest(options)`


```
/**
 *
 * @param {*} options
 * @param {*} data
 * @param {*} protocol
 * @param {*} connectHandler
 * @param {*} contentHandler
 * @param {*} errorHandler
 * @param {*} upgradeHandler
 * @return {*} Promise: resolve<{ headers, body }>, reject <{ error }> 
 * 
 */
```


#### optionsRequest
Create a options request. Allows for handling connect, error, upgrade events specifically. Simple implementation and allows for request and response interceptor functions.


Usage:

`.optionsRequest(options, data, protocol, connectHandler, errorHandler, upgradeHandler)`

`.optionsRequest(options)`


```
/**
 *
 *
 * @param {*} options
 * @param {*} data
 * @param {*} protocol
 * @param {*} connectHandler
 * @param {*} contentHandler
 * @param {*} errorHandler
 * @param {*} upgradeHandler
 * @return {*} Promise: resolve<{ headers, body }>, reject <{ error }> 
 * 
 */
```


#### contentTypeHandler
Response content handler function handling content-type of different types. Currently has application/json, application/xml handlers. Parses the `'content-type': 'application/json'` like headers from res.headers


.contentTypeHandler(responseObject, responseBody)


```
/**
 * Different contentTypeHandler Handlers
 * 
 * @param {*} responseObject
 * @param {*} responseBody
 * @return { headers, body }
 */
```


#### checkHttpsProtocol
Check and get type of protocol - http or https


`.checkHttpsProtocol(url)`


```
/**
 *
 * @param {*} url
 * @return {*} Boolean
 * 
 */
```


#### getProtocol
Check and Get the protocol of the url.


`.getProtocol(url)`


```
/**
 *
 * @param {*} url
 * @return {*} Boolean
 * 
 */
```


#### isValidURL
Is the url a valid url structure.


`.isValidURL(url)`


```
/**
 *
 * @param {*} url
 * @return {*} Boolean
 * 
 */
```


### DIFFERENT HTTP CONSTANTS
Different HTTP Constants associated to the package provided as an JS Object. Can be useful for testing/ automated testing purposes, etc.


##### REQUEST_HEADERS
List of Different HTTP Request headers for HTTP


`require("request-apis").constants.REQUEST_HEADERS`



##### REQUEST_HEADERS_CATEGORIZED
List of Different HTTP Request headers categorized for HTTP


`require("request-apis").constants.REQUEST_HEADERS_CATEGORIZED`


##### RESPONSE_HEADERS
List of Different HTTP Response headers for HTTP


`require("request-apis").constants.RESPONSE_HEADERS`



##### RESPONSE_HEADERS_CATEGORIZED
List of Different HTTP Response headers categorized for HTTP


`require("request-apis").constants.RESPONSE_HEADERS_CATEGORIZED`



##### PROTOCOLS
List of Different HTTP Protocols for Node.js - `http`, `https`


`require("request-apis").constants.PROTOCOLS`



##### PROTOCOL_NODE_MODULES
List of Different HTTP Node Modules for Node.js - `http`, `https`, `http2`


`require("request-apis").constants.PROTOCOL_NODE_MODULES`



##### CONTENT_TYPE
List of Different HTTP Content Type value options for HTTP


`require("request-apis").constants.CONTENT_TYPE`



# Contributions

Contributions, Feature Improvements, Bugs, and Issues are invited. [raising an issue](https://github.com/ganeshkbhat/apis-request/issues)


# License

[MIT License](./LICENSE)
