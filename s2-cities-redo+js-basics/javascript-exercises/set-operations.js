let odds = new Set([1, 3, 5, 7, 9]);
let squares = new Set([1, 4, 9]);
console.log(odds.difference(squares));
// Set(3) { 3, 5, 7 }

console.log(odds.intersection(squares));
// Set(2) { 1, 9 }

let evens = new Set([2, 4, 6, 8]);
console.log(evens.symmetricDifference(squares));
// Set(5) { 2, 6, 8, 1, 9 }

console.log(evens.union(squares));
// Set(6) { 2, 4, 6, 8, 1, 9}

let primes = new Set(
    [2, 3, 5, 7, 11, 13, 17, 19]
);
squares = new Set (
    [1, 4, 9, 16]
);

console.log(primes.isDisjointFrom(squares));

// true

let fours = new Set([4, 8, 12, 16]);
evens = new Set(
    [2, 4, 6, 8, 10, 12, 14, 16, 18]
);


console.log(fours.isSubsetOf(evens));
// true

evens = new Set(
    [2, 4, 6, 8, 10, 12, 14, 16, 18]
);

fours = new Set(
    [4, 8, 12, 16]
);

console.log(evens.isSupersetOf(fours));

// true