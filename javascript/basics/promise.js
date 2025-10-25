// Promisiunile permit executia unei serii de operatii intr-un mediu asincron;
// Promisiunile sunt pentru codul asincron ce este tratarea exceptiilor pentru codul
// sincron;
// O promisiune este fie rezolvata, fie in curs de rezolvare;
// O promisiune rezolvata a produs fie o valoare fie o eroare;

new Promise();
resolve(); // Go to Next Action
reject(); // Handle Error

let myPromise = new Promise(function(resolve, reject) {
    try {
        // Call code to produce value
        resolve(value); // when successful
    } catch (error) {
        reject(error); // when error
    }
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
    function(value) { /* code if successful */ },
    function(error) { /* code if some error */ }
);