'use strict';
class EventEmitter {
    constructor() {
        this._handlers = new Map();
    }

    /**
     *
     * @param {string} key
     * @param {function} cb
     */
    on(key, cb) {
        let handlerSet = this._handlers.get(key);

        if (!handlerSet) {
            handlerSet = new Set();
            this._handlers.set(key, handlerSet);
        }

        handlerSet.add(cb);
    }

    /**
     *
     * @param {string} key
     * @param {function} cb
     */
    off(key, cb) {
        if (!this._handlers.has(key)) return;
        this._handlers.get(key).delete(cb);
    }

    /**
     *
     * @param key
     * @param {*[]} params
     */
    emit(key, ...params) {
        if (!this._handlers.has(key)) return;
        for (let handler of this._handlers.get(key).values()) {
            handler.apply(null, params);
        }
    }
}