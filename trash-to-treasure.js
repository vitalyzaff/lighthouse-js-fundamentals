const smartGarbage = function (trash, bins) {
  const keys = Object.keys(bins); // make an array of keys for object bins
  for (let i of keys) { //loop through an array of keys
    if (i === trash){ // if one of the 'keys' equals ot trash argument
      bins[i]++
    }
  }
  return bins;
}


console.log(smartGarbage('recycling', { waste: 4, recycling: 7, compost: 5 }))