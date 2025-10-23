// Adaugam metoda format tuturor obiectelor de tip String prin definirea
// ei in obiectul prototype al tipului String, ceea ce ne permite sa 
// apelam noua metoda cu orice instanta de tip String: 
if (!String.prototype.format) {
    String.prototype.format = function() {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function(match, index){ 
            return args[index] !== undefined ? args[index] : match;
    });
    }
}

console.log("Hello, {0} {1}!".format("Gabriel", "Rosu"));