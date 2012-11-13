(function (window) {
    "use strict";
    var rq = {};
    rq.q = {};

    rq.add = function (name,cback) {
        var tempName = (typeof name === 'string') ? name : "queue" + Object.keys(rq.q).length;
        rq.q[tempName] = (typeof name === 'function') ? name : cback;
        return this;
    };

    rq.emit = function () {
        for (var item in rq.q) {
            if (rq.q.hasOwnProperty(item)) {
                rq.q[item].call(this);
            }
        }
    };

    rq.remove = function (name) {
        delete rq.q[name];
    };

    window.readyQueue = rq;
    window.rq = rq;

})(window);