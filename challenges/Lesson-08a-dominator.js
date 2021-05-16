const A = [3, 4, 3, 2, 3, -1, 3, 3]

function makeArr() {
  let A = []
  A[0] = 3
  A[1] = 4
  A[2] = 3
  A[3] = 2
  A[4] = 3
  A[5] = -1
  A[6] = 3
  A[7] = 3
  return A
}
function solution(A) {
  let arrLength = A.length
  let maxCount = 0
  let leader

  const lookupTable = A.reduce((acc, item) => {
    let count = 0
    if (!acc[item]) {
      count = 0
    } else {
      count = acc[item]
      if (count + 1 > maxCount) {
        maxCount = count + 1
        leader = item
      }
    }
    return {
      ...acc,
      [item]: count + 1,
    }
  }, {})
  console.log('maxCount: ', maxCount)
  console.log('leader: ', leader)
  console.log('arrLength: ', arrLength)
  console.log('lookupTable: ', lookupTable)
  return A
}

const B = makeArr()
console.log('B: ', B)
const result = solution(A)

console.log('result: ', result)
