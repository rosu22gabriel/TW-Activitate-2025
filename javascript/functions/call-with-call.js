// call - apeleaza o functie dandu-i ca prim parametru contextul 
// this


// Functia Person seteaza in contextul apelantului curent
// proprietatile firstName si lastName

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.toString = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

function Contact(firstName, lastName, email) {
    Person.call(this, firstName, lastName);
    this.email = email;
    this.toString = function() {
        // Proprietatile firstName si lastName au fost setate de apelul
        // functie Person cu call in contextul obiectului curent this
        return `${this.firstName} ${this.lastName} (${this.email})`;
    }
}

const contact = new Contact('Gabriel', 'Rosu', 'rosu.gabriel@gmail.com');
console.log(contact.toString());


// Functiile anonime pot fi apelate folosind call

(function() {
    this.forEach(i => console.log(i));
}).call([1, 2, 3])

// call injecteaza array-ul ca si context this al apelantului

// Atunci cand executam call fara argumente, functia este executata in 
// contextul global

firstName = "Gabriel";
lastName = "Rosu";

function display() {
    // firstName si lastName sunt referita in contextul apelantului
    console.log(`${this.firstName} ${this.lastName}`);
}

// Apelul call fara argumente seteaza this ca fiind contextul apelantului
// metodei call
display.call();





