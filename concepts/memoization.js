// memoizaton docs:

// https://scotch.io/tutorials/understanding-memoization-in-javascript

// The concept of memoization in JavaScript is built primarily on two concepts. They are:
// 1. Closures
// 2. Higher Order Functions(returning functions from functions)

// What is Closure?
// A closure is the combination of:
// 1. a function and
// 2. the lexical environment within which that function was declared.

/* This foo demonstrates closure.
  bar has a closure over the scope of foo
*/
function foo(a) {
  var b = a + 2
  function bar(c) {
    console.log(a, b, c)
  }
  bar(b * 2)
}

foo(3) // 3, 5, 10

// --------------------------------------------------------
// What is Higher Order Function
// Functions that operate on other functions, either by
// 1. taking them as arguments or
// 2. by returning them,
// are called higher-order functions.

function foo2() {
  var a = 2

  function bar() {
    console.log(a)
  }
  return bar
}
var baz = foo2()
baz() //2
