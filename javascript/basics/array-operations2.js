// Reducerea

/**
    s - previous value
    n - current value
 */

let sum = [1, 2, 3, 4, 5].reduce((s, n) => s += n, 0);
console.log(sum);

// Substituirea fiecarui element
    // map calls a callback function to each element in the array, and returns an
    // array that contain the results
let lengths = ["one", "two", "three"].map(n => n.length); // [3, 3, 5]
console.log(lengths); // [3, 3, 5]

// Filtrarea
let numbers = ["1", 2, "3"].filter(n => typeof n === "number")
console.log(numbers); // [2]

// Despachetarea ca lista

numbers = [...[1, 2, 3], ...[4, 5, 6]];
console.log(numbers); // [1, 2, 3, 4, 5, 6]

// Concatenarea elementelor
let letters = ["a", "b", "c"];
let s = letters.join(" "); // a b c

console.log(s);


