const finalPosition = function(moves){
  let originalPosition = [0,0];
  for (let direction of moves){
    switch(direction){
      case "west":
      originalPosition[0] -= 1;
      break;
      case "east":
      originalPosition[0] += 1;
      break;
      case "south":
      originalPosition[1] -= 1;
      break;
      case "north":
      originalPosition[1] += 1;
      break;
    }
  }
  return originalPosition;
}
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

finalPosition(moves);