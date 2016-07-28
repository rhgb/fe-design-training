'use strict';
class AmountCalc {
    constructor(inputElement, displayElement, discountRules) {
        this.input = inputElement;
        this.display = displayElement;
        this.rules = discountRules;
    }

    calc() {
        const amount = parseFloat(this.input.value);
        const result = this.rules.reduce((amount, rule) => rule(amount), amount);
        this.display.innerText = result;
    }
}