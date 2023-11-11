function multiplyBy10(array) {
  return array.map(element => element *= 10);
}

function shiftRight(array) {
  return array.map( (element, index, array) => array[(index + array.length - 1) % array.length]);
}

function onlyVowels(array) {
  return array.map(element => element.replace(/[^aeiou]/ig, ''));
}

function doubleMatrix(array) {
  return array.map( (element) => 
    element.map((subelement) => subelement *= 2)
  );
}

module.exports = {
  multiplyBy10,
  shiftRight,
  onlyVowels,
  doubleMatrix
};
