
[![NPM Version](https://img.shields.io/npm/v/tiny-password-strength.svg?style=flat)](https://www.npmjs.org/package/tiny-password-strength)
[![Build Status](https://api.travis-ci.org/ramda/tiny-password-strength.svg?branch=master)](https://travis-ci.org/rung-tools/tiny-password-strength)
[![Code Coverage](https://codecov.io/gh/rung-tools/tiny-password-strength/branch/master/graph/badge.svg)](https://codecov.io/gh/rung-tools/tiny-password-strength)
[![NPM Downloads](https://img.shields.io/npm/dm/tiny-password-strength.svg?style=flat)](https://www.npmjs.org/package/tiny-password-strength)

![Tiny Password Strength](https://i.imgur.com/IYnYg5Z.png)

> The smallest library for password strength checking

## Installation

`yarn add tiny-password-strength`

## Why?

Because the [Dropbox library for that](https://github.com/dropbox/zxcvbn) that we
have been using was almost 1MB large, and that was causing the compiled bundle
to be very very very very larger than it should be. So, we've implemented almost
the same feature in 38 lines.

## Usage

```js
import strength from 'tiny-password-strength'

const { meterClass, meterMessage } = strength('Eita-Preula')
// { meterClass: 'good', meterMessage: 'Nice one!' }
```

The possible classes are `no-password`, `worst`, `bad`, `weak`, `good` and `strong`.
