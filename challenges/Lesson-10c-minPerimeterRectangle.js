// keyword : divisor , square root
function solution(N) {
  const newArr = []
  let count = 0
  let minPerimeter = 2 * (N + 1)
  for (let i = 1; i * i <= N; i++) {
    console.log('i: ', i)
    if (N % i === 0) {
      console.log('i: ', i)
      count++
      const perimeter = 2 * (i + N / i)
      minPerimeter = Math.min(perimeter, minPerimeter)
    }
  }
  return minPerimeter
}

const result = solution(30)

console.log('result: ', result)
