// https://javascript.info/task/fibonacci-numbers

// This will take really slow
// fibSlow
const fibSlow = (n) => {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2)
}

// console.log(fibSlow(3)) // 2
// console.log(fibSlow(7)) // 13
// fib(77); // will be extremely slow!
