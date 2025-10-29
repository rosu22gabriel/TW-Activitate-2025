const express = require('express');
const {searchAirline, searchFlights} = require('./service');
const PORT = process.env.PORT || 3000;
const app = express();

app
    .use(express.static('./client'))
    // Se inregistreaza doua rute pentru a cauta o companie
    // aeriana dupa nume si respectiv zborurile acesteia
    .get('/airlines/:name', (request, response) => 
        searchAirline(request.params.name)
            .then(airlines => response.json(airlines),
                error => response.json([]))
    )
    .get('/flights/:airline', (request, response) => 
        // Implementarea bazata pe Promise apeleaza metoda serviciului
        // si inregistreaza metoda care consuma raspunsul cu then.
        searchFlights(request.params.airline)
            .then(flights => response.json(flights),
                error => response.json([]))
    )
    .listen(PORT, () => console.log(`Server is running on PORT ${PORT}.`));

// Implementarea bazata pe async/await apeleaza metoda serviciului
// asteptand sa preia rezultatul si apoi intoarce apelantului