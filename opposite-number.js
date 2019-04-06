let testData = 1;
let testData2 = -12525220.3325;
let testData3 = -5;


function opposite(number) {
  switch (Math.sign(number)){
    case -1:
      return Math.abs(number);
      break;
    case 0:
      return 0;
      break;
    case 1:
      return -Math.abs(number);
      break;
  }
}



console.log(
  opposite(testData),
  opposite(testData2),
  opposite(testData3),
);
