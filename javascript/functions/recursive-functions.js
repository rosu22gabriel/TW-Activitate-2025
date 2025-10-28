// In implementarea functiilor recursive in JavaScript trebuie sa
// fim atenti ca orice variabila declaram in functia fara var
// sau let, devine globala si isi mentine starea in secventa de
// apeluri recursive

function hanoi(n, a, b, c) { 
    if (n === 1){ 
        console.log(`${a} => ${b}`);
    } else {
        // Daca am fi declarat o variabila locala de forma k = n - 1
        // aceasta ar fi fost globala si ar fi avut valoarea modificata
        // la al doilea apel recursiv din ramura else
        hanoi(n - 1, a, c, b);
        console.log(`${a} => ${b}`);
        hanoi(n - 1, c, b, a);
    }
}

hanoi(3, 'a', 'b', 'c');