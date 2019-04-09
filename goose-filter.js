var testBirds = ['African', 'Sparrow', 'Eagle', 'Toulouse', 'Duck' ];

function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  let result = [];
  geese.forEach(function(element, i) {
    let currentBird = birds[i];
    switch (geese.includes(currentBird)) {
      case true:
        break;
      case false:
        result.push(currentBird);
        break;
    };
  });
  return result;
};

console.log(gooseFilter(testBirds));
