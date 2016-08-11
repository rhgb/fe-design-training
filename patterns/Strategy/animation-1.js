'use strict';
function linearAnimate(element, startX, startY, endX, endY, duration) {
    let start = null; // 开始时间
    let diffX = endX - startX, diffY = endY - startY;
    function step(timestamp) {
        if (start === null) start = timestamp;

        // 当前时间进度比例
        let progress = (timestamp - start) / duration;
        if (progress > 1) progress = 1;

        // 计算当前图形位置
        let currX = startX + diffX * progress,
            currY = startY + diffY * progress;

        // 应用图形位置
        element.style.transform = `translate(${currX}px, ${currY}px)`;

        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    }
    window.requestAnimationFrame(step);
}