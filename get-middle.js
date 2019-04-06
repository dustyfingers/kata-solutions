let testDataEven = 'Evenodcuhtch';
let testDataOdd = 'Odd numsadewnugdh';

function getMiddle(s) {
  let halfStrLength = s.length / 2;
  switch(s.length % 2 === 0) {
    case true:
      return s.slice(halfStrLength - 1, halfStrLength + 1);
      break;
    case false:
        return s.charAt(halfStrLength - 0.5);
        break;
  }
}

console.log(getMiddle(testDataEven));
console.log(getMiddle(testDataOdd));
