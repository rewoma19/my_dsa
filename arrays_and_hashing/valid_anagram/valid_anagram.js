/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const charCountS = new Map();
  const charCountT = new Map();

  for (let char of s) {
    charCountS.set(char, (charCountS.get(char) || 0) + 1);
  }

  for (let char of t) {
    charCountT.set(char, (charCountT.get(char) || 0) + 1);
  }

  if (charCountS.size !== charCountT.size) {
    return false;
  }

  for (let [char, count] of charCountS) {
    if (charCountT.get(char) !== count) {
      return false;
    }
  }

  return true;
};
