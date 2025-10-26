// Cuvantul cheie 'function'

// function name([param[, param, [..., param]]]){
//     [statements]
// }

// 'return' permite intoarcerea unui rezultat

// Tipul de rezultat nu e neaparat omogen(heterogen/neomogen) - tipuri
// de date diferite, in functie de situatie;

// Daca se foloseste return fara parametru, se returneaza undefined:
    // rezultatul va fi undefined deci nu va fi afisat

function printAndReturn(text){
    if (text.length === 0){
        return;
    }
    console.log(text);
    return text;
}

// O functie poate intoarce valori de tipuri diferite pe ramuri diferite

let result = printAndReturn('');
if (result){ 
    console.log(result);
}

// Atentie la return pe mai multe linii:
    // return se evalueaza prin completare pana la sfarsitul liniei:
function add(a, b){ 
    return
        a + b;
}

console.log(add(1, 2)); // undefined

// Pentru a putea scrie return pe mai multe linii, se folosesc parantezele():

function add(a, b, c){
    // Cu ajutorul parantezelor se poate scrie return pe mai multe linii
    return (
        a + b + c
    );
}

console.log(add(1, 2, 3)); // 6

/* Atunci cand return lipseste 
    - dintr-o functie, functia intoarce undefined;
    - dintr-o constructie lambda fara acolade, se intoarce rezultatul expresiei
      continute in corpul constructiei lambda;
    - dintr-o constructie lambda cu acolade, se intoarce undefined.

    fara return                             -> undefined
    return fara valoare                     -> undefined
    return expresie                         -> valoarea expresiei
    expresie lambda fara acolade            -> return implicit
    expresie lambda cu acolade fara return  -> undefined

*/
