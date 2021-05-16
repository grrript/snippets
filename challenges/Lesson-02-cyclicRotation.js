const arr = [1, 2, 3, 4]

// step 1.
// get 1st item and then move to the last

const firstEl = arr.shift()
console.log('orignal arr 1: ', arr)
arr.push(firstEl)

console.log('orignal arr 2: ', arr)

function cyclicRotation(A, K) {
  for (i = 1; i <= K; i++) {
    console.log('i: ', i)

    let firstEl = A.shift()
    A.push(firstEl)
    console.log('A: ', A)
    console.log('K: ', K)
    console.log('-------')
  }
  return A
}
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const result = cyclicRotation(arr2, 3)
console.log('result: ', result)
