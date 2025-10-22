// Cautarea unui substring

console.log("Please locate where 'locate' occurs!".indexOf("locate"));

// Daca este omis parametrul position atunci cautarea incepe de la sfarsit
console.log("Please locate where 'locate' occurs!".lastIndexOf('locate'));

// Finds the first substring match in a regular expression
console.log("Please locate where 'locate' occurs!".search("locate"));

console.log("Hello world, welcome to the universe.".includes("world"));  // true

console.log("The rain in SPAIN stays mainly in the plain".match(/ain/g)); // ["ain", "ain", "ain"]

console.log("Hello world, welcome to the universe.".startsWith("Hello")); // true

console.log("Hello world, welcome to the universe.".startsWith("world", 6)); // true

console.log("John Doe".endsWith("Doe")) // true


