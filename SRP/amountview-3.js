'use strict';
class AmountPage {
    constructor(inputElement, amountDisp, amountCalc) {
        this.input = inputElement;
        this.display = amountDisp;
        this.calculator = amountCalc;
    }

    calc() {
        let amount = parseFloat(this.input.value);
        if (isNaN(amount)) amount = 0;
        const result = this.calculator.calc();
        this.display.display(result);
    }
}

class AmountDisplay {
    constructor(displayElement) {
        this.display = displayElement;
    }

    display(amount) {
        this.display.innerText = amount;
        if (amount === 0) this.display.classList.add('disabled');
        else this.display.classList.remove('disabled');
    }
}

class AmountCalc {
    constructor(rules) {
        this.rules = rules;
    }

    calc(amount) {
        return this.rules.reduce((amount, rule) => rule(amount), amount);
    }
}