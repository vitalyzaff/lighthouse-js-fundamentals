const ageCalculator = function(name, yearOfBirth, currentYear){
   let currentAge = currentYear - yearOfBirth; 
  return `${name} is ${currentAge} years old.`
}