'use strict';
class LoginForm {
    constructor() {
        this._loginButton.on('sendLoginAjax', () => {
            // fetch(....)
        });
    }

    setUserInput(input) {}
    setPassInput(input) {}
    setLoginButton(button) {
        this._loginButton = button;
    }
}

class UserInput {}

class PassInput {}

class LoginButton extends EventEmitter {
    constructor(el) {
        super();
        this._el = el;
        el.addEventListener('click', () => {
            this.emit('sendLoginAjax');
        })
    }
}