// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// console.log(Math.sign('-3'));
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign
// parseInt
// toString()

function reverseInt(n) {
  let reversed = n.toString().split('').reverse().join('')
  return parseInt(reversed) * Math.sign(n)
}

module.exports = reverseInt;