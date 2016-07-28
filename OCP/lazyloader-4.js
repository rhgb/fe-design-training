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
 * new LazyLoader(document.querySelector('ul'), loadImg);
 * new LazyLoader(document.querySelector('ul'), loadHTML);
 *
 */

function loadImg(el) {
    el.src = el.dataset.lazyUrl;
}

function loadHTML(el) {
    window.fetch(el.dataset.lazyUrl)
        .then(res => res.text())
        .then(text => el.innerHTML = text);
}

class LazyLoader {
    /**
     *
     * @param {HTMLElement} el
     * @param {function} loader
     */
    constructor(el, loader) {
        this.element = el;
        this.loadItem = loader;
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
            .forEach(item => {
                if (item.loaded) return;
                this.loadItem(item.element);
                item.loaded = true;
            })
    }
}