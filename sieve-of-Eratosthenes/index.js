// function* sieveOfEratosthenes(limit = 100) {
//     var numbers = new Array(limit + 1);
//     numbers.fill(0);
//     var index = 2;
//     while (index <= limit) {
//         let number = index;
//         index++;
//         for (let i = index; i < numbers.length; i++) {
//             if (i % number == 0) {
//                 numbers[i] = 1;
//             }
//         }
//         while (index < numbers.length && numbers[index] == 1) {
//             index++;
//         }
//         yield number;
//     }
// }

function* sieveOfEratosthenes(limit = 100) {
    var numbers = new Array(limit + 1).fill(0);
    var index = 2;
    while (true) {
        if (index > numbers.length) {
            let n = numbers.length;
            numbers = numbers.concat(new Array(limit).fill(0));
            let m = Math.round(numbers.length / 2);
            for (let i = n + 1; i < numbers.length; i++) {
                for (let j = 2; j < m; j++) {
                    if (numbers[j] == 0 && i % j == 0) {
                        numbers[i] = 1;
                    } 
                }
            }
            while (index < numbers.length && numbers[index] == 1){
                index++;
            }
        }
        let number = index;
        index++;
        for (let i = index; i < numbers.length; i++) {
            if (i % number == 0) {
                numbers[i] = 1;
            }
        }
        while (index < numbers.length && numbers[index] == 1) {
            index++;
        }
        yield number;
    }
}

function showPrimeNumbers() {
    const limit = document.getElementById('limit').ariaValueMax;
    const numbersTag = document.getElementById('numbers');
    numbersTag.innerHTML = '';
    const generator = sieveOfEratosthenes(limit);
    for (let result = generator.next(); !result.done; result = generator.next()) {
        numbersTag.innerHTML += `<li>${result.value}</li>`;
    }
}