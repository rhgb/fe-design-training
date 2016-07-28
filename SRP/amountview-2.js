'use strict';
class AmountCalc {
    constructor(inputElement, displayElement, discountRules) {
        this.input = inputElement;
        this.display = displayElement;
        this.rules = discountRules;
    }

    calc() {
        let amount = parseFloat(this.input.value);

        if (isNaN(amount)) amount = 0;

        const result = this.rules.reduce((amount, rule) => rule(amount), amount);

        this.display.innerText = result;
        if (result === 0) this.display.classList.add('disabled');
        else this.display.classList.remove('disabled');
    }
}