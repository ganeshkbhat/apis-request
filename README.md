# request-apis
npm module with APIs for cleaner request and basic http requests utils. Contains constants for protocols, http headers, methods, and content types


Find the demos in the [demos folder](./demos)

## Usage:


```

const reqApis = require("request-apis");
reqApis.request("https://www.google.com");

```


## Other APIs:


#### request

Usage:

`.request(options, data, protocol, connectHandler, errorHandler, upgradeHandler)`


#### getRequest

Usage:

`.getRequest(options, data, protocol, connectHandler, errorHandler, upgradeHandler)`

`.getRequest(options)`


#### postRequest

Usage:

`.postRequest(options, data, protocol, connectHandler, errorHandler, upgradeHandler)`

`.postRequest(options, data, protocol)`


#### putRequest

Usage:

`.putRequest(options, data, protocol, connectHandler, errorHandler, upgradeHandler)`

`.putRequest(options, data, protocol)`


#### patchRequest

`.patchRequest(options, data, protocol, connectHandler, errorHandler, upgradeHandler)`

`.patchRequest(options, data, protocol)`


#### deleteRequest

Usage:

`.deleteRequest(options, data, protocol, connectHandler, errorHandler, upgradeHandler)`

`.deleteRequest(options, data, protocol)`



### Contributions

Contributions, Feature Improvements, Bugs, and Issues are invited. [raising an issue](https://github.com/ganeshkbhat/apis-request/issues)


# License

[MIT License](./LICENSE)
