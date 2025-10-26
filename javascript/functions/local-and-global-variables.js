/* 
    - Un scope este un set de variabile la care o functie are acces;
    - Exista un scope global si un set de scope-uri imbricate pentru
      functii;
    - JavaScript cauta valoarea unei variabile printr-un lant de scopes;
    - Se pot declara variabile globale in orice punct (desi nu este o 
      idee buna);
    - La cautarea unei variabile se incearca scope-ul curent, dupa care 
      se trece la scope-ul superior;
    - Functiile din interiorul altei functii determina pastrarea scope-ului
      parinte;
*/

n = 1; // Defineste o variabila in scopul global
function f() {
    var n = 2; // Redefineste variabila in scopul functiei
    console.log(n);
    {
        let n = 3; // Defineste o variabila locala in bloc
        console.log(n); // Afiseaza 3, cat este variabila locala in bloc
    }
    console.log(n); // Afiseaza 2, cat este variabila locala in functie
}
f();
console.log(n); // Afiseaza 1, cat este variabila globala