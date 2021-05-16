const S = 'CAGCCTA'
const P = [2, 5, 0]
const Q = [4, 5, 6]

function dnaSequence(S, P, Q) {
  const sequence = S.split('')
  console.log('sequence: ', sequence)
  const newArr = []
  function impactFactor(letter) {
    switch (letter) {
      case 'A':
        return 1
      case 'C':
        return 2
      case 'G':
        return 3
      case 'T':
        return 4
    }
  }
  for (i = 0; i <= P.length - 1; i++) {
    const indexP = P[i]
    const indexQ = Q[i]
    const pLetter = sequence[indexP]
    const qLetter = sequence[indexQ]
    const pImpactFactor = impactFactor(pLetter)
    const qImpactFactor = impactFactor(qLetter)
    const minimalImpactFactor = Math.min(pImpactFactor, qImpactFactor)
    newArr.push(minimalImpactFactor)
  }

  return newArr
}

const result = dnaSequence(S, P, Q)

console.log('result: ', result)
