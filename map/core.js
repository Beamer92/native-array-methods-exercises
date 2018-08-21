function multiplyBy10 (array) {
  return array.map(x => x * 10)
};

function shiftRight (array) {
// return array.map(x =>)
};

function onlyVowels (array) {
 return array.map(x =>
   {
    let y = x.split('')
    y = y.filter(y=> (y === 'a' || y=== 'e' || y=== 'i' || y==='o' || y==='u'))
    return y.join('')
  })
};

function doubleMatrix (array) {
 //return array.map()
};

module.exports = {
  multiplyBy10: multiplyBy10,
  shiftRight: shiftRight,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix
};
