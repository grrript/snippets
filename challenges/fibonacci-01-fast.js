// https://javascript.info/task/fibonacci-numbers

// fibFast
// using for loop and counter start from 1 to n rather than n to 1
// bottom up dynamic programming
const fibFast = (n) => {
  let a = 1
  let b = 1
  for (let i = 3; i <= n; i++) {
    let c = a + b
    a = b
    b = c
  }
  return b
}

// console.log('one: ', fibFast(1))
// console.log('two: ', fibFast(2))
// console.log('three: ', fibFast(3))
// console.log('four: ', fibFast(4))
// console.log('five: ', fibFast(5))
// console.log('six: ', fibFast(6))
console.log('240: ', fibFast(240))
// alert(fibFast(3)) // 2
// alert(fibFast(7)) // 13
// alert(fibFast(77)) // 5527939700884757
