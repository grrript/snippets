const arr = [3, 4, 4, 6, 1, 4, 4]
// N = number of counters
// A = array of numbers
function maxCounters(N, A) {
  let countersArr = [0, 0, 0, 0, 0]
  arr.map((item) => {
    if (item > N) {
      const maxValue = Math.max(...countersArr)
      for (i = 0; i <= N - 1; i++) {
        countersArr[i] = maxValue
      }
    } else {
      countersArr[item - 1] = countersArr[item - 1] + 1
    }
  })
  return countersArr
}

const result = maxCounters(5, arr)

console.log('result: ', result)
