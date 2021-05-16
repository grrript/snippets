const S = '[(())]}'

function solution(S) {
  const openParenthesis = '('
  const closeParenthesis = ')'
  const openCurlyBrace = '{'
  const closeCurlyBrace = '}'
  const openBracket = '['
  const closeBracket = ']'
  const bufferArr = []
  const S_Arr = S.split('')
  let lastItemInBuffer = ''
  const wrongNesting = 1

  function isAPair(x, y) {
    if (x === openParenthesis && y === closeParenthesis) {
      return true
    }
    if (x === openCurlyBrace && y === closeCurlyBrace) {
      return true
    }
    if (x === openBracket && y === closeBracket) {
      return true
    }
    return false
  }

  for (i = 0; i <= S_Arr.length - 1; i++) {
    lastItemInBuffer = bufferArr[bufferArr.length - 1]
    const currentItem = S_Arr[i]
    switch (currentItem) {
      case openParenthesis:
        bufferArr.push(S_Arr[i])
        break
      case closeParenthesis:
        if (isAPair(lastItemInBuffer, closeParenthesis)) {
          bufferArr.pop()
        } else {
          return wrongNesting
        }
        break
      case openCurlyBrace:
        bufferArr.push(S_Arr[i])

        break
      case closeCurlyBrace:
        if (isAPair(lastItemInBuffer, closeCurlyBrace)) {
          bufferArr.pop()
        } else {
          return wrongNesting
        }
        break
      case openBracket:
        bufferArr.push(S_Arr[i])
        break
      case closeBracket:
        if (isAPair(lastItemInBuffer, closeBracket)) {
          bufferArr.pop()
        } else {
          return wrongNesting
        }
        break
      default:
    }
  }
  return bufferArr.length
}

const result = solution(S)

console.log('result: ', result)
