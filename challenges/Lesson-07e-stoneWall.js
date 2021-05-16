// const N = meters long
// const T = thickness is constant

const H = [8, 8, 5, 7, 9, 8, 7, 4, 8]

function solution(H) {
  var stack = []
  let head = -1
  let block = 0
  let i = 0
  while (i < H.length) {
    console.log('stack: ', stack)
    console.log('block: ', block)
    console.log('head: ', head)
    var h = H[i]
    console.log('h: ', h)
    if (head < 0) {
      ++head
      stack[head] = h //stack push
      ++i
    } else if (stack[head] == h) {
      ++i
    } else if (stack[head] < h) {
      ++head
      stack[head] = h //stack push
      ++i
    } else {
      //stack[head] > h
      --head //stack pop
      ++block
    }
    console.log('stack2: ', stack)
    console.log('block2: ', block)
    console.log('head2: ', head)
  }
  return block + head + 1
}
const result = solution(H)

console.log('result: ', result)
