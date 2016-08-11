'use strict';
class Animate {
    constructor(element, startX, startY, endX, endY, duration) {
        this.opts = { element, startX, startY, endX, endY, duration };
    }

    run() {
        let start = null; // 开始时间
        let diffX = this.opts.endX - this.opts.startX, diffY = this.opts.endY - this.opts.startY;
        let step = timestamp => {
            if (start === null) start = timestamp;

            // 当前时间进度比例
            let progress = (timestamp - start) / this.opts.duration;
            if (progress > 1) progress = 1;

            // 计算当前图形位置
            let pos = this.easing(progress);
            let currX = this.opts.startX + diffX * pos.x,
                currY = this.opts.startY + diffY * pos.y;

            // 应用图形位置
            this.opts.element.style.transform = `translate(${currX}px, ${currY}px)`;

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    easing(progress) {
        return {
            x: progress,
            y: progress
        };
    }
}

class SquareAnimate extends Animate {
    easing(progress) {
        return {
            x: progress * progress,
            y: progress * progress
        };
    }
}