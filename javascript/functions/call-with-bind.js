// bind - creeaza o noua functie avand setat contextul this ca fiind 
// argumentul apelului metodei bind


// Variabila globala accesibila prin this.myName cand this este contextul
// global
myName = "Gabriel"; 

const inRomanian = {
    myName: "tot Gabriel", 
    // Metoda whoAmI intoarce valoare proprietatii myName din contextul
    // apelantului
    whoAmI: function() {
        return this.myName;
    }
};

// Apelata in contextul inRomanian, metoda whoAmI intoarce "tot Gabriel"
console.log(inRomanian.whoAmI());

// whoAmI se executa in contextul global si intoarce "Gabriel"
whoAmI = inRomanian.whoAmI;
console.log(whoAmI());

// bind creaza o noua functie legata de contextul inRomanian, astfel incat
// apelul whoAmI acum intoarce "tot Gabriel"
whoAmI = whoAmI.bind(inRomanian);
console.log(whoAmI());