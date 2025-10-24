// definire
const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;

    // Se pot defini si string-uri multiline care pot contine expresii evaluate;
    // Un string multiline este continut de ``;
    // Un string multiline poate functiona si ca un sablon continand expresii

// Accesul la un caracter:

console.log('cat'.charAt(1));
console.log('cat'[1]);

// Compararea

console.log("a" > "b");
console.log("b" > "a");

const str1 = "string1";
const str2 = "string2";

console.log(str1.toUpperCase() === str2.toUpperCase());
console.log(str1.localeCompare(str2)); // intoarce rezultatul compararii lexicografice


// Parcurgerea

let s = "string";
for (let c in s) { console.log(c); }

// Extragerea unui substring:

console.log("Apple, Banana, Kiwi".substring(7, 13)); // Extrage Banana
console.log("Apple, Banana, Kiwi".substring(0, 5));

// Inlocuirea unui String

console.log("I'm working at AxWay".replace(/AXWAY/i, "Axway"));