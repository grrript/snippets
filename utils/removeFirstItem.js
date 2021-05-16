function removeFirstItem(arr) {
  const [, ...rest] = arr
  return rest
}

const arr = ['000', '00', '00000', '']
const result = removeFirstItem(arr)

console.log('result: ', result)
console.log('orgin arr: ', arr)

function removeFirstItem2(arr) {
  arr.shift()
  return arr
}

const arr2 = ['000', '00', '00000', '']
const result2 = removeFirstItem2(arr2)

console.log('result2: ', result2)
console.log('orgin arr2: ', arr2)
