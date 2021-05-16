function removeTrailingZeroes(s) {
  let index
  for (index = s.length - 1; index >= 0; index--) {
    if (s.charAt(index) != '0') {
      break
    }
  }
  return s.substring(0, index + 1)
}

const result = removeTrailingZeroes('100000')

console.log('result: ', result)
