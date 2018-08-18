// Check to see if all elements in an array
// are even numbers.

function allEven (input) {
  return input.every(x => x % 2 === 0);
};

// Check to see if all elements in an array
// are of the same type.

function allSameType (input) {
  return input.every(x => typeof(input[0]) === typeof(x));
};

// Check to see if every element in the matrix is
// an array and that every element in the array is
// greater than 0.

function positiveMatrix (input) {
  return input.every(x => Array.isArray(x) === true && x.every(y => y>0) === true);
};

// Check that all items in an array are strings
// and that they all only contain the same vowels.

function allSameVowels (input) {
  return input.every(function(item) {
    if(typeof(item) === 'string')
    {

      const isVowel = function(a) {
       let vowels = ['a', 'e', 'i', 'o', 'u']
       return vowels.includes(a)
      }

      let ivowels = item.split('').filter(x => isVowel(x) === true)

      if(ivowels.every(z => z === ivowels[0]) === true)
      {
        return true
      }
      else
      {
        return false
      }

    }
    else
    {
      return false
    }

  })
}

module.exports = {
  allEven,
  allSameType,
  positiveMatrix,
  allSameVowels
};
