/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const n = nums.length;
  const expectedSumOfNums = (n * (n + 1)) / 2;
  let actualSumOfNums = 0;

  for (const num of nums) {
    actualSumOfNums += num;
  }

  return expectedSumOfNums - actualSumOfNums;
};
