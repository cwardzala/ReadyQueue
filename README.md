# ReadyQueue
A small library to allow shiming of old scattered code for use with defered javascript loaders and onDomReady events.

1. Include library
    ```html
    <script src="/path/to/readyQueue.min.js"></script>
    ```

2. Queue up some events

    ```javascript
    rq.add('name', function () {
        alert('first item in queue');
    });
    ```
    Simply wrap old code in an add function and you are off to the races.
    You can use `readyQueue` or `rq` to access readyQueue's methods both are bound to window.

3. Emit the queue when ready

    ```javascript
    $(function () {
        rq.emit();
    });
    ```

## API

### count
The number of items in the queue starting with 1.

### add
```javascript
rq.add(string name, function callback)
// or
rq.add(function callback)
```
The add method allows you to add events to the queue.

Simply pass a string name and function callback to the add() method. Name is not required.

### emit
```javascript
rq.emit(library)
```
The emit method will loop through and run all your queued callbacks in order.

If you want your js library to be available in your callback pass it to emit.


### clear
```javascript
rq.clear()
```
Clear will reset the queue (`rq.q`) to an empty object. All callbacks will be removed.
