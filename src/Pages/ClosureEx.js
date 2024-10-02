function outerFunction() {
  let count = 0;

  return function innerFunction() {
    count += 1;
    return count;
  };
}

const increment = outerFunction();
console.log(increment()); // Output: 1
console.log(increment()); // Output: 2
