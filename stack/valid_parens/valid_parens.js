/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const parenthesesPairs = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  const stack = [];

  for (const char of s) {
    if (!parenthesesPairs[char]) {
      stack.push(char);
    } else {
      if (stack.length === 0 || stack.pop() !== parenthesesPairs[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
