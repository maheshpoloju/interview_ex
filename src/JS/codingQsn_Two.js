function groupAnagrams(words) {
  const anagrams = {};

  for (const word of words) {
    const sorted = word.split("").sort().join("");
    if (!anagrams[sorted]) {
      anagrams[sorted] = [];
    }
    anagrams[sorted].push(word);
  }
  return Object.values(anagrams);
}

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Output: [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]
// ----------------------------------------------------------------------------

const fs = require("fs");
// ***** Synchronous file read (Blocking) ***** //
// console.log("Before reading file...");
// const data = fs.readFileSync("codingQsn_Two.js", "utf8");
// console.log("File content:", data);
// console.log("After reading file...");

// ***** Asynchronous file read (Non-blocking) ***** //
// console.log("Before reading file...");
// fs.readFile("codingQsn_Two.js", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log("File content:", data);
// });
// console.log("After reading file...");

const getArmstrong = (n) => {
  let temp = n;
  let sum = 0;
  while (temp > 0) {
    rem = temp % 10;
    sum = sum + rem * rem * rem;
    temp = Math.floor(temp / 10);
  }
  return sum === n ? `${n} is Armstrong Num` : `${n} not an Armstrong Num`;
};
// console.log("Armstrong Number: ", getArmstrong(153));
// ----------------------------------------------------------------------------
function getPalindrome(str) {
  let j = str.length - 1;
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[j]) {
      return false;
    }
    j--;
  }
  return true;
}

// console.log("Palindrome: ", getPalindrome("madam"));
// ----------------------------------------------------------------------------
