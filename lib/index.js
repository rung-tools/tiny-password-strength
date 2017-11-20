'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.strength = undefined;

var _ramda = require('ramda');

var constraints = [(0, _ramda.complement)((0, _ramda.eqBy)(_ramda.trim, '')), (0, _ramda.propSatisfies)((0, _ramda.lte)(8), 'length'), (0, _ramda.both)((0, _ramda.test)(/\w+/), (0, _ramda.test)(/\d+/)), (0, _ramda.converge)((0, _ramda.complement)(_ramda.equals), [_ramda.toLower, _ramda.identity]), (0, _ramda.test)(/[^a-z]+/)];

var strength = exports.strength = function strength() {
    return (0, _ramda.zipObj)(['meterClass', 'meterMessage'])(function () {
        return (0, _ramda.nth)(_ramda.__, [['no-password', ''], ['worst', 'Please create a stronger password!'], ['bad', 'Please create a stronger password!'], ['weak', 'It\'s good, but you can do better!'], ['good', 'Nice one!'], ['strong', 'Awesome password!']])(function () {
            return (0, _ramda.reduce)(function (count, pass) {
                return count + Number(pass);
            }, 0)((0, _ramda.juxt)(constraints).apply(undefined, arguments));
        }.apply(undefined, arguments));
    }.apply(undefined, arguments));
};