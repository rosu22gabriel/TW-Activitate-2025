function curry(f) {
    return function curried(...args) {
        if (args.length >= f.length) {
            // Daca avem argumentele necesare, apelam functia
            return f.apply(this, args);
        } else {
            return function(...args2) {
                // Altfel, intoarcem o functie care apeleaza functia
                // intoarsa colectand argumentele apelului curent
                return curried.apply(this, args.concat(args2));
            }
        }
    }
}

function log(date, level, message) {
    console.log(`[${date}][${level}]: ${message}`);
}

// Se poate capta data curenta si nivelul de eroare creand o functie
// care sa fie apoi apelata doar cu mesajul erorii pentru a o jurnaliza

const curriedLog = curry(log);
const logNow = curriedLog(new Date());
const logErrorNow = logNow('Error');

try {
    throw new Error('Generic error');
} catch (e) {
    logErrorNow(e.message); 
    // In momentul in care avem toate argumentele necesare, metoda
    // log este apelata
}


