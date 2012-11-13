(function (window) {
    "use strict";
    var rq = {};
    rq.q = {};
    rq.count = 0;
    rq.add = function (name,cback) {
        
        var tempName = (typeof name === 'string') ? name : "queue" + rq.count;
        rq.q[tempName] = (typeof name === 'function') ? name : cback;
        rq.count++

        return this;
    };

    rq.emit = function (library) {
        for (var item in rq.q) {
            if (rq.q.hasOwnProperty(item)) {
                rq.q[item].call(this, library);
            }
        }
    };

    rq.clear = function () {
        rq.q = {};
    };

    window.readyQueue = rq;
    window.rq = rq;

})(window);