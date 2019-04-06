let testData1 = 'xxOo'; //should return true
let testData2 = 'asasllhhkgg'; //should return true
let testData3 = 'xoxcdff'; //should return false


function areXsAndOsEqual(str) {
  var xStack = [];
  var oStack = [];
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i).toLowerCase() === 'o') {
      oStack.push(str.charAt(i).toLowerCase());
    }
    else if (str.charAt(i).toLowerCase() === 'x') {
      xStack.push(str.charAt(i).toLowerCase());
    }
    else {
      break;
    }
  }
  if (xStack.length === 0 && oStack.length === 0) {
    return true;
  }
  else if (xStack.length === oStack.length) {
    return true;
  }
  else {
    return false;
  }
}
console.log(areXsAndOsEqual(testData1), areXsAndOsEqual(testData2),areXsAndOsEqual(testData3));
