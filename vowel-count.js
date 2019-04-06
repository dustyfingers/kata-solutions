let testData = 'Oiaa';
function getCount(str) {
  let vowelsCount = 0;
  for (let i = 0; i <= str.length; i++) {
    switch (str.charAt(i).toLowerCase()) {
      case 'a':
      case 'i':
      case 'e':
      case 'o':
      case 'u':
        vowelsCount += 1;
        break;
    }
  }
  return vowelsCount;
}

console.log(getCount(testData));
