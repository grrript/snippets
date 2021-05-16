function fibonacciMemoized(n, memo) {
  memo = memo || {}
  console.log('memo: ', memo)
  if (memo[n]) {
    console.log('memo if: ', memo)
    return memo[n]
  }
  if (n <= 1) {
    return 1
  }

  return (memo[n] =
    fibonacciMemoized(n - 1, memo) + fibonacciMemoized(n - 2, memo))
}

const result = fibonacciMemoized(10)

console.log('result: ', result)
