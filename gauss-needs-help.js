function f(n){
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i;
  }
  return result;
};



console.log(f(5));
console.log(f(10));
