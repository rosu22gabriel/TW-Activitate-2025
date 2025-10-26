/*
    - JavaScript suporta functii anonime(lambda-uri);
    - Lambda este denumirea traditionala pentru expresii prin care se 
      creeaza functii anonime:

      function(x) { return x*2; }

    - Utilitatea este data de cazurile in care o functie nu este gandita
      sa fie reutilizabile (o functie care trateaza un eveniment);
    
    - Lambda-urile pot fi definite si prin arrow functions;
    - In cazul in care in partea dreapta nu se afla un bloc, expresia este
      evaluata direct:

      (x, y) => x+y;
      (x) => ({id: 1, content: x}) - Un obiect in-line se delimiteaza prin ()

    - Daca se utilizeaza un bloc, va trebui sa foloseasca return pentru
      a produce o valoare:
      (x) => { return x+2; }

    - Arrow functions sunt instanceof Function, dar nu pot fi utilizate
      ca si constructori;

    - Nu au acces la array-ul arguments;

    - Nu au prototip;

    - Nu au acces la un this lexical (this este cel din obiectul care contine
    functia);

    - Nu se preteaza sa fie apelate utilizand call, apply sau bind;

    - Nu pot intoarce rezultatul folosind yield.
*/

// Expresiile functionale (arrow functions) permit scrierea simplificata
// a functiilor, mai ales pentru predicate, consumatori sau furnizori de
// valori

(a) => {return Math.pow(2, a);} // Se definesc ca functii anonime cu lista de parametri si corp

a => Math.pow(2, a); /* Parantezele pentru lista de parametri pot fi omise
                       daca avem un singur parametru, respectiv acoladele
                       care delimiteaza corpul daca functia are o singura
                       instructiune care intoarce rezultatul.*/

(a, b) => Math.pow(a, b); /* In cazul in care avem mai multi parametri, parantezele
                        trebuie folosite pentru a delimita lista parametrilor*/

a => ({value: Math.pow(2, a)}); /* Pentru a putea intoarce un obiect in-line,
                                acesta trebuie delimitat intre paranteze */

(a, ...v) => v.forEach(i => a.push(i)); /* Se pot folosi si rest parameters */