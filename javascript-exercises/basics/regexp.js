// Expresiile regulate sunt definite in JavaScript cu sintaxa: /pattern/modifiers

let args = ["Gabriel", "Rosu"];

let message = "Hello, {0} {1}!".replace(/{(\d+)}/g, 
    (match, index) => args[index] !== undefined ? args[index] : match
);

console.log(message);
