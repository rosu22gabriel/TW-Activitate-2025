// this se refera la contextul apelantului
//  Pentru o functie libera, this este Window in browser sau module.exports
//  in Node.js.

//  Pentru o functie apelata prin intermediul unei variabile, this este
//  variabila care apeleaza metoda.

//  Pentru un eveniment this este elementul tinta

function logThisName() {
    console.log(this.name);
}

function Person(name) {
    this.name = name;
    this.logThisName = logThisName;
}

// Afiseaza "undefined" pentru ca proprietatea name nu exista in obiectul
// Window pe client, respectiv in obiectul module.exports pe server
logThisName(); 

// Afiseaza "Gabriel" care este valoarea proprietatii name din variabila
// de tip Person
new Person('Gabriel').logThisName();

