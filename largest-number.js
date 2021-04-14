let array = [3 , 6, 2, 56, 32, 5, 89, 32];
let largest = 0;
let secondLargest = 0;

for (i = 0; i <= largest; i++){
    if (array[i] > largest) {
        largest = array[i];
    }
}

const index = array.indexOf(largest);
if (index > -1) {
  array.splice(index, 1);
}

for (i = 0; i <= secondLargest; i++){
  if (array[i] > secondLargest) {
       secondLargest = array[i];
  }
}

console.log(largest + secondLargest);