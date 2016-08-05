'use strict';
/**
 * @param {string} rule
 * @returns {function(string): (boolean)} - validator function which returns true if input is valid; false otherwise
 */
function getValidatorByText(rule) {
    // TODO: implement
    return val => true;
}

/**
 * Usage:
 *      <form id="form">
 *          <input type="text" data-validate="max:100">
 *          <input type="text" data-validate="required">
 *      </form>
 *
 *      new FormValidator(document.getElementById('form'));
 */
class FormValidator {
    /**
     * @constructor
     * @param {HTMLFormElement} form
     */
    constructor(form) {
        this.nodes = Array.from(form.elements);
        this.validatorMap = new WeakMap(this.nodes.map(input =>
            [input, getValidatorByText(input.dataset.validate)]));
        this.submitButton = form.querySelector('input[type=submit]');

        form.addEventListener('submit', e => {
            if (!this.isValid()) {
                e.preventDefault();
                window.alert('Not valid!');
            }
        });

        form.addEventListener('change', e => {
            this.submitButton.disabled = !this.isValid();
        });
    }

    isValid() {
        return this.nodes.every(node => {
            let validator = this.validatorMap.get(node);
            return validator(node.value);
        });
    }
}