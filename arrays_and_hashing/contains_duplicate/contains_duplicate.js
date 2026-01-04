/**
 *
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function (nums) {
  const h = new Set();

  for (const num of nums) {
    if (!h.has(num)) {
      h.add(num);
    } else {
      return true;
    }
  }

  return false;
};

const exampleOne = containsDuplicate([1, 2, 3, 1]);
console.log(exampleOne);

const exampleTwo = containsDuplicate([1, 2, 3, 4]);
console.log(exampleTwo);

const exampleThree = containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]);
console.log(exampleThree);
