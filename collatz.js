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
    let collatzString = `${n}->`;
    while (n > 1) {
        switch (n % 2) {
            case 0:
                n = n / 2;
                collatzString += `${n}->`;
                break;
            case 1:
                n = (3 * n) + 1;
                if (n === 1) {
                    collatzString += `${n}`;
                } else {
                    collatzString += `${n}->`;
                }

                break;
            default:
                break;
        }
    }
    return collatzString;
}


console.log('====================================');
console.log(collatz(9885));
console.log('====================================');