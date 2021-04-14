const judgeVegetable = function (vegetables, metric) {
  let attr = metric;
  let sortVeggies = vegetables.sort(function(a,b){return b[attr] - a[attr]});
  return sortVeggies[0].submitter;
}

const vegetables = [
 
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness';

const result = judgeVegetable(vegetables, metric)
console.log(result);


