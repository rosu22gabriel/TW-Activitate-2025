const SEARCH_AIRLINE_URL = 'https://www.flightradar24.com/v1/search/web/find?type=operator&query=';
const SEARCH_FLIGHTS_URL = 'https://data-cloud.flightradar24.com/zones/fcgi/feed.js?airline=';
const SEARCH_FLIGHT_URL = 'https://data-live.flightradar24.com/clickhandler/?flight=';

// apelam rutele si subscriem cu then pentru a citi raspunsul
// si a deserializa corpul acestuia

function searchAirline(name) {
    return new Promise((resolve, reject) => 
        fetch(SEARCH_AIRLINE_URL + name)
            .then(response => response.json(),
                error => reject(error))
            .then(body =>
                resolve(
                    body.results.map(result => 
                        ({
                            id: result.id,
                            name: result.name
                        })
                    )
                ),
            error => reject(error))
    );
}

/*
    VARIANTA CU ASYNC/AWAIT

    async function searchAirline(name) {
        try {
            const response = await fetch(SEARCH_AIRLINE_URL + name)
                .catch(error => { throw error;});
            const body = await response.json()
                .catch(error => { throw error;});
            return body.results.map(result => ({ 
                id: result.id,
                name: result.name
            }));
        } catch (error) {
            return [];
        }
    }
*/

function searchFlights(airline) { 
    return new Promise((resolve, reject) => 
        fetch(SEARCH_FLIGHTS_URL + airline.toUpperCase())
            .then(response => response.json(),
                error => reject(error))
            .then(body => {
                Promise.all(Object.entries(body)
                    .filter(([code, value]) => value instanceof Array)
                    .map(([code, value]) => searchFlight(code)))
                    .then(flights => resolve(flights
                        .sort((first, second) => 
                            first.number.localeCompare(second.number))),
                        error => reject(error))
            },
            error => reject(error))
    );
}


// Apelam Promise.all pentru a astepta rezolvarea tuturor obiectelor Promise
// create prin apelurile searchFlight pentru fiecare zbor.


/*
    VARIANTA CU AWAIT

    In cazul apelului cu await nu avem o metoda de sincronizare a tuturor
    apelurilor searchFlight, tocmai de aceea nu putem apela map pe 
    lista zborurilor, ci trebuie sa le parcurgem cu instructiunea si sa
    apelam cu await de fiecare data metoda searchFlight

    async function searchFlights(airline) {
        try {
            const response = await fetch(SEARCH_FLIGHTS + airline.toUpperCase())
                .catch(error => { throw error; });
            const body = await response.json()
                .catch(error => { throw error; });
            const flights = [];
            for (let code in body) {
                if (body[code] instanceof Array) {
                    const flight = await searchFlight(code);
                    if (flight != null) {
                        flights.push(flight);
                    }
                }
            }
            return flights.sort((first, second) => 
                first.number.localeCompare(second.number));
        } catch (error) {
            return [];
        }
    }
*/

function searchFlight(code) {
    return new Promise((resolve, reject) =>
        fetch(SEARCH + code)
            .then(response => response.json(),
                error => reject(error))
            // Apelam ruta server si inregistram un callback pentru tratarea
            // raspunsului care inregistreaza alt callback pentru citirea
            // corpului acestuia
            .then(body =>
                resolve (
                    ({
                        number: body.identification.number.default,
                        aircraft: body.aircraft.model.text,
                        origin: body.airport.origin ? body.airport.origin.name : 'Unknown',
                        destination: body.airport.destination ? body.airport.destination.name : 'Unknown',
                        status: body.status.text
                    })
                ),
                error => reject(error)
            )
    );
} 


/*
    VARIANTA CU ASYNC/AWAIT
    
    async function searchFlight(code) {
        try {
            const response = await fetch(SEARCH_FLIGHT_URL + code)
                .catch(error => { throw error;});
            const body = await response.json()
                .catch(error => { throw error;});
            return {
                number: body.identification.number.default,
                aircraft: body.aircraft.model.text,
                origin: body.airport.oriin
                    ? body.airport.origin.name: 'Unknown',
                destination: body.airport.destination
                    ? body.airport.destination.name: 'Unknown'
                status: body.status.text
            };
        } catch(error){ 
            return null; 
        }
    }
*/

module.exports = {searchAirline, searchFlights};