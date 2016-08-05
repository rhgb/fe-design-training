'use strict';
class List {
    constructor() {
        this._el = document.createElement('ul');
        this._itemList = [];
    }
    insert(item, index) {/*TODO*/}
    remove(index) {/*TODO*/}
    totalHeight() {/*TODO*/}
    indexOf(item) {/*TODO*/}
}

class UnstableList {
    constructor() {
        this._el = document.createElement('ul');
        this.itemMap = new WeakMap();
    }

    /**
     *
     * @param {AbstractListItem} item
     * @param index
     */
    insert(item, index) {
        this.itemMap.set(item.element, item);

        /* TODO insert item.element to this._el */
    }
    remove(index) {/*TODO*/}
    totalHeight() {/*TODO*/}
    indexOf(item) {/*TODO*/}
}

class AbstractListItem {
    get element() {}

    get height() {}
}

class ListItem extends AbstractListItem {
    constructor(content) {
        this._el = document.createElement('li');
        this._el.textContent = content;
        this._height = this._el.clientHeight;
    }

    get element() {
        return this._el;
    }

    get height() {
        return this._height;
    }
}