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
    let rem = temp % 10;
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

const nums = [2, 7, 11, 15];
const target = 9;
const seen = {};
for (let i = 0; i < nums.length; i++) {
  const complement = target - nums[i];
  if (complement in seen) {
    console.log("Find indexes of sum: ", [seen[complement], i]);
    break;
  } else {
    seen[nums[i]] = i;
  }
}
// console.log("Find indexes of sum: ");

function groupByDepartment(users) {
  const unqDept = [];
  users.forEach((user) => {
    if (!unqDept.includes(user.department)) {
      unqDept.push(user.department);
    }
  });

  const res = {};
  unqDept.forEach((dept) => {
    const tempArr = [];
    for (const user of users) {
      if (dept === user.department) {
        tempArr.push(user);
      }
    }
    res[dept] = [...tempArr];
  });
  return res;
}

// 2nd way
// function groupByDepartment(users) {
//   const res = users.reduce((acc, curr) => {
//     if (!acc[curr.department]) {
//       acc[curr.department] = [];
//     }
//     acc[curr.department].push(curr);
//     return acc;
//   }, {});
//   return res;
// }

const users = [
  { name: "Alice", department: "HR" },
  { name: "Bob", department: "Engineering" },
  { name: "Eve", department: "HR" },
];
// console.log("groupByDepartment: ", groupByDepartment(users));

// Write your own promise
function myPrmoiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let count = 0;
    promises.forEach((p, i) => {
      Promise.resolve(p)
        .then((res) => {
          results[i] = res;
          count++;
          if (count === promises.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
}

const p1 = Promise.resolve(1);
const p2 = Promise.resolve(24);
const p3 = Promise.resolve("eerr");
myPrmoiseAll([p1, p2, p3])
  .then((res) => console.log("res: ", res))
  .catch((err) => console.log("err: ", err));

// isValidParentheses

function isValidParentheses(s) {
  const stack = [];
  const map = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let char of s) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else {
      if (stack.pop() !== map[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(isValidParentheses("{[()]}")); // true
console.log(isValidParentheses("{[(])}")); // false

// flattenObj
const input = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
    },
  },
};

function flattenObj(input, prefix = "", res = {}) {
  for (const [key, val] of Object.entries(input)) {
    const newKey = prefix ? `${prefix}.${key}` : key;
    if (typeof val === "object" && val !== null && !Array.isArray(val)) {
      flattenObj(val, newKey, res);
    } else {
      res[newKey] = val;
    }
  }
  return res;
}

console.log("Result: ", flattenObj(input));
