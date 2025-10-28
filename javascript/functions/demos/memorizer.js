// Memorizarea rezultatelor apelurilor functiei

// Memorizarea este o tehnica de optimizare a executiei functiei
// prin salvarea rezultatelor apelurilor anterioare cu scopul reducerii
// timpului de raspuns

function memorizer(f) {
    let cache = {};
    // Decoratorul pastreaza un cache cu rezultatele pentru fiecare
    // argument
    return function(n)  {
        if (cache[n] !== undefined) {
            console.log(`returning ${f.name} (${n}) from cache`);
            return cache[n];
            // Daca rezultatul a fost deja calculat pentru argumentul curent
            // este intors din cache, daca nu, se apeleaza functia si se 
            // stocheaza rezultatul in cache
        } else {
            let result = f(n);
            cache[n] = result;
            return result
        }
    }
}

fibonacci = n => n < 3 
    ? n : fibonacci(n - 1) + fibonacci(n - 2);

fibonacci = memorizer(fibonacci);
console.log(fibonacci(5));
console.log(fibonacci(3));
console.log(fibonacci(5));

