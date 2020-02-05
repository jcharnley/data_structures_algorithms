const MAX_WEIGHT = 10;
const TOTAL_ITEMS = 4;

const items = [
  {
    key: 1,
    value: 10,
    weight: 5
  },
  {
    key: 2,
    value: 40,
    weight: 4
  },
  {
    key: 3,
    value: 30,
    weight: 6
  },
  {
    key: 4,
    value: 50,
    weight: 3
  }
];

// need to maximize the value of the items without surpassing the capacity of your backpac
const solution = data => {
 data.map((d, i) => {
     console.log(d.value)
 })
    
  };
  
  solution(items);
  