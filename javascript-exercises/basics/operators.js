// typeof: returneaza tipul operandului
let n = 15;

console.log(typeof(n));

console.log(('b' + 'a' + +'a' + 'a').toLowerCase()); // 'banana'

let array = ['banana', 'orange', 'apple'];

// delete: sterge o proprietate a unui obiect, un element al unui array etc.;
delete(array[0]);
console.log(array);

// void: permite evaluarea unei expresii si returneaza undefined

// in: returneaza true daca proprietatea exista in obiect

let obj = { 
    name: "john",
    age: "15"
}

console.log("name" in obj ? true : false);
console.log("age" in obj ? true : false);

// instanceof returneaza true daca primul operand are al doilea operand
// in lantul de prototipuri

console.log("somestring" instanceof Object); // false
let test = new String("test") instanceof String;
console.log(test);

// spread operator: permite despachetarea unui array sau object

let a = [1, 2, 3];
let b = [4, 5];
let c = [...a, ...b];
console.log(c);
let d = [a, b];
console.log(d);


// spread operator: despachetarea obiectelor
let person = {firstName: "Gabriel", lastName: "Rosu"};
let location = {city: 'Bucharest', country: "Romania"};
let personWithLocation = {...person, ...location};

let car = {brand: "Volkswagen", model: "Touran 2004"};
let engine = {cc: "1916", engine: "diesel"};
let carWithEngine = {...car, ...engine};


console.log(carWithEngine);
console.log(personWithLocation);

// destructurarea: unui array sau a unui obiect: 

let {city} = personWithLocation;


