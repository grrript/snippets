function stringSplit(s, divider) {
  // divider is the character like '1' oir '-'
  const result = s.split(divider)

  return result
}

const s = '00100010010001'
const result = stringSplit(s, '1')

console.log('s: ', s)
console.log('result: ', result)

console.log('original result: ', result)

function stringSplitBasedOnMultipleCharacters(s) {
  return s.split(/([!,?,.])/)
}

const result3 = stringSplitBasedOnMultipleCharacters(
  'hey there! Rocks. Is is Rocks? I miss you.'
)
console.log('result 3: ', result3)
