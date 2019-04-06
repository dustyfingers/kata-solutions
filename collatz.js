// function collatz(n) {
//     while (n > 1) {
//         switch (n % 2) {
//             case 0:
//                 n = n / 2;
//                 console.log(n);
//                 break;
//             case 1:
//                 n = (3 * n) + 1;
//                 console.log(n);
//                 break;
//         }
//     }
// }

function collatz(n) {
    if (n === 1){
      var collatzString = `${n}`;
    } else {
      var collatzString = `${n}->`;
    }
    while (n > 1) {
        switch (n % 2) {
            case 0:
                n = n / 2;
                if (n === 1) {
                  collatzString += `${n}`;
                } else {
                  collatzString += `${n}->`;
                }
                break;
            case 1:
                n = (3 * n) + 1;
                collatzString += `${n}->`;
                break;
        }
    }
    return collatzString;
}


console.log('====================================');
console.log(collatz(9885));
console.log('====================================');
console.log(collatz(1));
