const sumLargestNumbers = function(data) {
  let largest = 0;
  let secondLargest = 0;
  let newArr = data;
  for (i = 0; i <= largest; i++){
    if (newArr[i] > largest) {
        largest = newArr[i];
    }
  };
  const index = newArr.indexOf(largest);
    if (index > -1) {
    newArr.splice(index, 1);
    };
    for (i = 0; i <= secondLargest; i++){
      if (newArr[i] > secondLargest) {
          secondLargest = newArr[i];
      }
    };
    return largest + secondLargest;
    
};


console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

