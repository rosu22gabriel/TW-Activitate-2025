// Definirea obiectelor

// In-line: 
    var person = { name: "Gabriel" };

// Prin apelul constructorului:
    var person = new Object();
    person.name = "Gabriel";
    person["name"] = "Gabriel";

// Prin extragerea dintr-un sir de caractere:
    var person = JSON.parse(`{
            "name": "Gabriel"
        }`)



// Proprietatile unui obiect

// Accesul la proprietatile unui obiect
console.log(person.name);
console.log(person['name']);

// Iterarea proprietatilor unui obiect:
    // Proprietatile unui obiect pot fi iterate cu for..in
const persoana = { firstName: "Gabriel", lastName: "Rosu" };
for (let property in person) {
    console.log(`person[${property}] = ${person[property]}`);
}


    