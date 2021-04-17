const numberOfVowels = function(data) {
  let string = data;
  let num = 0;
  for(let i = 0; i < string.length; i++){
    switch(string[i]){
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        num += 1;
        break;
    }
  }
  return num;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));

// a e i o u
// 1) loop through characters 
// 2) if matches one of characters +1

// for(let i = 0; i < string.length; i++){
//   switch(string[i]){
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//       num += 1;
//       break;
//   }
// }
