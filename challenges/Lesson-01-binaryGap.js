// https://app.codility.com/programmers/lessons/

function binaryFunc(num) {
  return num.toString(2)
}

const num = -9

const num32 = 32

function stringSplit(s, divider) {
  // divider is the character like '1' oir '-'
  const result = s.split(divider)

  return result
}

function removeFirstItemMutate(arr) {
  arr.shift()
  return arr
}

function removeLastItemMutate(arr) {
  arr.pop()
  return arr
}

function binaryGap(n) {
  // step 1. convet to binary string
  const binaryString = binaryFunc(n)

  // step 2. convert to array by splitting based on delimeter '1'
  const newArr = stringSplit(binaryString, '1')

  // step 3. remove first item, if binary starts with 1, the first item will be '', so we need to remove it for any use case
  const newArr2 = removeFirstItemMutate(newArr)

  // step 4.
  // remove last  item, if binary ends with 1, the last item will be '', so we need to remove it for any use case
  // if it ends in 0, all the more we need to remove it. Hence, we always remove the last item for all use cases
  const newArr3 = removeLastItemMutate(newArr2)

  // step 5. convert array from values of 'zeroes' to values of length of zeroes
  // option 1 using map
  const newArr4 = newArr3.map((item) => {
    return item.length
  })
  // step 5 option 2
  // option 2 using for loop
  let newArr5 = []
  for (i = 0; i < newArr3.length; i++) {
    newArr5.push(newArr3[i].length)
  }

  console.log('newArr5: ', newArr5)

  // step 6. get max value in the array
  if (newArr4.length === 0) {
    return 0
  } else {
    return Math.max(...newArr4)
  }
}

const result = binaryGap(4034384834834834)
