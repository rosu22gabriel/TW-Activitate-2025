// Stergerea unei chei

let map = new Map();
map.set('bar', 'foo');
console.log(map.delete('bar')); // true
console.log(map.has('bar')); // false

// Stergerea tuturor cheilor

map = new Map();
map.set('bar', 'baz');
map.set(1, 'foo');
console.log(map.size); // 2
map.clear();
console.log(map.size); // 0

// Gruparea

const inventory = [
    { name: 'asparagus', type: 'vegetables', quantity: 9},
    { name: 'bananas', type: 'fruit', quantity: 5},
    { name: 'goat', type: 'meat', quantity: 23},
    { name: 'cherries', type: 'fruit', quantity: 12},
    { name: 'fish', type: 'meat', quantity: 22},
];

const restock = { restock: true };
const sufficient = { restock: false};
const result = Map.groupBy(inventory, ({quantity}) =>  quantity < 6 ? restock : sufficient);

console.log(result.get(restock));