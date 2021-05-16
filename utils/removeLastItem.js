// original array is not mutated
function removeLastItem(arr) {
  let newArray = [...arr]

  // pop will mutate the newArray
  newArray.pop()
  return newArray
}

const arr = ['000', '00', '00000', '']

const result = removeLastItem(arr)
console.log('original arr: ', arr)
console.log('result: ', result)

// ------------------------------------------
const arr2 = ['000', '00', '00000', '']

function removeLastItemMutate(arr) {
  arr.pop()
  return arr
}

// mutating is faster though
const result2 = removeLastItemMutate(arr2)
console.log('original arr2: ', arr2)
console.log('result2: ', result2)
