'use strict';
class List {

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