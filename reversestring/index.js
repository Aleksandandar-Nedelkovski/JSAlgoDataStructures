// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   let letters = str.split("");
//   //turn string into an array
//   let reversed  = letters.reverse();
//   //call 'reverse' method on the array
//   let reversedWord = reversed.join("");
//   //join the array back into a string
//   console.log(reversedWord)
//   return reversedWord
// }

// function reverse(str) {
//   return str.split("").reverse().join('');
// }

// function reverse(str) {
//   debugger;
//   return str.split('').reduce((rev, char) => char + rev, '');
// }

function reverse(str) {
  let reversed = '';
  for (let character of str) {
    reversed = character + reversed;
  }
  console.log(reversed)
  return reversed
}

module.exports = reverse;


  // function reverse(str) {
  //   let reversed = '';
  //   for(let character of str ) {
  //     reversed = character + reversed;
  //   }
  //   console.log(reversed)
  //   return(reversed)
  // }