'use strict';
class List {
    constructor() {
        this._el = document.createElement('ul');
        this._itemList = [];
    }

    /**
     *
     * @param {AbstractListItem} item
     * @param index
     */
    insert(item, index) {
        this._itemList.splice(index, 0 , item);
        this._el.insertBefore(xx, item.element)
    }
    remove(index) {/*TODO*/}
    totalHeight() {/*TODO*/}
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

class SelfDestructionListItem extends ListItem {
    constructor(content, timeout) {
        super(content);

        setTimeout(() => {
            this._el.parentNode.removeChild(this._el);
            this._el = null;
            this._height = 0;
        }, timeout);
    }
}