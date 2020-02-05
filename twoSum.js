const nums = [3,2,4];
const target = 6;

var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let nestInd = i+1; nestInd < nums.length; nestInd++) {
      if (nums[i] + nums[nestInd] === target) {
        return [i, nestInd];
      }
    }
  }
};

twoSum(nums, target);
