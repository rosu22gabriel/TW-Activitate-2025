// Din cauza faptului ca accesul la resurse este asincron, apelurile in JavaScript
// tin sa fie imbricate in adancime prin furnizarea unei metode care sa fie apelata inapoi
// cand resursa accesata devine disponibila:


// Solutie: 
// Promise + .then()
// Async + Await

pan.pourWater(function (){ 
    range.brindToBoil(function() { 
        range.lowerHeat(function() {
            pan.addRice(function() { 
                setTimeout(function() {
/*pyramid of doom*/ range.turnOff();
                    serve();
                }, 15 * 60 * 1000);
            });
        });
    });
});

