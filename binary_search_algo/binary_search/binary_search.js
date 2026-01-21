/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let leftPointer = 0;
  let rightPointer = nums.length - 1;

  while (leftPointer <= rightPointer) {
    const middlePointer = leftPointer + (rightPointer - leftPointer) / 2;

    if (nums[middlePointer] === target) {
      return middlePointer;
    } else if (nums[middlePointer] < target) {
      leftPointer = middlePointer + 1;
    } else {
      rightPointer = middlePointer - 1;
    }
  }

  return -1;
};
