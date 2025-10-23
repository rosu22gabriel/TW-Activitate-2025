x = 1; // x este global in script
function f() { 
    var x = 2; // x e local in functie
    console.log(`in function x = ${x}`); // afiseaza 2
    { 
        let x = 3; 
        console.log(`in block x = ${x}`); // afiseaza 3
    }
    console.log(`in function x = ${x}`) // afiseaza 2
}

f();
console.log(`in script x = ${x}`) // afiseaza 1