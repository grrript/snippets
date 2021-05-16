const arr = [6, 3, 5, 7]
function missingElem(A) {
  const B = A.sort()
  let lastInteger = B[0]
  const C = B.find((item, index) => {
    return item - lastInteger > 1
  })

  return C - 1
}

const result = missingElem(arr)

console.log('result: ', result)
