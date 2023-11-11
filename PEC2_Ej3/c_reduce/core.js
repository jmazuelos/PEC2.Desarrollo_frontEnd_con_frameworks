function sum(array) {
  return array.reduce( (total, element) => total + element);
}

function productAll(array) {
  return array.map( matrixElement => matrixElement.reduce( (subtotal, subelement) => subtotal * subelement))
              .reduce( (total, element) => total * element);
}

function objectify(array) {
  return array.reduce((object, element) => ({...object, [element[0]]: element[1]}), {});
}

function luckyNumbers(array) {
  return 'Your lucky numbers are: '.concat(array.reduce((string, element , index, arr) => index == arr.length-1 ? (string + ", and " + (element).toString()) : (string + ", " + (element).toString()) ))
}

module.exports = {
  sum,
  productAll,
  objectify,
  luckyNumbers
};
