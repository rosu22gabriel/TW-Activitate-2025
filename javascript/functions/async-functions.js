/*
    -Se declara cu async function;
    -Expresiile lambda pot fi si ele declarate ca:
            async (...) => {...};
    -Atunci cand apelam cu await o functie asincrona, apelantul
    devine si el asincron;
    -Putem verifica daca o functie este asincrona in functie de 
    numele constructorului ei
*/


// Orice obiect este creat prin apelul unei functii,
// referita de obiect prin constructor, al carui
// nume coincide cu cel al functiei respective
function isAsync(f) {
    return f.constructor.name === 'AsyncFunction';
}
