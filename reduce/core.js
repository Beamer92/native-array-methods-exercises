function sum (array) {
  return array.reduce(x = (a,b) => a+b)
}

function productAll (array) {
  return array.map(x => x.reduce (y = (a,b) => a*b)
    ).reduce(z = (a,b) => a*b)
}

function objectify (array) {
  // your code here

}

function luckyNumbers (array) {
  // your code here
}


module.exports = {
  sum: sum,
  productAll: productAll,
  objectify: objectify,
  luckyNumbers: luckyNumbers
};
