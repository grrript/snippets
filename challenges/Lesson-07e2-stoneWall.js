const H = [8, 8, 5, 7, 9, 8, 7, 4, 8]

function solution(H) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (H.length < 1) return 0

  let stack = [H[0]] // initial height
  let nb = 1 // number of blocks

  for (let i = 1; i < H.length; i++) {
    console.log('number of blocks: ', nb)
    console.log('H[i]: ', H[i])
    while (stack.length && stack[stack.length - 1] >= H[i]) {
      console.log('stack1: ', stack)
      if (stack[stack.length - 1] == H[i]) nb--
      stack.pop() // remove bigger stack heights
    } // until stack last height < current height
    console.log('stack2: ', stack)
    stack.push(H[i]) // add current height
    console.log('stack3: ', stack)
    nb++
  }

  return nb
}

const result = solution(H)

console.log('result: ', result)
