// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// solution 1
function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = ''
    debugger;
    for (let col = 0; col < n; col++) {
      debugger;
      if (col <= row) {
        stair +=  "#";
      } else {
        stair += " "
      }
    }
    console.log(stair)
  }
}

//solution 2
// function steps(n, row = 0, stair = '') {
//   if (n === row) {
//     return;
//   }
//   if (n === stair.length) {
//     console.log(stair);
//     return steps(n, row + 1);
//   }
//   const add = stair.length <= row ? '#' : ' ';
//   steps(n, row, stair + add);
// }

module.exports = steps;