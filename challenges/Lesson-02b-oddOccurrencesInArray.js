const arr = [1, 4, 3, 4, 6, 3, 6, 4, 10, 1, 10]

function oddOccurrencesInArray(A) {
  const lookupTable = A.reduce((acc, item) => {
    let count = 0
    if (acc[item]) {
      count = acc[item]
    }
    return {
      ...acc,
      [item]: count + 1,
    }
  }, {})

  for (const property in lookupTable) {
    console.log('loop: ', `${property}: ${lookupTable[property]}`)
    if (lookupTable[property] === 1) {
      return property
    }
  }
  return 'no unique value'
}

const result = oddOccurrencesInArray(arr)
console.log('result: ', result)
