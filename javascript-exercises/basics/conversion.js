// Din moment ce totul e un obiect (sau se poate impacheta automat ca un obiect),
// conversia la String se poate face oricand cu toString()

// Number la String

let s = new String(19);
console.log(s);
s = (1979).toString();
console.log(s);

let number = 100000000000.02102222;
console.log(number.toExponential());
console.log(number.toPrecision());
console.log(number.toFixed());

// Boolean to String
let string = new String(false);
console.log(string);
string = false.toString();
console.log(string);

// String to Number
let str = new Number("5"); 
console.log(str);
str = new Number("");
console.log(str);
str = new Number("abc");
console.log(str); //NaN
console.log(parseInt("5.2"));
console.log(parseFloat("5.2"));

console.log(isNaN(str)); // true - verifica conversia


// Conversii automate

// Adunarea unui String cu un Number va produce un String

s = 7 + "days";
console.log(s);

// Adunarea unui String cu un obiect va produce un String

s = "now is: " + new Date();
console.log(s);

// Afisarea unui obiect va face conversia la String

console.log({name: "Gabriel", birthday: "11/05"});
