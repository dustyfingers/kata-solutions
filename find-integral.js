let testData = [3, 2];


function integrate(coefficient, exponent) {
  let exp = exponent + 1;
  let coef = coefficient / exp;

  return `${coef}x^${exp}`;
}

console.log(integrate(...testData));
