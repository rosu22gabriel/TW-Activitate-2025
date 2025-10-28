// apply - este similar metodei call cu diferenta ca argumentele de apel
// sunt transmise ca array si nu ca lista cum este cazul apelului call:

const person = {} // Obiectul person nu are setata nicio proprietate

function Person(firstName, lastName) { 
    this.firstName = firstName;
    this.lastName = lastName;
    // Functia Person seteaza proprietatile firstName si lastName
    // precum si metoda toString in contextul apelantului curent
    this.toString = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Apelul metodei Person folosind apply injecteaza proprietatile
// si metoda definite de Person in obiectul person care nu le continea
Person.apply(person, ['Gabriel', 'Rosu']);
console.log(person.toString());
