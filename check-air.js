const checkAir = function (samples, threshold) {
  let dirtyAir = 0;
  for(let i = 0; i < samples.length; i++){
    if(samples[i] === 'dirty'){
      dirtyAir ++;
    } 
  } 
    let sampleSize = dirtyAir / samples.length;
    if(sampleSize > threshold){
      return 'Polluted';
    } else {
      return 'Clean';
    }
  
};



console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))


let air = ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'];
let dirtyAir = 0;
let sampleSize = 0;
let threshold = 0.3;

for(let i = 0; i < air.length; i++){
  if(air[i] === 'dirty'){
    dirtyAir += 1;
  }
};
sampleSize = dirtyAir / air.length;

if(sampleSize > threshold){
  console.log('Polluted')
} else {
  console.log('Clean')
};