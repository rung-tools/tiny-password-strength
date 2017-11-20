import test from 'ava'
import strength from '../lib'

test('no-password', t => {
    t.deepEqual(strength(''), {
        meterClass: 'no-password',
        meterMessage: ''
    })
})

test('worst', t => {
    t.deepEqual(strength('f'), {
        meterClass: 'worst',
        meterMessage: 'Please create a stronger password!'
    })
})

test('bad', t => {
    t.deepEqual(strength('gambiarra'), {
        meterClass: 'bad',
        meterMessage: 'Please create a stronger password!'
    })
})

test('weak', t => {
    t.deepEqual(strength('1234981'), {
        meterClass: 'weak',
        meterMessage: 'It\'s good, but you can do better!'
    })
})

test('good', t => {
    t.deepEqual(strength('1234981gelatina'), {
        meterClass: 'good',
        meterMessage: 'Nice one!'
    })
})

test('strong', t => {
    t.deepEqual(strength('1234981gelaTina'), {
        meterClass: 'strong',
        meterMessage: 'Awesome password!'
    })
})
