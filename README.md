# ReadyQueue
A small library to allow shiming of old scattered code for use with defered javascript loaders and onDomReady events.

1. Include library `<script src="/path/to/readyQueue.js"></script>`
2. Queue up some events

    ```javascript
    rq.add('name', function () {
        alert('first item in queue');
    });
    ```
    You can use `readyQueue` or `rq` to access readyQueue's methods both are bound to window.
3. Emit the queue when ready

    ```javascript
    $(function () {
        rq.emit();
    });
    ```
