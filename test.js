const {run, wrap} = require('.')

function syncFn (str) {
  return str + '-sync'
}

function syncFnError (str) {
  throw new Error('sync error')
}

async function asyncFn (str) {
  return str + '-async'
}

async function asyncFnError (str) {
  throw new Error('async error')
}

describe('as-async', () => {
  describe('run', () => {
    test('sync fn', (done) => {
      run(syncFn, 'bob')
        .then(x => {
          expect(x).toBe('bob-sync')
          done()
        })
        .catch(err => done(err))
    })

    test('sync fn error', (done) => {
      run(syncFnError, 'bob')
        .then(() => {
          done(new Error('it should not be resolved'))
        })
        .catch(err => {
          expect(err.message).toBe('sync error')
          done()
        })
    })

    test('async fn', (done) => {
      run(asyncFn, 'bob')
        .then(x => {
          expect(x).toBe('bob-async')
          done()
        })
        .catch(err => done(err))
    })

    test('async fn error', (done) => {
      run(asyncFnError, 'bob')
        .then(() => {
          done(new Error('it should not be resolved'))
        })
        .catch(err => {
          expect(err.message).toBe('async error')
          done()
        })
    })
  })

  describe('wrap', () => {
    test('sync fn', (done) => {
      wrap(syncFn)('bob')
        .then(x => {
          expect(x).toBe('bob-sync')
          done()
        })
        .catch(err => done(err))
    })

    test('sync fn error', (done) => {
      wrap(syncFnError)('bob')
        .then(() => {
          done(new Error('it should not be resolved'))
        })
        .catch(err => {
          expect(err.message).toBe('sync error')
          done()
        })
    })

    test('async fn', (done) => {
      wrap(asyncFn)('bob')
        .then(x => {
          expect(x).toBe('bob-async')
          done()
        })
        .catch(err => done(err))
    })

    test('async fn error', (done) => {
      wrap(asyncFnError)('bob')
        .then(() => {
          done(new Error('it should not be resolved'))
        })
        .catch(err => {
          expect(err.message).toBe('async error')
          done()
        })
    })
  })
})
