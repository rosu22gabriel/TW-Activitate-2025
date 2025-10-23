function Person(firstName, lastName, age, gender){
    this.name = {
        firstName,
        lastName
    };
    // Aceste proprietati si metode vor fi mostenite prin copierea
    // prototype-ului tipului de baza
    this.age = age;
    this.gender = gender;
    this.getTitle = function() {
        return `Person: ${this.name.firstName} ${this.name.lastName}`;
    }
};

function Teacher(firstName, lastName, age, gender) {
    // Apelam initializarea tipului pe care il extindem pentru setarea
    // campurilor mostenite
    Person.call(this, firstName, lastName, age, gender);
    this.getTitle = function(){ 
        return `Teacher: ${this.name.firstName} ${this.name.lastName}`;
    }
}

//Copiem campul prototype al tipului pe care il extindem, simpla atribuire
// ar fi facut ca ambele sa aiba aceleasi campuri
Teacher.prototype = Object.create(Person.prototype);

console.log(new Teacher("Gabriel", "Rosu", "21", "male").getTitle());