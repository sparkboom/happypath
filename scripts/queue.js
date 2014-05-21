function Queue() {
    // store your callbacks
    this._methods = [];

    this._running = false;

    // keep a reference to your response
    this._response = null;
}

Queue.prototype = {
    // adds callbacks to your queue
    add: function (fn) {

        // if the queue had been flushed, return immediately
        if (this._flushed) {
            fn(this._response);

            // otherwise push it on the queue
        } else {

            this._methods.push(fn);
        }
    },
    run: function () {
        if (this._running) {
            return;
        }
        console.log('start');

        this._running = true;

        this.doNext(this._response);
    },
    doNext: function (resp) {
        this._response = resp;

        var nextFn = this._methods.shift();

        if (nextFn) {
            setTimeout(function () {
                nextFn(resp);
            }, 10);
        } else {
            this._running = false;
            console.log('stop');
        }
    }
};