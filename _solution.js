const A = [1, 2, 3]
function solution(A) {
  const newArr = []
  for (let i = 0; i <= A.length - 1; i++) {
    console.log('i: ', i)

    newArr.push(A[i])
  }
  return newArr
}

const result = solution(A)

console.log('result: ', result)
