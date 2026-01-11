/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const anagramsMap = new Map();

  for (const s of strs) {
    const key = s.split("").sort().join("");

    if (!ans.has(key)) {
      anagramsMap.set(key, []);
    }

    anagramsMap.get(key).push(s);
  }

  return Array.from(anagramsMap.values());
};
