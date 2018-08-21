function onlyEven (array) {
  return array.filter(x => x % 2 ===0)
};

function onlyOneWord (array) {
  return array.filter(x => x.includes(' ') === false)
};

function positiveRowsOnly (array) {
  return array.filter(x => x.some(y => y < 0) === false )
};

function allSameVowels (array) {

  return array.filter( x => {
  const isVowel = function(a) {
   let vowels = ['a', 'e', 'i', 'o', 'u']
   return vowels.includes(a)
  }

  let ivowels = x.split('').filter(x => isVowel(x) === true)

  if(ivowels.every(z => z === ivowels[0]) === true)
  {
    return true
  }
  else
  {
    return false
  }
})


};

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  allSameVowels: allSameVowels
};
