const arr = [1, 3, 2, 3, 5, 4, 5, 3, 3, 3, 4]
function frogRiverOne(X, A) {
  let time = -1
  let lookupTable2 = {}

  const needle = A.find((item, index) => {
    lookupTable2[item] = 1
    const size = Object.keys(lookupTable2).length
    console.log('size xxx: ', size)
    console.log('index xxx: ', index)
    if (size === X) {
      time = index + 1
      return index
    }
  })

  return time
}

const result = frogRiverOne(6, arr)

console.log('result: ', result)
