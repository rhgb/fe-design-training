'use strict';
/**
 * @param {HTMLElement} element
 * @returns {function(): (boolean)} - validator function which returns true if input is valid; false otherwise
 */
function getValidatorByElement(element) {
    // TODO: implement
    if (element instanceof HTMLInputElement) {
        return () => element.value.length > 0;
    } else {
        return () => true;
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
/*
        form.addEventListener('submit', e => {
            if (!this.isValid()) {
                e.preventDefault();
                window.alert('Not valid!');
            }
        });*/

        form.addEventListener('change', e => {
            this.emit('validStateChange', this.isValid());
        });
    }

    isValid() {
        return this.validators.every(v => v());
    }
}