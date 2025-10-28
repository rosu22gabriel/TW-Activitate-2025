// Currying este un mecanism de transformare a functiilor care permite
// apelarea unei functii f(a, b) ca f(a)(b)

function bicurry(f) {
    // Primul apel intoarce o functie care capteaza primul argument
    return function(a) {
        return function(b){
            // Al doilea apel executa functia dupa rezolvarea argumentelor
            // acesteia
            return f(a, b);
        }
    }
}

const f = bicurry((a, b) => a + b);
console.log(f(1)(2)); // 3