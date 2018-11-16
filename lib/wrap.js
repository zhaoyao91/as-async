module.exports = function (fn) {
  return async function (...args) {
    return await fn(...args)
  }
}
