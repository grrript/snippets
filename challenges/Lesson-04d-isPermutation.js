const arr = [4, 1, 3, 6, 2, 5]
// N = number of counters
// A = array of numbers
function isPermutation(A) {
  let isPerm = 1 // true
  const newArr = A.sort()
  for (i = 0; i <= A.length - 1; i++) {
    if (newArr[i] != i + 1) {
      isPerm = 0
    }
  }
  return isPerm
}

const result = isPermutation(arr)

console.log('result: ', result)
