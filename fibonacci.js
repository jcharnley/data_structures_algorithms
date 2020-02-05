let inputNumbers = [0, 1];
let maxValue = 50;

const solution = numbers => {
  for (let i = 2; i < maxValue; i++) {
    let index_1 = numbers[i - 1];
    let index_2 = numbers[i - 2];
    let sum = (index_1 += index_2);
    numbers.push(sum);
  }
  return numbers;
};

solution(inputNumbers);


  //     const inputNumbers = [1,2,4];
    // const outputNum = 0;

    // const solution = (numbers) => {

    //  nuber
    //   numbers.forEach(d => {
    //     if (typeof d !== 'number') {
    //      this.outputNum = 0;
    //     } else {
    //       if (d > this.outputNum) {
    //         this.outputNum = d;
    //       }
    //     }
    //   })
    //  return outputNum;
    // };

    // solution(inputNumbers);