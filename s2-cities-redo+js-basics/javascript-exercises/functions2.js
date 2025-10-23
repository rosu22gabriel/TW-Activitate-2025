// Functii cu numar variabil de parametri
function f() {let args = arguments; /*instructiuni*/}
function f(...args) { /*instructiuni*/ }

// Arrow functions:
let func = (x) => x * 2;
console.log(func(2));

let arrowFunc = (x) => {return x * 2}
console.log(arrowFunc(2));

const fibonacci = (n) => n < 3 ? n : fibonacci(n - 1) + fibonacci(n - 2);
console.log(fibonacci(6));

