const A = [4, 3, 2, 1, 5, 7, 6, 9]
const B = [0, 1, 0, 0, 1, 0, 0, 0]

function voraciousFish(A, B) {
  const upFishes = []
  const upFishesBySize = []
  const downFishes = []
  const downFishesBySize = []
  // B = 0 is upstream
  B.map((item, index) => {
    if (item === 0) {
      upFishes.push({ fish: index, size: A[index] })
      upFishesBySize.push(A[index])
    } else {
      downFishes.push({ fish: index, size: A[index] })
      downFishesBySize.push(A[index])
    }
  })

  const newArr = []
  const lookupFishes = A.reduce((acc, item, index) => {
    return {
      ...acc,
      [item]: { fish: index, size: item, direction: B[index] },
    }
  }, {})

  let biggestFishDownstream = Math.max(...downFishesBySize)
  let biggestFishUpstream = Math.max(...upFishesBySize)

  if (biggestFishDownstream < biggestFishUpstream) {
    directionWithBiggestFish = 'upstream'
  } else {
    directionWithBiggestFish = 'downstream'
  }
  let newUpFishesBySize = []

  for (i = 0; i <= A.length - 1; i++) {
    if (directionWithBiggestFish === 'downstream') {
      newUpFishesBySize = downFishesBySize.filter((item) => {
        return item < biggestFishDownstream ? false : true
      })
    }

    if (directionWithBiggestFish === 'upstream') {
      newUpFishesBySize = upFishesBySize.filter((item) => {
        return item < biggestFishDownstream ? false : true
      })
    }
  }

  return newUpFishesBySize
}

const result = voraciousFish(A, B)
console.log('result: ', result)
