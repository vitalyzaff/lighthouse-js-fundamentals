const instructorWithLongestName = function(instructors){
  let longest = instructors[0].name 
  let indexOfLonges = 0; 
    for(let i = 0; i < instructors.length; i++){ 
      if (instructors[i].name.length > longest.length){ 
      longest = instructors[i].name;
      indexOfLongest = i; 
    } 
  } return instructors[indexOfLongest];
};

console.log(instructorWithLongestName([
{name: "Samuel", course: "iOS"},
{name: "Jeremiah", course: "Web"},
{name: "Ophilia", course: "Web"},
{name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
{name: "Matthew", course: "Web"},
{name: "David", course: "iOS"},
{name: "Domascus", course: "Web"}
])); 