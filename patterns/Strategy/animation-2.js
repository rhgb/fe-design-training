'use strict';
/**
 *
 * @param {Element} element
 * @param {number} startX
 * @param {number} startY
 * @param {number} endX
 * @param {number} endY
 * @param {number} duration
 * @param {function} easingFunc
 */
function animate(element, startX, startY, endX, endY, duration, easingFunc) {
    let start = null; // 开始时间
    let diffX = endX - startX, diffY = endY - startY;
    function step(timestamp) {
        if (start === null) start = timestamp;

        // 当前时间进度比例
        let progress = (timestamp - start) / duration;
        if (progress > 1) progress = 1;

        // 计算当前图形位置
        let pos = easingFunc(progress);
        let currX = startX + diffX * pos.x,
            currY = startY + diffY * pos.y;

        // 应用图形位置
        element.style.transform = `translate(${currX}px, ${currY}px)`;

        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    }
    window.requestAnimationFrame(step);
}

function linearEasing(progress) {
    return {
        x: progress,
        y: progress
    };
}

function squareEasing(progress) {
    return {
        x: progress * progress,
        y: progress * progress
    };
}