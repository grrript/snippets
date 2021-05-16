// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const distinctValues = [...new Set(A)]
  const lookupTable = A.reduce((acc, item) => ((acc[item] = item), acc), {})

  console.log('lookupTable: ', lookupTable)
  for (let step = 1; step < distinctValues.length + 1; step++) {
    if (!lookupTable[step]) {
      return step
    }
    if (step === distinctValues.length) {
      return step + 1
    }
  }
}
