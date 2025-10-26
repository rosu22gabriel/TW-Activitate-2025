// functiile anonime se pot stoca in variabile:

let f = function() { }

/* Pentru ca variabile contine efectiv functia, se poate utiliza ca atare,
   cu aceleasi reguli legate de valorile returnate ca orice alta functie
*/

g(f);

/* 
   Functiile pot fi trimise ca parametri la alte functii si returnate din
   alte functii;
 */

/*
    O functie care primeste ca parametru o alta functie se numeste functie
    functie de grad mai mare ca 1 (higher order function);
 */


// Consecinta este posibilitatea de a scrie functii parinte polimorfe:

f(myList, function(aList) { });

