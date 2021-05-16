// const A = [3, 2, -6, 4, 0]
const A = [5, -7, 3, 5, -2, 4, -1]
function solution(A) {
  const newArr = []
  let sum = 0

  // getting cumulative sum is not the best solution
  // get prefix sum (or cumulative sum)
  for (let i = 0; i <= A.length - 1; i++) {
    console.log('i: ', i)
    console.log('A: ', A[i])
    sum = sum + A[i]
    newArr.push(sum)
  }

  // best solution starts here
  // get the max slice that ends on the i'th position
  let max_ending = 0
  let max_slice = 0
  for (let i = 0; i <= A.length - 1; i++) {
    max_ending = Math.max(0, max_ending + A[i])
    max_slice = Math.max(max_slice, max_ending)
    console.log('i: ', i)
    console.log('max_ending: ', max_ending)
    console.log('max_slice: ', max_slice)
  }
  console.log('max_ending: ', max_ending)
  console.log('max_slice as the answer: ', max_slice)
  return newArr
}

const result = solution(A)

console.log('result: ', result)
