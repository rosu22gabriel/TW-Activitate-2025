// Vectorul arguments cuprinde atat parametri numiti, cat si cei nenumiti
// Alternativ, se pot utiliza rest parameters:

function f(a, b, ...args) { }

function format(text, ...args) {
    return text.replace(/{(\d+)}/g, 
        (match, key) => args[key] ? args[key] : match);
}

console.log(format("Hello, {0}!", "World"));
// Hello, World!