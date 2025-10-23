let map = new Map();
// .set() Adds a new element with a specified key and value to the Map. 
// If an element with the same key already exists, 
// the element will be updated
map.set('0', 'foo');
map.set(1, 'bar');

// .values() returns an iterable of values in the map
let iterator = map.values();
console.log(iterator.next().value); // "foo"
console.log(iterator.next().value); // "bar"


// Parcurgerea cheilor
map = new Map();

map.set('0', 'foo');
map.set(1, 'bar');

// .keys() return an iterable of keys in the map
iterator = map.keys();
console.log(iterator.next().value); // "0"
console.log(iterator.next().value); // 1

// Parcurgerea perechilor cheie-valoare
function logMapElements(value, key, map) {
    console.log(`m[${key}] = ${value}`);
}

new Map([
    ['foo', 3],
    ['bar', {}],
    ['baz', undefined],
]).forEach(logMapElements);



