function onlyEven(array) {
  return array.filter( element => element % 2 === 0);
}

function onlyOneWord(array) {
  return array.filter( element => !element.includes(" "));
}

function positiveRowsOnly(array) {
  return array.filter( element => 
    element.every( subelement => subelement > 0) 
  );
}

function allSameVowels(array) {
  return array.filter( element => (element.includes("a") && !/[eiou]/.test(element)) || 
  (element.includes("e") && !/[aiou]/.test(element)) || 
  (element.includes("i") && !/[aeou]/.test(element)) ||
  (element.includes("o") && !/[aeiu]/.test(element)) ||
  (element.includes("u") && !/[aeio]/.test(element)) 
  );
}

module.exports = {
  onlyEven,
  onlyOneWord,
  positiveRowsOnly,
  allSameVowels
};
