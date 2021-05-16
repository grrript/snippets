const arr = [-6, 3, 5, 7]
function tapeEquilibrium(A) {
  const arrLength = arr.length
  let cumulativeSum = []
  const _sum = A.reduce((sum, item, index) => {
    console.log(index)
    console.log('item: ', item)
    if (index < arrLength - 1) {
      cumulativeSum.push(sum + item)
    }
    return sum + item
  }, 0)

  console.log('cumulativeSum: ', cumulativeSum)

  const P = cumulativeSum.map((item, index) => {
    console.log('P item: ', item)
    console.log('_sum: ', _sum)
    console.log('cumulativeSum[index]: ', cumulativeSum[index])
    return Math.abs(_sum - 2 * cumulativeSum[index])
  })
  console.log('P: ', P)
  return Math.min(...P)
}

const result = tapeEquilibrium(arr)

console.log('result: ', result)
