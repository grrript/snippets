// keyword : divisor , square root
function solution(N) {
  const newArr = []
  let count = 0
  for (let i = 1; i * i <= N; i++) {
    console.log('i: ', i)
    if (N % i === 0) {
      console.log('i: ', i)
      count++
    }
  }
  return count
}

const result = solution(35)

console.log('result: ', result)
