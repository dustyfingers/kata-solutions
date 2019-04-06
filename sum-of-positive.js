let testData = [1, 3, 5, -1];

function positiveSum(arr) {
  var totalValue = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      totalValue += arr[i];
    }
  }
  return totalValue;
}


console.log(positiveSum(testData));
