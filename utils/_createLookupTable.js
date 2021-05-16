// title: Creating a lookupTable using reduce

// this will convert the sampleArray into an object with key the same as the value

const sampleArray = [3, 4, 6, 7, 1]

// this more concise but more difficult to understand
const lookupTable1 = sampleArray.reduce(
  (acc, item) => ((acc[item] = item), acc),
  {}
)

// note: lookupTable and lookupTable1 are exactly the same.
// lookupTable1 is using the spread operator, the lookupTable is using the implicit return

// this version is easier to understand:
const lookupTable = sampleArray.reduce((acc, item) => {
  return {
    ...acc,
    [item]: item,
  }
}, {})

console.log('lookupTable: ', lookupTable)

// lookupTable becomes
// lookupTable = { '1': 1, '3': 3, '4': 4, '6': 6, '7': 7}
// you can now find any item as follows:

// num as key

// lookupTable[num]
