// Inlantuirea apelurilor de functii cu acelasi context this presupune
// ca fiecare functie sa intoarca this:


// Pentru a putea fi inlantuite in secventa, fiecare metoda intoarce this
const Arithmetic = {
    sum(...args) {
        this.value = args.reduce((sum, i) => sum + i, 0);
        return this;
    },
    add(value) {
        this.value += value;
        return this;
    }, 
    subtract(value) {
        this.value -= value;
        return this;
    }
}

// Acest lucru permite apelarea metodelor in lant
const value = Arithmetic
    .sum(1, 2, 3)
    .add(4)
    .subtract(5)
    .value;

console.log(value); // 5