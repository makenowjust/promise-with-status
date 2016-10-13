# promise-with-status [![npm](https://img.shields.io/npm/v/promise-with-status.svg?style=flat-square)](https://www.npmjs.com/package/promise-with-status) [![Travis](https://img.shields.io/travis/MakeNowJust/promise-with-status.svg?style=flat-square)](https://travis-ci.org/MakeNowJust/promise-with-status) [![SUSHI-WARE LICENSE](https://img.shields.io/badge/license-SUSHI--WARE%F0%9F%8D%A3-blue.svg?style=flat-square)](https://github.com/MakeNowJust/sushi-ware)

> A promise exports `status` and `value` (or `reason`).

## Install

```console
$ npm i -S promise-with-status
```

## Usage

```javascript
const withStatus = require('promise-with-status')(Promise)
// or: const withStatus = require('promise-with-status')(require('your-favorite-promise-lib'))

const promise = withStatus(Promise.resolve(123))
console.log(promise.status) //=> Symbol(pending)

promise.then(() => console.log(promise.status)) //=> Symbol(fullfilled)
promise.then(() => console.log(promise.value))  //=> 123

const error = withStatus(Promise.reject(new Error('wow')))

error.then(() => console.log(promise.status)) //=> Symbol(rejected)
error.then(() => console.log(promise.reason)) //=> Error: wow
```

## API

### require('with-promise-status')(Promise)

Returns `withStatus(promise)` function.

#### Promise

Type: `Function`

Your favorite `Promise` implementation

### withStatus(promise)

Returns new `promise` having `status` and other properties.

#### promise

Type: `Promise`

A promise, howver it will be not modified.

### promise.status

`withStatus.pending`, `withStatus.fullfilled` or `withStatus.rejected`

### promise.value

If `promise.status === withStatus.fullfilled` is `true`, it is promise's fullfilled value.

### promise.reason

If `promise.status === withStatus.rejected` is `true`, it is promise's rejected reason.

### withStatus.pending, withStatus.fullfilled, withStatus.rejected

Exported symbols which means each statuses.

## License

MIT and [:sushi:](https://github.com/MakeNowJust/sushi-ware)
© TSUYUSATO "[MakeNowJust](https://quine.codes)" Kitsune <<make.just.on@gmail.com>> 2016
