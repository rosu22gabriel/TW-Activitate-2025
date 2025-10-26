/*
    Argumentele sunt transmise prin referinta care nu poate fi modificata,
    functia poate modifica doar continutul de la adresa respectiva:
*/

// Functia primeste valoarea referintei pe care o poate realoca local
// fara ca aceasta modificare sa afecteze argumentul cu care a fost
// apelata

function changeMe(n, m) {
    n++; // n = n + 1
}

n = 0;
changeMe(n);
console.log(n);

function changeMe(n) {
    n.value++;
}

n = {value: 0};
changeMe(n);
console.log(n.value);