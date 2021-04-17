const urlEncode = function(text) {
  let newString = "";
  let space = "%20";
  text = text.trim();
  for(let i = 0; i < text.length; i++){
    if(text[i] === " ") {
      newString += space;
    } else {
      newString += text[i];
    }
  }
  return newString;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));



// 1) loop through string
// 2) if string[i] === ''; string[i]  = %20


// let string = "Lighthouse Labs";
// let newString = "";
// let space = "%20";
// for(let i = 0; i < string.length; i++){
//   if(string[i] === " "){
//     newString += space;
//   } else {
//     newString += string[i];
//   }
// }



// let newString = string.replace(/ /g, '%20');
// console.log(newString);

// for(let i = 0; i < string.length; i++){
//   console.log(string[i]);
// }


// let urlEncode = function(text) {
//   return text
//     .trim()
//     .split(" ")
//     .join("%20");
// };

// console.log(urlEncode("blue is greener than purple for sure"));