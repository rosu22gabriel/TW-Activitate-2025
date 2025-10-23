// Definirea unei functii

function f(a, b, c) {
    /* instructiuni */
}

const func = function(a, b, c) {
    /* instructiuni */
}

// Apelarea unei functii

f(1, 3, 4); // valid
f(1); // valid, b si c undefined
f(...[1, 2, 3]); // valid
let p = func;
p(1, 2, 3); // valid


function f(a, b) {
    if (b !== undefined){
        return a + b;
    } else if (a !== undefined) {
        return function(x) {
            return a + x;
        }
    } else {
        return f;
    }
}

const a = 1;
const b = 2;

console.log(f(a, b));
console.log(f(a)(b));
console.log(f()()()()()(a)(b));