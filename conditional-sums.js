const conditionalSum = function(values, condition) {
  let array = values; 
  let evenArray = [];
  let oddArray = [];
  let sumEven = 0;
  let sumOdd = 0;
    if (condition === 'even'){
    for(let i = 0; i < array.length; i++){
      if(array[i] % 2 === 0){
        evenArray.push(array[i]);
        sumEven = evenArray.reduce(function(a, b){
          return a + b;
            }, 0);
      };
    }; return sumEven;
  } else if (condition === 'odd'){
    for(let i = 0; i < array.length; i++){
      if(array[i] % 2 !== 0){
        oddArray.push(array[i]);
        sumOdd = oddArray.reduce(function(a, b){
          return a + b;
            }, 0);
      };
    }; return sumOdd;
  }; 
};


console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));

