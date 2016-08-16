'use strict';
class Observer {
    constructor() {
        this._handlers = new Set();
    }

    /**
     *
     * @param {function} cb
     */
    attach(cb) {
        this._handlers.add(cb);
    }

    /**
     *
     * @param {function} cb
     */
    detach(cb) {
        this._handlers.delete(cb);
    }

    /**
     *
     */
    notify() {
        for (let handler of this._handlers.values()) {
            handler();
        }
    }
}