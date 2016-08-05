'use strict';

class FormElementValidator extends EventEmitter {
    constructor(element) {
        this._element = element;
        element.addEventListener('change', e => this.check());
    }
    validate() {
        return true;
    }
    check() {
        this.emit('validStateChange', this.validate());
    }
}

class InputValidator extends FormElementValidator {
    /**
     *
     * @param {HTMLInputElement} element
     */
    constructor(element) {
        super(element);
        element.addEventListener('keyup', e => this.check());
    }
    validate() {
        // TODO implement
        return this._element.value.length > 0;
    }
}

/**
 * @param {HTMLElement} element
 * @returns {FormElementValidator} - validator function which returns true if input is valid; false otherwise
 */
function getValidatorByElement(element) {
    // TODO: implement
    if (element instanceof HTMLInputElement) {
        return new InputValidator(element);
    } else {
        return new FormElementValidator(element);
    }
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
class FormValidator extends EventEmitter {
    /**
     * @constructor
     * @param {HTMLFormElement} form
     */
    constructor(form) {
        this.validators = Array.from(form.elements).map(element => getValidatorByElement(element));

        form.addEventListener('submit', e => {
            if (!this.isValid()) {
                e.preventDefault();
                window.alert('Not valid!');
            }
        });

        this.validators.forEach(validator => validator.on('validStateChange', () => {
            this.emit('validStateChange', this.isValid());
        }))
    }

    isValid() {
        return this.validators.every(v => v.validate());
    }
}