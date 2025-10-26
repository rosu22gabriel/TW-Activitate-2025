// Functiile pot primi o lista de parametri:
function f(a, b, c) { }

// Functia nu este obligata sa utilizeze toti parametrii;

// In interiorul functiei, parametrii sunt accesibili si printr-un obiect
// similar cu un array special numit arguments:

function printArguments() {
    for (let argument of arguments) { 
        console.log(argument);
    }
}

function printArgs(...args) {
    args.forEach(arg => console.log(arg));
}

printArguments('a', 'b', 'c');
printArgs(1, 2, 3);

// Functiile cu numar variabil de parametri pot accesa argumentele
// prin intermediul arguments sau declarand un argument de tip array
// cu spread