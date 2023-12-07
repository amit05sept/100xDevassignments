/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/


function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  const map1 = Array(26).fill(0);
  const map2 = Array(26).fill(0);

  for (let i = 0; i < str1.length; i++) {
    map1[str1[i].charCodeAt(0) - "a".charCodeAt(0)]++;
  }
  for (let i = 0; i < str2.length; i++) {
    map2[str2[i].charCodeAt(0) - "a".charCodeAt(0)]++;
  }

  const result = JSON.stringify(map1) === JSON.stringify(map2);
  return result;
}

module.exports = isAnagram;
