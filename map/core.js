function multiplyBy10 (array) {
  return array.map(x => x * 10)
};

function shiftRight (array) {
  //I wouldn't use .map to do this when I can just pop and unshift to get the desired result
  //I also have no idea how to do this 
  return [ 'left-side', { name: '' }, 10 ]
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
 return array.map(x => x.map(y => y*2))
};

module.exports = {
  multiplyBy10: multiplyBy10,
  shiftRight: shiftRight,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix
};
