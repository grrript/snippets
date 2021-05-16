A = [23171, 21011, 21123, 21366, 21013, 21367]

function cumProfit() {
  const B = []
  let profit = 0
  for (let i = 0; i <= A.length - 1; i++) {
    if (i === 0) {
      profit = 0
    } else {
      profit = A[i] - A[i - 1]
    }
    B.push(profit)
  }

  return B
}
const C = cumProfit()
console.log('C: ', C)
function solution(A) {
  // best solution starts here
  // get the max slice that ends on the i'th position
  let max_ending = 0
  let max_slice = 0
  let profit = 0
  for (let i = 0; i <= A.length - 1; i++) {
    if (i > 0) {
      profit = A[i] - A[i - 1]
    }
    max_ending = Math.max(0, max_ending + profit)
    max_slice = Math.max(max_slice, max_ending)

    console.log('i: ', i)
    console.log('max_ending: ', max_ending)
    console.log('max_slice: ', max_slice)
  }
  console.log('max_ending: ', max_ending)
  console.log('max_slice as the answer: ', max_slice)
  return max_slice
}

const result = solution(A)

console.log('result: ', result)
