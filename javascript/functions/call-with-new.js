// Atunci cand o functie este apelata cu new se creaza o noua 
// instanta care este intoarsa chiar daca functia nu are return:

function MyObject() { 
}

let x = new MyObject();
x.id = 'first';
console.log(x.id);

// O functie fara return apelata fara new intoarce undefined

let y = MyObject();
y.id = 'second';
console.log(y.id);

// Arunca eroare pentru ca y nu este definit

// Daca functia intoarce this si este apelata fara new, 
// atunci ce intoarce este contextul global

function MyObject() {
    return this;
}

let z = MyObject();
z.id = 'third';
console.log(z.id);
console.log(id);