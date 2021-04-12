function howManyHundreds(num){
  let x = (num/100) - ((num % 100)/100);
  return x;  
}