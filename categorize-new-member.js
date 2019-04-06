let testData = [[45, 21], [62, 13], [54, 8], [71, 4], [56, 9]];


function openOrSenior(data){
  // ...
  var memberDecision = [];function openOrSenior(data){
  // ...
  var memberDecision = [];
  for (let i = 0; i < data.length; i++) {
    var member = data[i];
    if (member[0] >= 55 && member[1] > 7) {
      memberDecision.push('Senior');
    }
    else {
      memberDecision.push('Open');
    }
  }
  return memberDesision;
}


openOrSenior(testData);
  for (let i = 0; i < data.length; i++) {
    var member = data[i];
    if (member[0] >= 55 && member[1] > 7) {
      memberDecision.push('Senior');
    }
    else {
      memberDecision.push('Open');
    }
  }
  console.log(memberDecision);
}


openOrSenior(testData);
