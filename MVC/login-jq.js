'use strict';
/**
 * 不完全包装
 */
var $user = $('.J-user-input');
var $pass = $('.J-pass-input');
var $submit = $('.J-submit');
/**
 * Model
 * @type {{user: string, pass: string}}
 */
var Model = {
    user: '',
    pass: ''
};

Model.set = function (key, val) {
    this[key] = val;
};

Model.subscribe = function () {/* 略 */};

/**
 * 完全包装
 * @type {any}
 */
var User = $('<input type="text">');
var Pass = $('<input type="text">');
var Submit = $('<input type="submit">');
var Page = $('<form>');
Page.append([User, Pass, Submit]);

Model.subscribe(function () {
    if (Model.user && Model.pass) {
        Submit.prop('disabled', false);
    } else {
        //....
    }
});

/**
 * Controller
 */
function controller() {
    User.on('change', e => {
        Model.user = 'xxx'
        Submit.prop('disabled', true);
    });
    Pass.on('change', e => {/*略*/});
    Submit.on('click', e => {});
}
