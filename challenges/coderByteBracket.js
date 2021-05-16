function BracketMatcher(str) {
  const newArr = []
  const answer = 0
  for (let i = 0; i <= str.length - 1; i++) {
    const letter = str.charAt(i)

    if (letter === '(') {
      newArr.push(letter)
    }

    if (letter === ')') {
      if (newArr.length > 0) {
        if (newArr[newArr.length - 1] === '(') {
          newArr.pop()
        }
        if (newArr[newArr.length - 1] === ')') {
          newArr.push(letter)
        }
      } else {
        // newArr is empty
        if (letter === ')') {
          return 0
        }
      }
    }

    console.log('newArr: ', newArr)
  }

  if (newArr.length === 0) {
    return 1
  } else {
    return 0
  }
}

const result = BracketMatcher('(coder)(byte))')
console.log('result: ', result)
