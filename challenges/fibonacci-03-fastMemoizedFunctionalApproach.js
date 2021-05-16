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

// the problem with this it will loop from n to 1 with the memo still empty {}
// and then it will do another loop from n to 1 again, this time with the cache populated with values
function fibonacciMemoized(n, memo) {
  memo = memo || {}
  // console.log('memo: ', memo)
  if (memo[n]) {
    // console.log('memo if: ', memo)
    return memo[n]
  }
  if (n <= 1) {
    return 1
  }

  return (memo[n] =
    fibonacciMemoized(n - 1, memo) + fibonacciMemoized(n - 2, memo))
}

const fibonacciMemoFunction = memoizer(fibonacciMemoized)

const resultFast = fibonacciMemoFunction(240)
console.log('result Fast: ', resultFast)
