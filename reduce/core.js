function sum (array) {
  return array.reduce(x = (a,b) => a+b)
}

function productAll (array) {
  return array.map(x => x.reduce (y = (a,b) => a*b)
    ).reduce(z = (a,b) => a*b)
}

function objectify (array) {
  return array.reduce(function(acc, cur, i){
   acc[cur[0]] = cur[1]
   return acc
}, {})

}

function luckyNumbers (array) {
  let str = 'Your lucky numbers are: '
  return array.reduce(function(acc, cur, i){

  if(i === array.length-1) {
    acc += 'and ' + cur
  }
  else {
    acc += cur + ', '
  }
  return acc

}, str)
}


module.exports = {
  sum: sum,
  productAll: productAll,
  objectify: objectify,
  luckyNumbers: luckyNumbers
};
