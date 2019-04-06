let testData = 'Hello World';


function swap(st){
  let upperCaseString = '';
  for (let i = 0; i < st.length; i++){
    switch (st.charAt(i).toLowerCase()) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        upperCaseString += st.charAt(i).toUpperCase();
        break;
      default:
        upperCaseString += st.charAt(i);
    }
  }
  return upperCaseString;
}

console.log(swap(testData));
