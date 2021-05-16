function memoizer(fun) {
  let cache = {}
  return function (n) {
    if (cache[n] != undefined) {
      return cache[n]
    } else {
      let result = fun(n)
      cache[n] = result
      return result
    }
  }
}

const fibSlow = (n) => {
  return n <= 1 ? n : fibSlow(n - 1) + fibSlow(n - 2)
}

const fibonacciMemoFunction = memoizer(fibSlow)

const resultSlow = fibonacciMemoFunction(30)
console.log('result slow: ', resultSlow)
