function frogJump(X, Y, D) {
  const distance = Y - X
  const jumps = distance / D
  return Math.ceil(jumps)
}

const result = frogJump(70, 90, 30)

console.log('result: ', result)
