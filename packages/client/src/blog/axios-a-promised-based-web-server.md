---
title: Introducing Axios, a Popular, Promise-based HTTP Client
description: Making HTTP requests to fetch or save data is one of the most common tasks a client-side JavaScript application will need to do. Third-party libraries — especially jQuery — have long been a popular way to interact with the more verbose browser APIs, and abstract away any cross-browser differences.
authors: ['Arthur-Mckaski']
date: June 8, 2018
tags: ['SERVERSIDE']
---

<ol><li><code>
[Axios](https://www.npmjs.com/package/axios) is a popular, promise-based HTTP client that sports an easy-to-use API and can be used in both the browser and Node.js.

Making HTTP requests to fetch or save data is one of the most common tasks a client-side JavaScript application will need to do. Third-party libraries — especially jQuery — have long been a popular way to interact with the more verbose browser APIs, and abstract away any cross-browser differences.

As people move away from jQuery in favor of improved native DOM APIs, or front-end UI libraries like React and Vue.js, including it purely for its $.ajax functionality makes less sense.

Let’s take a look at how to get started using Axios in your code, and see some of the features that contribute to its popularity among JavaScript developers.

# Axios vs Fetch

<li class="description">
As you’re probably aware, modern browsers ship with the newer [Fetch API](http://localhost:5000/blogs/SERVERSIDE) built in, so why not just use that? There are several differences between the two that many feel gives Axios the edge.

One such difference is in how the two libraries treat [HTTP error](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#4xx_Client_errors) codes. When using Fetch, if the server returns a 4xx or 5xx series error, your catch() callback won’t be triggered and it is down to the developer to check the response status code to determine if the request was successful. Axios, on the other hand, will reject the request promise if one of these status codes is returned.

Another small difference, which often trips up developers new to the API, is that Fetch doesn’t automatically send cookies back to the server when making a request. It’s necessary to explicitly pass an option for them to be included. Axios has your back here.

One difference that may end up being a show-stopper for some is progress updates on uploads/downloads. As Axios is built on top of the older XHR API, you’re able to register callback functions for onUploadProgress and onDownloadProgress to display the percentage complete in your app’s UI. Currently, Fetch has no support for doing this.

Lastly, Axios can be used in both the browser and Node.js. This facilitates sharing JavaScript code between the browser and the back end or doing server-side rendering of your front-end apps.

Note: there are versions of the [Fetch API available for Node](https://www.npmjs.com/package/isomorphic-fetch) but, in my opinion, the other features Axios provides give it the edge.
</li>
## Installing

As you might expect, the most common way to install Axios is via the npm package manager:

```js
npm i axios
```

and include it in your code where needed:

```js
// ES2015 style import
import axios from 'axios';

// Node.js style require
const axios = require('axios');
```

If you’re not using some kind of module bundler (e.g. webpack), then you can always pull in the library from a CDN in the traditional way:

```js
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

### Browser support

Axios works in all modern web browsers, and Internet Explorer 8+.

# Making Requests

Similar to jQuery’s $.ajax function, you can make any kind of HTTP request by passing an options object to Axios:

```js
axios({
  method: 'post',
  url: '/login',
  data: {
    user: 'brunos',
    lastName: 'ilovenodejs'
  }
});
```

Here, we’re telling Axios which HTTP method we’d like to use (e.g. GET/POST/DELETE etc.) and which URL the request should be made to.

We’re also providing some data to be sent along with the request in the form of a simple JavaScript object of key/value pairs. By default, Axios will serialize this as JSON and send it as the request body.

## Request Options
There are a whole bunch of [additional options](https://github.com/axios/axios#request-config) you can pass when making a request, but here are the most common ones:

 - **baseUrl: if you specify a base URL, it’ll be prepended to any relative URL you use.**
 - **headers: an object of key/value pairs to be sent as headers.**
 - **params: an object of key/value pairs that will be serialized and appended to the URL as a query string.**
 - **responseType: if you’re expecting a response in a format other than JSON, you can set this property to arraybuffer, blob, document, text, orstream.**
 - **auth: passing an object with username and password fields will use these credentials for HTTP Basic auth on the request.**


 ## Convenience methods
Also like jQuery, there are shortcut methods for performing different types of request.

The <code>get</code>, <code>delete,</code> <code>head</code> and <code>options</code> methods all take two arguments: a URL, and an optional config object.


```js
axios.get('/products/5');
```

The <code>post</code>, <code>put</code>, <code>patch</code>, and  methods take a data object as their second argument, and an optional config object as the third:

```js
axios.post(
  '/products',
  { name: 'Waffle Iron', price: 21.50 },
  { options }
);
```

# Receiving a Response
Once you make a request, Axios returns a promise that will resolve to either a response object or an error object.


```js
axios.get('/product/9')
  .then(response => console.log(response))
  .catch(error => console.log(error));
```


## The response object
When the request is successful, your <code>then()</code> callback will receive a response object with the following properties:

- **data: the payload returned from the server. By default, Axios expects JSON and will parse this back into a JavaScript object for you.**
- **status: the HTTP code returned from the server.**
- **statusText: the HTTP status message returned by the server.**
- **headers: all the headers sent back by the server.**
- **config: the original request configuration.**
- **request: the actual XMLHttpRequest object (when running in a browser).**

## The error object

If there’s a problem with the request, the promise will be rejected with an error object containing
 at least some of the following properties:

- **message: the error message text.**
- **response: the response object (if received) as described in the previous section.**
- **request: the actual XMLHttpRequest object (when running in a browser).**
- **config: the original request configuration.**



# Transforms and Interceptors


Axios provides a couple of neat features inspired by [Angular’s $http library](https://docs.angularjs.org/api/ng/service/%24http). Although they appear similar, they have slightly different use cases.

### Transforms

Axios allows you to provide functions to transform the outgoing or incoming data, in the form of two configuration options you can set when making a request: transformRequest and transformResponse. Both properties are arrays, allowing you to chain multiple functions that the data will be passed through.

Any functions passed to transformRequest are applied to PUT, POST and PATCH requests. They receive the request data, and the headers object as arguments and must return a modified data object


```js
const options = {
  transformRequest: [
    (data, headers) => {
      // do something with data
      return data;
    }
  ]
}
```

Functions can be added to transformResponse in the same way, but are called only with the response data, and before the response is passed to any chained then() callbacks.

So what could we use transforms for? One potential use case is dealing with an API that expects data in a particular format — say XML or even CSV. You could set up a pair of transforms to convert outgoing and incoming data to and from the format the API requires.

It’s worth noting that Axios’ default transformRequest and transformResponse functions transform data to and from JSON, and specifying your own transforms will override these.

### Interceptors

While transforms let you modify outgoing and incoming data, Axios also allows you to add functions called [interceptors](https://github.com/axios/axios#interceptors). Like transforms, these functions can be attached to fire when a request is made, or when a response is received.


```js
// Add a request interceptor
axios.interceptors.request.use((config) => {
    // Do something before request is sent
    return config;
  }, (error) => {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use((response) => {
    // Do something with response data
    return response;
  }, (error) => {
    // Do something with response error
    return Promise.reject(error);
  });
```
As you might have noticed from the examples above, interceptors have some important differences from transforms. Instead of just receiving the data or headers, interceptors receive the full request config or response object.

When creating interceptors, you can also choose to provide an error handler function that allows you to catch any errors and deal with them appropriately.

Request interceptors can be used to do things such as[ retrieve a token from local storage](https://www.npmjs.com/package/axios-token-interceptor) [and send with all requests](https://www.npmjs.com/package/axios-token-interceptor), while a response interceptor could be used to catch 401 [responses and redirect to a login page](https://gist.github.com/yajra/5f5551649b20c8f668aec48549ef5c1f) for authorization.



# Third-party Add-ons


Being a popular library, Axios benefits from an ecosystem of third-party libraries that extend its functionality. From interceptors to testing adaptors to loggers, there’s quite a variety available. Here are a few that I think you may find useful:

- **[axios-mock-adaptor](https://github.com/ctimmerm/axios-mock-adapter): allows you to easily mock requests to facilitate testing your code.**
- **[axios-cache-plugin](https://github.com/jin5354/axios-cache-plugin): a wrapper for selectively caching GET requests.**
- **[redux-axios-middleware](https://github.com/svrcekmichal/redux-axios-middleware): if you’re a Redux user, this middleware provides a neat way to dispatch Ajax requests with plain old actions.**


A list of more [Axios add-ons and extentions](https://github.com/axios/axios/blob/master/ECOSYSTEM.md) is available on the Axios GitHub repo.

In summary, Axios has a lot to recommend it. It has a straightforward API, with helpful shortcut methods that will be familiar to anyone who’s used jQuery before. Its popularity, and the availability of a variety of third-party add-ons, make it a solid choice for including in your apps, whether front end, back end, or both.
</ul></li></code>





