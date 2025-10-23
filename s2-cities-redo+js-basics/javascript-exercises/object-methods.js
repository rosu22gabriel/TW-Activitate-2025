//Proprietatile unui obiect pot fi de tip functie
function Person(name) {
    this.name = name;
    this.toString = () => this.name;
}

const person = new Person("Gabriel");
console.log(`Person: ${person}`);

// Accesul la instanta curenta se face folosind this
// Un arrow function dintr-un obiect in-line nu poate referi obiectul
// prin intermediul lui this

const persoana = {
    name: "Gabriel",
    toString: function() {
        return this.name;
    }
}

console.log(`Person: ${persoana}`);