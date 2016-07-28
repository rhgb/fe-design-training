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
 * new LazyLoader(document.querySelector('ul'));
 *
 */

class LazyLoader {
    /**
     *
     * @param {HTMLElement} el
     */
    constructor(el, list) {
        this.element = el;
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
                const el = item.element;
                if (el.tagName === 'IMG') {
                    el.src = el.dataset.lazyUrl;
                } else {
                    window.fetch(el.dataset.lazyUrl)
                        .then(res => res.text())
                        .then(text => el.innerHTML = text);
                }
                item.loaded = true;
            })
    }
}