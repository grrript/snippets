// this will convert the sampleArray into an object with key the same as the value

const sampleArray = [3, 4, 6, 7, 1]
const lookupTable = sampleArray.reduce(
  (acc, item) => ((acc[item] = item), acc),
  {}
)

console.log('lookupTable: ', lookupTable)
// lookupTable becomes
// lookupTable = { '1': 1, '3': 3, '4': 4, '6': 6, '7': 7}
// you can now find any item as follows:

// num as key

// lookupTable[num]

const lookupTable2 = sampleArray.reduce((acc, item) => {
  return {
    ...acc,
    [item]: item,
  }
}, {})

console.log('lookupTable2: ', lookupTable2)

const sum = sampleArray.reduce((acc, item) => item + acc, 0)

console.log('sum: ', sum)

const obj1 = {}

obj1['test'] = 'test'
