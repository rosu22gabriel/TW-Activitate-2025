var letters = new Set(["a", "a", "c"]);
console.log(letters.size); // Output: 2

letters.add("b");
console.log(letters.values());

let fruits = new Map([
    ["apples", 500],
    ["bananas", 300], 
    ["oranges", 200],
]);

fruits = new Map();

fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);
fruits.get("apples");


