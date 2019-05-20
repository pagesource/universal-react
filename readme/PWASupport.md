# PWA App

---

## What is PWA?

> Progressive Web Apps provide an installable, app-like experience on desktop and mobile that are built and delivered directly via the web. They're web apps that are fast and reliable. And most importantly, they're web apps that work in any browser. If you're building a web app today, you're already on the path towards building a Progressive Web App.

---

## How it works?

PWA uses a service worker to precache the app resources (HTML, CSS, JavaScript, images) needed to run, and cache run time data to improve performance.

- To generate service worker file, we have used next-offline which is based on google's workbox-webpack-plugin.
- next-offline by default generates a service worker file and add code to your client side bundle to register service worker. In case if you want to take control of registering/unregistering, you can use next-offline/runtime module.
- By default, all webpack generated resources will be added to precache list and service worker will try to cache all these resources before activating. Failing to cache any of these resource, service will not activated and attempt to install again.
- Once service worker is activated, it can cache resources ay run time as well. Workbox provide following runtime caching stretgies
  **StaleWhileRevalidate** - It allows you to respond the request as quickly as possible with a cached response if available, falling back to the network request if it’s not cached. The network request is then used to update the cache.
  **CacheFirst** - If there is a Response in the cache, the Request will be fulfilled using the cached response, the network will not be used at all. If there isn't a cached response, the Request will be fulfilled by a a network request and the response will be cached so that the next request is served directly from the cache.
  **NetworkFirst** - By default it will try and fetch the latest request from the network. If the request is successful, it’ll put the response in the cache. If the network fails to return a response, the caches response will be used.
  **NetworkOnly** - requests will be fulfilled from the network only
  **CacheOnly** - ensures that requests are obtained from a cache only.

---

##How to extend?

- In next.config.js, workboxOpts can be used to provide different configurations. For all the configurations available, please refer to [workbox options](https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin) and [next-offline options](https://www.npmjs.com/package/next-offline)

---

##WebApp Manifest

> The web app manifest is a simple JSON file that tells the browser about your web application and how it should behave when 'installed' on the user's mobile device or desktop. Having a manifest is required by Chrome to show the Add to Home Screen prompt.

- A sample manifest file is added as static/manifest.json file. Please refer to [manifest](https://developers.google.com/web/fundamentals/web-app-manifest/) for different manifest properties.
