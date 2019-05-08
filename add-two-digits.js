function addTwoDigits(n) {
  let numStr = n.toString();
  let resultNumArray = [];
  for (let i = 0; i < numStr.length; i++) {
    resultNumArray.push(numStr[i]);
  }
  for (let i = 0; i < resultNumArray.length; i++) {
    let currentNum = parseInt(resultNumArray[i]);
  }
  return currentNum;
}
