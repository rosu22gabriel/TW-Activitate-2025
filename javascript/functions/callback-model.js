/*
    -Un model alternativ de scriere a codului
    -O functie va apela alte functii atunci cand termina executia
    -Functiile apelate pot fi diferite, dependent de rezultatul 
     executiei functiei apelante
    -La limita, o paradigma diferita de programare (Continuation Passing Style)
    -Modelul callback conduce la imbricarea apelurilor (Callback Hell)
    -cu probleme mari de sincronizare
 */



// Pentru a primi rezultatul, o functie asincrona este apelata
// cu metode callback

function resolveAfter2Seconds(resolve, reject) {
    setTimeout(() => {
        let n = Math.floor(100 * Math.random());
        if (n % 2 === 0) {
            resolve();
        } else {
            reject();
        }
    }, 1000);
}


// Functia care consuma rezultatul ar putea la randul ei sa apeleze o alta
// functie asincrona
resolveAfter2Seconds(
    () => console.log('ok'),
    () => console.log('ko')
)

// Promise este un mecanism pentru sincronizarea mai multor apeluri
// de functii asincrone inlantuite

// function resolveAfter2Seconds(resolve, reject, n = 1) {
//     return new Promise((resolve, reject) => {
//             setTimeout(() => {
//             let n = Math.floor(100 * Math.random());
//             if (n % 2 === 0) {
//                 resolve();
//             } else {
//                 reject();
//             }
//         }, 1000);
//     });
// }


resolveAfter2Seconds()
    .then(
        () => console.log('ok'),
        () => console.log('ko')
    );



/* 
    Mecanismul Promise permite liniarizarea secventelor callback
    de tratare a rezultatelor apelurilor mai multor functii asincrone
    in secventa

    Acesta nu rezolva insa descompunerea programului in functii
    callback, ci doar liniarizeaza ramificarile
*/

//Callback Hell
moveTo(50, 50, () => {
    moveTo(20, 100, () => {
        moveTo(100, 200, () => {
            moveTo(2, 10, () => {
                //done 
            });
        });
    });
});


//Promise
moveTo(50, 50)
    .then(() => moveTo(20, 100))
    .then(() => moveTo(100, 200))
    .then(() => (2, 10))



/*
    Functiile care asteapta dupa producerea unui rezultat obtinut
    asincron trebuie declarate cu async function

    Pentru a extrage sincron rezultatul Promise se apeleaza await

    async function name([param[, param[, ...param]]]) {
        statements
    }
*/

async function resolveAfter2SecondsAsync() {
    console.log('calling');
    try {
        await resolveAfter2Seconds()
            .catch(e => {throw e;});
            // Rezultatul intors de reject se primeste in callback-ul functiei catch
        console.log("ok");
    } catch (e) {
        console.log("ko");
    }
}

resolveAfter2SecondsAsync();