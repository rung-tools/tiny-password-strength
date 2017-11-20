import {
    __,
    both,
    complement,
    converge,
    eqBy,
    equals,
    identity,
    juxt,
    lte,
    nth,
    propSatisfies,
    reduce,
    test,
    toLower,
    trim,
    zipObj
} from 'ramda';

const constraints = [
    complement(eqBy(trim, '')),
    propSatisfies(lte(8), 'length'),
    both(test(/\w+/), test(/\d+/)),
    converge(complement(equals), [toLower, identity]),
    test(/[^a-z]+/)
];

export const strength
    = juxt(constraints)
    & reduce((count, pass) => count + Number(pass), 0)
    & nth(__, [
        ['no-password', ''],
        ['worst', 'Please create a stronger password!'],
        ['bad', 'Please create a stronger password!'],
        ['weak', 'It\'s good, but you can do better!'],
        ['good', 'Nice one!'],
        ['strong', 'Awesome password!']
    ])
    & zipObj(['meterClass', 'meterMessage']);
