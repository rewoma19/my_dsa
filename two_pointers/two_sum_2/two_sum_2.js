/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let leftPointer = 0;
  let rightPointer = numbers.length - 1;

  while (leftPointer < rightPointer) {
    const sumOfPointers = numbers[leftPointer] + numbers[rightPointer];

    if (sumOfPointers === target) {
      return [leftPointer + 1, rightPointer + 1];
    } else if (sumOfPointers < target) {
      leftPointer += 1;
    } else if (sumOfPointers > target) {
      rightPointer -= 1;
    }
  }

  // throw new Error("No solution");
};

let example1 = twoSum([2, 3, 4], 6);
console.log(example1);
