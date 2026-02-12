/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const numsSet = new Set(nums);
  let longestLength = 0;

  for (const num of numsSet) {
    if (!numsSet.has(num - 1)) {
      let length = 1;
      let followingNum = num + 1;

      while (numsSet.has(followingNum)) {
        length++;
        followingNum++;
      }

      longestLength = Math.max(longestLength, length);
    }
  }

  return longestLength;
};
