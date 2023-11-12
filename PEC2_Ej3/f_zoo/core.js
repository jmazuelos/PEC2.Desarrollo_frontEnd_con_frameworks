const { prices, hours, animals } = require("./data");

function entryCalculator(entrants) {
  return entryCalculator.arguments.length === 0 || Object.keys(entrants).length === 0 ? 0 : 
  prices.Adult * entrants.Adult + prices.Child * entrants.Child + prices.Senior * entrants.Senior;
}

function schedule(dayName) {
  let obj = {};
  Object.keys(hours).forEach(key => {
    obj[key] = key === 'Monday' ? 'CLOSED' : 'Open from ' + hours[key].open + 'am until ' + (hours[key].close % 12) + 'pm';  
  });
  return schedule.arguments.length === 0 ? obj : {[dayName] : obj[dayName]};
}

function animalCount(species) {
  let obj = {};
  animals.forEach(elem => {
    obj[elem.name] = elem.residents.length;
  })
  return animalCount.arguments.length === 0 ? obj : obj[species];
}

function animalMap(options) {
  let obj = {};
  animals.forEach(elem => {
    if(obj.hasOwnProperty(elem.location))
      obj[elem.location].push(elem.name);
    else
      obj[elem.location] = [elem.name];
  });

  if(animalMap.arguments.length === 0) return obj;
}
console.log(animalMap());
function animalPopularity(rating) {
  // your code here
}

function animalsByIds(ids) {
  // your code here
}

function animalByName(animalName) {
  // your code here
}

function employeesByIds(ids) {
  // your code here
}

function employeeByName(employeeName) {
  // your code here
}

function managersForEmployee(idOrName) {
  // your code here
}

function employeeCoverage(idOrName) {
  // your code here
}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalPopularity,
  animalsByIds,
  animalByName,
  employeesByIds,
  employeeByName,
  managersForEmployee,
  employeeCoverage
};
