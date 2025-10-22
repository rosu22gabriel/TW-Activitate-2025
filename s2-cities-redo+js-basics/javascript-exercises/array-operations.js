// Crearea
let fruits = ['Apple', 'Banana'];
fruits = new Array('Apple', 'Banana');

// Accesarea unui element
let first = fruits[0];
let last = fruits[fruits.length - 1];

// Cautarea
let index = fruits.indexOf('Banana');

// Parcurgerea
fruits.forEach(function(item, index, array) {});
for (item of fruits) {} // for of , nu for in
for (let i = 0; i < fruits.length; i++) {
    let item = fruits[i];
}

// Adaugarea
let newLength = fruits.push('Orange');
console.log(newLength);

// Stergerea
// sterge de la inceput
last = fruits.pop(); // Returneaza elementul scos prin .pop()
console.log(last);

first = fruits.shift(); // Sterge de la inceput
console.log(first);
let removedItem = fruits.splice(index, 1); // Sterge un element de la index

let n;
let removedItems = fruits.splice(index, n); // Sterge n elemente incepand de la index

