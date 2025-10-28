/*
    -Functiile generator sunt functii utilizate pentru a produce pe rand
     valori;
    -Dintr-o functie generator se poate iesi si reintra, contextul acesteia
     fiind salvat si reutilizat intre rulari succesive;
    
    -Se definesc folosind sintaxa: function*
    
    -Rezultatul intors de o functie generator este un obiect de tip Generator
     ale carui valori pot fi iterate apelandu-i metoda: 
     next(), preluand value, respectiv se poate verifica terminarea
     valorilor cu ajutorul proprietatii done.
     
     Definirea functiilor generator
     
     Sintaxa function* precizeaza ca functia intoarce un generator
     
     function* name([param[, param[, ... param]]]) {
         statements
     };
*/

// Metoda a unei clase

class Foo {
    *generator () {
        yield 1;
        yield 2;
        yield 3;
    }
}

const f = new Foo();
const gen = f.generator();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true}


// Proprietate unui obiect

const someObject = {
    *generator() {
        yield 'a';
        yield 'b';
    }
}

const g = someObject.generator();
console.log(g.next()); // { value: 'a', done: false }
console.log(g.next()); // { value: 'b', done: false}
console.log(g.next()); // { value: undefined,  done: true}


// Functie libera

function* counter() {
    var index = 1;
    while (true) {
        yield index++;
    }
}

const generator = counter();
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
console.log(generator.next().value); // 3

// Dupa epuizarea valorilor produse, generatorul intoarce undefined.

// Ca expresie

const foo = function*() {
    yield 10;
    yield 20;
}


// Etapele executiei unei functii generator


function* fibonacci() { // 2. La primul apel next() se executa functia pana la yield
    var v = [1, 2], i = 0;
    while (true) { // 5.La urmatoarele apeluri next() ciclul se reia
        v.push(v[i] + v[i + 1]);
        yield v[i++]; // 3. Yield intoarce valoare apelantului
    }
}

const gen_erator = fibonacci(); // 1. Apelul functiei intoarce un generator
for (let i = 0; i < 10; i++) {
    console.log(g.next().value); 
    // 4. Urmatoarele apeluri next() continua functia cu instructiunea
    // care urmeaza dupa yield 
}








