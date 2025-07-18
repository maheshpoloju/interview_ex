const word = "sswwbbiiss";
const freqObj = {};
let firstUnique = null;

for (const char of word) {
  freqObj[char] = (freqObj[char] || 0) + 1;
}

for (const char of word) {
  if (freqObj[char] === 1) {
    firstUnique = char;
    break;
  }
}

// console.log("Single occurrence in string: ", firstUnique);
// ----------------------------------------------------------
function getFibnSeriesAndSum(n) {
  if (n === 0) return { seriesArr: [0], sum: 0 };
  if (n === 1) return { seriesArr: [0, 1], sum: 1 };

  let a = 0,
    b = 1,
    sum = 1;
  let seriesArr = [a, b];

  for (let i = 2; i < n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
    seriesArr.push(b);
    sum += b;
  }

  return { seriesArr, sum };
}

// console.log("Fibonacci Series and SUM: ", getFibnSeriesAndSum(10));

// ----------------------------------------------------------

function getIsPrimeNum(n) {
  if (n === 0) return "0 is not a Prime Num";
  if (n === 1) return "1 is neither prime nor composite number.";
  let isPrime = true;
  //   for (let i = 2; i <= Math.sqrt(n); i++) {
  for (let i = 2; i <= n / 2; i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime ? `${n} is PRIME` : `${n} is not a PRIME`;
}

// console.log("Is Prime Num: ", getIsPrimeNum(101));
// ----------------------------------------------------------
function getIsPrimeRange(start, end) {
  function isPrime(n) {
    if (n === 0) return false;
    if (n === 1) return false;
    let isPrime = true;
    //   for (let i = 2; i <= Math.sqrt(n); i++) {
    for (let i = 2; i <= n / 2; i++) {
      if (n % i === 0) {
        isPrime = false;
        break;
      }
    }
    return isPrime;
  }

  let primeRangeArr = [];
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      primeRangeArr.push(i);
    }
  }
  return primeRangeArr;
}
// console.log("Prime Range: ", getIsPrimeRange(10, 18));
// ----------------------------------------------------------

function debounce(func, delay) {
  let timerId;
  return function (...args) {
    timerId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

function logMessage(message) {
  console.log("debouncedLogMessage: ", message);
}

const debouncedLogMessage = debounce(logMessage, 2000);
// debouncedLogMessage("Debounce!");
// ----------------------------------------------------------
function reverseArray(arr) {
  const revArr = [];
  for (let j = arr.length - 1; j >= 0; j--) {
    revArr.push(arr[j]);
  }
  console.log("Reverse Arr: ", revArr);
}
// reverseArray([1, 2, 3, 4]);
// ----------------------------------------------------------

function maxArray(arr) {
  let max = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
// console.log("Max Array: ", maxArray([125, 24, 33, 14]));
// ----------------------------------------------------------
function flattenArray(arr) {
  return arr.reduce(
    (acc, val) => acc.concat(Array.isArray(val) ? flattenArray(val) : val),
    []
  );
}
// 2nd way
// function flattenArray(arr) {
//   const res = [];
//   for (const ele of arr) {
//     if (Array.isArray(ele)) {
//       res.push(...getFlatterArr(ele));
//     } else {
//       res.push(ele);
//     }
//   }
//   return res;
// }

// console.log("flattenArray: ", flattenArray([1, [2, [3, 4], 5]])); // Output: [1, 2, 3, 4, 5]
// ----------------------------------------------------------
function bubbleSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

// console.log("bubbleSort: ", bubbleSort([5, 3, 5, 8, 1, 2]));
// ----------------------------------------------------------
function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

// console.log("quickSort: ", quickSort([5, 3, 5, 8, 1, 2]));
// ----------------------------------------------------------

function getArrRotate(arr, k) {
  const n = arr.length;
  k = k % n;
  const rotatedArr = [];
  for (let i = 0; i < n; i++) {
    rotatedArr[(i + k) % n] = arr[i];
  }
  return rotatedArr;
}
// console.log("Rotate Arr: ", getArrRotate([5, 3, 5, 8, 1, 2], 2));
// ----------------------------------------------------------
function getArrRotateMethod_Two(arr, k) {
  const n = arr.length;
  k = k % n;
  function rotateArr(start, end) {
    while (start < end) {
      // [arr[start], arr[end]] = [arr[end], arr[start]]
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  }

  rotateArr(0, n - 1);
  rotateArr(0, k - 1);
  rotateArr(k, n - 1);

  //   for left rotation:
  //   rotateArr(0, k - 1);
  //   rotateArr(k, n - 1);
  //   rotateArr(0, n - 1);
  return arr;
}
// console.log(
//   "Rotate getArrRotateMethod_Two: ",
//   getArrRotateMethod_Two([5, 3, 5, 8, 1, 2], 2)
// );
// ----------------------------------------------------------
function getArrLeftRotate(arr, k) {
  const n = arr.length;
  k = k % n;
  const leftRotateArr = [];
  for (let i = 0; i < n; i++) {
    leftRotateArr[i] = arr[(i + k) % n];
  }
  return leftRotateArr;
}
// console.log("Arr Left Rotate: ", getArrLeftRotate([5, 3, 5, 8, 1, 2], 2));
// ----------------------------------------------------------

//another method
// function getLargestSumSubArr(arr) {
//   let maxSum = arr[0];
//   let currentSum = arr[0];

//   let start = 0;
//   let end = 0;
//   let tempStart = 0;

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > currentSum + arr[i]) {
//       currentSum = arr[i];
//       tempStart = i; // New subarray starts here
//     } else {
//       currentSum += arr[i];
//     }

//     if (currentSum > maxSum) {
//       maxSum = currentSum;
//       start = tempStart;
//       end = i;
//     }
//   }

//   const subarray = arr.slice(start, end + 1);
//   return { maxSum, subarray };
// }

function getLargestSumSubArr(arr) {
  let maxSum = arr[0];
  let currentSum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
}
console.log(
  "getLargestSumSubArr: ",
  getLargestSumSubArr([-2, 1, -3, 4, -1, 2, 1, -5, 4])
);
// ----------------------------------------------------------
function isPalindrome(num) {
  const temp = num;
  let rev = 0;
  while (num > 0) {
    const lstDgt = num % 10;
    rev = rev * 10 + lstDgt;
    num = Math.floor(num / 10);
  }
  return temp === rev;
}
console.log(isPalindrome(121));
// ----------------------------------------------------------
function isArmstrong(num) {
  const temp = num.toString();
  let sum = 0;
  while (num > 0) {
    const lstDgt = num % 10;
    let init = lstDgt;
    for (let i = 1; i < temp.length; i++) {
      init = lstDgt * init;
    }
    sum = sum + init;
    num = Math.floor(num / 10);
  }

  return parseInt(temp) === sum;
}
console.log(isArmstrong(153));
// ----------------------------------------------------------
function isPalindromeStr(word) {
  const cleanedWord = word.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let start = 0;
  let end = cleanedWord.length - 1;

  while (start < end) {
    if (cleanedWord[start] !== cleanedWord[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}
console.log(isPalindromeStr("mahi"));
// ----------------------------------------------------------
