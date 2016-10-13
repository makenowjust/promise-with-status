import test from 'ava'
import makeWithStatus from '.'

const withStatus = makeWithStatus(Promise)

test('basic property', t => {
  t.is(typeof withStatus, 'function')
  t.true(withStatus(Promise.resolve(123)) instanceof Promise)
  t.is(withStatus(Promise.resolve(123)).status, withStatus.pending)
})

test('when resolved', async t => {
  const promise = withStatus(Promise.resolve(123))
  await promise
  t.is(promise.status, withStatus.fullfilled)
  t.is(promise.value, 123)
})

test('when rejected', async t => {
  const promise = withStatus(Promise.reject(new Error('wow')))
  try {
    await promise
  } catch (err) {
    t.is(promise.status, withStatus.rejected)
    t.is(promise.reason, err)
    return
  }
  t.fail()
})
