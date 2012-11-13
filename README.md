# ReadyQueue
A small library to allow shiming of old scattered code for use with defered javascript loaders.

1. Include library `<script src="/path/to/readyQueue.js"></script>`
2. Queue up some events
	```javascript
	rq.add('name', function () {
		alert('first item in queue');
	});
	```