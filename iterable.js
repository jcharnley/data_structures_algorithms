const iterable = {
  [Symbol.iterator]() {
    let step = 0;
    const iterator = {
      next() {
        step++;
        if (step === 1) {
          return { value: "This", done: false };
        } else if (step === 2) {
          return { value: "is", done: false };
        } else if (step === 3) {
          return { value: "iterable", done: false };
        }
        return {
          value: undefined,
          done: true
        };
      }
    };
    return iterator;
  }
};

var iterator = iterable[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

function removeProperty(obj, prop) {
  if (Object.keys(obj).includes(prop)) {
    delete obj[prop];
    return true;
  } else {
    return false;
  }
}

removeProperty(
  {
    prop: true,
    noProp: false
  },
  "prop"
);

function formatDate(userDate) {
  const reserseDate = userDate
    .split("/")
    .reverse()
    .join();
  const monthDayReserse = reserseDate.split(",");
  [monthDayReserse[1], monthDayReserse[2]] = [
    monthDayReserse[2],
    monthDayReserse[1]
  ];

  if (monthDayReserse[1].length < 2) {
    monthDayReserse[1] = 0 + monthDayReserse[1];
  } else if (monthDayReserse[2].length < 2) {
    monthDayReserse[2] = 0 + monthDayReserse[2];
  }
  return monthDayReserse.join("");
  // format from M/D/YYYY to YYYYMMDD
}

console.log(formatDate("12/31/2014"));


function FirstFactorial(num) { 
    let count = num;
     let total = 1;
        while (count > 0) {
         total *= count;
      count--;
    }
      // code goes here  
      return total; 
    
    }
       
    // keep this function call here 
    console.log(FirstFactorial(readline()));