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



#### getRequest
Create a get request. Allows for handling connect, error, upgrade events specifically. Simple implementation and allows for request and response interceptor functions.


Usage:

`.getRequest(options, data, protocol, connectHandler, errorHandler, upgradeHandler)`

`.getRequest(options)`



#### postRequest
Create a post request. Allows for handling connect, error, upgrade events specifically. Simple implementation and allows for request and response interceptor functions.


Usage:

`.postRequest(options, data, protocol, connectHandler, errorHandler, upgradeHandler)`

`.postRequest(options, data, protocol)`



#### putRequest
Create a put request. Allows for handling connect, error, upgrade events specifically. Simple implementation and allows for request and response interceptor functions.


Usage:

`.putRequest(options, data, protocol, connectHandler, errorHandler, upgradeHandler)`

`.putRequest(options, data, protocol)`



#### patchRequest
Create a patch request. Allows for handling connect, error, upgrade events specifically. Simple implementation and allows for request and response interceptor functions.


`.patchRequest(options, data, protocol, connectHandler, errorHandler, upgradeHandler)`

`.patchRequest(options, data, protocol)`



#### deleteRequest
Create a delete request. Allows for handling connect, error, upgrade events specifically. Simple implementation and allows for request and response interceptor functions.


Usage:

`.deleteRequest(options, data, protocol, connectHandler, errorHandler, upgradeHandler)`

`.deleteRequest(options)`



# Contributions

Contributions, Feature Improvements, Bugs, and Issues are invited. [raising an issue](https://github.com/ganeshkbhat/apis-request/issues)


# License

[MIT License](./LICENSE)
