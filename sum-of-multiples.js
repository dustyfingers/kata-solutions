function findSum(n) {
  let result = 0;
  for (var i = 1; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      result += i;
    }
  }
  return result;
}


console.log(findSum(5));
console.log(findSum(10));
