const A = [1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]
K = 3
let newArrLength = 0
let lastIndexWithFlag = 0
function solution(A) {
  const newArr = []
  for (let i = 1; i <= A.length - 1; i++) {
    if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
      if (newArrLength === 0) {
        newArr.push(i)
        lastIndexWithFlag = i
      }
      console.log('i: ', i)
      console.log('newArr: ', newArr)
      console.log('lastIndexWithFlag: ', lastIndexWithFlag)

      newArrLength = newArr.length
      if (newArrLength > 0) {
        if (i - lastIndexWithFlag > K) {
          newArr.push(i)
          lastIndexWithFlag = i
        }
      }
    }
  }
  console.log('newArr: ', newArr)
  return newArr.length + ' maximum flags'
}

const result = solution(A)

console.log('result: ', result)
