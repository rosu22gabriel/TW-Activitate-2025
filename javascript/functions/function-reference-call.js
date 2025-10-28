// Functiile pot fi apelate prin intermediul referintelor
// sau chiar evaluand numele ca referinta

function add(a, b) {return a + b;}

const f = add;
const g = eval('add');

console.log(f(1, 2)); // 3
console.log(g(1, 2)); // 3


// O functie poate avea parametri de tip functie callback
// pe care ii apeleaza prin intermediul argumentului dupa nume:

// Functia bifunction primeste o functie ca argument pe 
// care o apeleaza cu restul argumentelor
function bifunction(f, a, b) {
    return f(a, b);
}

console.log(bifunction((a, b) => a + b, 1, 2)); // 3