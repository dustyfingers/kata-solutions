function solution(number){
  let integerArray = [];
  let resultSum = 0;
  for (let i = 0; i < number; i++) {
	  if (i) {
		if (i % 3 === 0 || i % 5 === 0) {
			integerArray.push(i);
		}
	  }
  }
  
  integerArray.forEach((element) => {
	  resultSum += element;
  });
  return resultSum;
}

console.log(solution(10));