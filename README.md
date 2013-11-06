StorageIO.js
============

Cross Browser Javascript Library for HTML5 Storage Utilizing IndexedDB or if not supported falling back to Web SQL. Powerful library to help you build offline applications.




![HTML5 Image](http://3.bp.blogspot.com/-7VNxNemjYHM/UnllNdpNmlI/AAAAAAAAAak/k1ojRbl6xFI/s320/1383708950_HTML5-02.png)

## Introduction:

As users many things are abstracted from us, such as browser rendering engines and its effect on websites we use everyday. I will be going through an overview of new technologies in HTML5.

## Rendering Engines:

Rendering Engine also known as web browser engine or layout engine is used by web browsers to present formatted content to users in a visual form from HTML, CSS, XML and Images files. It also processes client side scripts, cookies, sends http requests (GET, POST, PUT, DELETE, and HEAD). Depending on which rendering engine used browser vendors try to follow specifications to enable a user to view a single html page on multiple browsers, atleast thats how its supposed to be. You will find that not all browser support the latest specifications such as HTML5, CSS3 and many more cutting edge technologies.

## Popular Rendering Engines:



* Webkit: Used by Apple's Safari, Google Chrome
* Gecko: Used by Mozilla's Firefox
* Trident: Used by Microsoft Internet Explorer
* Blink: Used by Opera (15+), Google Chrome (28+)

## HTML5 Storage:

 When developers think about storing data they typically think of storing data only on the server via Ajax or REST. That's cool but what if you want to run the application offline?
Advantages

Many companies find storage cumbersome as data continues to grow so large on the server side and if its possible to save some data on the client it could save space on the server and bandwidth.
If an application is waiting to upload data and there is network latency it may cause an application to linger. 
Useful for offline applications that would like to cache data.
Great to speed up performance of your data driven application
Disadvantage

Data may be vulnerable if someone gets physical access to your computer. 
Multiple clients that doesn't sync data with the server may have difficulty accessing the updated data from one client to the other. Simple solution sync your data.
Luckily HTML5 has many technologies that can help mitigate this but not all these technologies are support in all browsers. See image below:

![Browser Support](http://4.bp.blogspot.com/-3E0guJtvzF4/UnlTMU7JeqI/AAAAAAAAAaY/m6o05a6GjgY/s640/BrowserSupport.png)
screenshot from http://www.html5rocks.com/en/features/storage

## Why should I care?

As software developers we should have an idea of how the web works because we may be in a situation where we are asked to port an application that is supported from one browser to a browser that is not supported. What I mean by 'not supported' is for example in the case of  Adobe's Brackets which works fine on WebKit browsers doesn't work on non-webkit browsers.

## What IndexedDB?

IndexedDB is object oriented and does not use SQL but rather uses its own syntax. It is an indexed table system. It is used to index (save) or query (retrieve) objects (data stored/retrieved with a key) on the client's browser. It does have some secure features such as same-origin policy where you are not allowed to access data from multiple domains. It stores data in a key value pair.
* Asyncronous API
It works like Ajax letting you pass data and pass a callback function to return an event to let you know if it was successful or not. You can use the 'onsuccess' or 'onerror' property to attach event listeners to execute something if it succeeds or fails.  You can use WebWorker with this to improve performance.
* Syncronous API
Currently no browser supports this.
Note:
 IndexedDB isn't good for full-text search, internationalized sorting, and synchronization.
Web Worker is a way to achieve concurrency in JavaScript.

## What is WebSQL?


This is a relation table system and has been deprecated by W3C.  It isn't a part of the HTML5 Specification but is still a useful technology to use because it supported in browsers that IndexedDB doesn't support.

##Conclusion


HTML5 is interesting and as more browser vendors provide HTML5 Specification support, users and developers will have a better experience on the web. At least that is what I hope. In that case I've created StorageIO.js to address this need for cross browser HTML5 Storage.

Here are some cool demo's of IndexedDB in action:
https://developer.mozilla.org/ms/demos/tag/tech:indexeddb




Thanks,
Zak Hassan
@zmhassan
