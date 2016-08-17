'use strict';
class Observer {
    constructor() {
        this._handlers = new Set();
    }

    /**
     *
     * @param {function} handler
     */
    attach(handler) {
        if (typeof handler !== 'function') throw new TypeError('Handler must be a function');
        this._handlers.add(handler);
    }

    /**
     *
     * @param {function} handler
     */
    detach(handler) {
        this._handlers.delete(handler);
    }

    /**
     * 通知观察者目标状态发生了变化
     */
    notify() {
        for (let handler of this._handlers.values()) {
            handler();
        }
    }
}