'use strict'

const makeWithStatus = module.exports = Promise => {
  const withStatus = promise => {
    const wrap = new Promise((resolve, reject) => {
      promise.then(
        value => {
          wrap.status = withStatus.fullfilled
          wrap.value = value
          resolve(value)
        },
        reason => {
          wrap.status = withStatus.rejected
          wrap.reason = reason
          reject(reason)
        })
    })
    wrap.status = withStatus.pending
    return wrap
  }
  withStatus.pending = makeWithStatus.pending
  withStatus.fullfilled = makeWithStatus.fullfilled
  withStatus.rejected = makeWithStatus.rejected
  return withStatus
}

makeWithStatus.pending = Symbol('pending')
makeWithStatus.fullfilled = Symbol('fullfilled')
makeWithStatus.rejected = Symbol('rejected')
