function removeLeadingZeroes(s) {
  let index
  for (index = 0; index < s.length; index++) {
    if (s.charAt(index) != '0') {
      break
    }
  }
  return s.substring(index)
}

const result = removeLeadingZeroes('0001000')

console.log('result: ', result)
