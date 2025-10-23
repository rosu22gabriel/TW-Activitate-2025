// Exista o ierarhie de obiecte care au ca prototip initial object
let object = new Object;

// Obiectele sunt prelucrabile si in JSON, similar cu niste hash-tables;

    // A hash-table is a data structure that implements an associative array
    // also known as a dictionary or a map which stores data as key-value
    // pairs. It enables efficient storage, retrieval, and management of data
    // by using a hash function to compute an index, or hash code, into an 
    // array of buckets or slots where the corresponding value is stored


// Instantierea unui obiect se face fie cu operatorul new fie initializand o reprezentare JSON

class Car {
    constructor(name) { 
        this.name = name;
    }
}

var person = {name: "Gabriel", birthdat: "05/11"};
var car = new Car("VW Touran");
console.log(car);

// Prima varianta permite crearea de obiecte in-line fara definire prealabila,
// cea de-a doua ruleaza si codul constructorului