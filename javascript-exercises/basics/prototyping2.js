// Adaugam metoda times tuturor obiectelor de tip Number care calculeaza
// factorialul, prin definirea ei in obiectul prototype al tipului
// Number, ceea ce ne permite sa apelam noua metoda cu orice
// instanta de tip Number:

Number.prototype.times = function(callback) {
    for (let i = 0; i < this.valueOf(); i++){
        callback();
    }
}

const n = new Number(5);
var factorial = 1;
var i = 1;
n.times(() => factorial += i++);
console.log(factorial);

n.times(() => console.log(Math.random()))