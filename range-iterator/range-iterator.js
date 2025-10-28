function RangeIterator(start = 1, stop = Infinity, step = 1) {
    const iterator = {
        [Symbol.iterator]() {
            // Un iterator este un obiect care are o metoda cu un
            // nume special (Symbol.iterator) apelata de instructiunea
            // for..of pentru a obtine un obiect iterabil
            let next = start;
            let count = 0;
            return {
                next() {
                    // Obiectul iterabil trebuie sa aiba o metoda next
                    // care sa intoarca de fiecare data un obiect cu
                    // doua proprietati: value si done
                    let item;
                    if (next < stop) {
                        item = {value: next, done: false};
                        next += step;
                        count++;
                        return item;
                    }
                    return {value: count, done: true};
                    // Iterarea se incheie cand obiectul intors de
                    // apelul next are valoarea true a proprietatii done
                }
            };
        }
    };
    return iterator;
}