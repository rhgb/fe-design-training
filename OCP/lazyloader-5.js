'use strict';
/**
 * Usage:
 *
 * For html like this:
 * <ul>
 *     <li><img class="lazy" data-lazy-url="http://..."></li>
 * </ul>
 *
 * Or like this:
 *
 * <ul>
 *     <li class="lazy" data-lazy-url="http://..."></li>
 * </ul>
 *
 * And in your code:
 *
 * new LazyLoader(document.querySelector('ul'), ImageLoader);
 * new LazyLoader(document.querySelector('ul'), HTMLLoader);
 *
 */

class ContentLoader {
    constructor(el) {
        if (!el) throw new Error('No loading element specified');
        this.el = el;
    }

    load() {
        throw new Error('Please extend ContentLoader to create your own loader');
    }
}

class ImageLoader extends ContentLoader {
    constructor(el) {
        super(el);
    }

    load() {
        this.el.src = this.el.dataset.lazyUrl;
    }
}

class HTMLLoader extends ContentLoader {
    constructor(el) {
        super(el);
    }

    load() {
        window.fetch(el.dataset.lazyUrl)
            .then(res => res.text())
            .then(text => el.innerHTML = text);
    }
}

class LazyLoader {
    /**
     *
     * @param {HTMLElement} el
     * @param {ContentLoader} loader
     */
    constructor(el, loader) {
        this.element = el;
        this.loader = loader;
        this.calcImgPositions();
        el.addEventListener('scroll', () => {
            this.checkScroll();
        });
    }

    calcImgPositions() {
        this.lazyItems = Array.from(this.element.querySelectorAll('.lazy'))
            .map(child => ({
                element: child,
                top: child.offsetTop,
                loaded: false
            }));
    }

    checkScroll() {
        this.lazyItems.filter(item => item.top > this.element.scrollTop + 50)
            .forEach(item => item => {
                if (item.loaded) return;
                new this.loader(item).load();
                item.loaded = true;
            })
    }
}