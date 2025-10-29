// La incarcarea paginii subscriem KeyUp pe input
// sa apelam metoda care cauta compania aeriana dupa nume

window.onload = function() {
    this.document.getElementsByTagName('input')[0].onkeyup =
        event => searchAirline(event.target.value.trim());
}


function searchAirline(name) {
    const resultsElement = document.getElementsByTagName('div')[0];
    if (name.length > 2){
        fetch(`airlines/${name}`)
            .then(response => response.json())
            // Apelam ruta server si inregistram un callback
            // pentru tratarea raspunsului care inregistreaza alt
            // callback pentru citirea corpului acestuia
            .then(body => {
                if (body.length > 0){
                    var html = '<ul>';
                    for (airline of body) {
                        html += `<li>
                                    <a href="javascript:void(0)"
                                    onclick="searchFlights(
                                    {name: '${airline.name}', id: '${airline.id}'})>
                                    ${airline.name}
                                    </a>
                                </li>`;
                    }
                    html += '</ul>';
                } else {
                    html = 'No results found.';
                }
                resultsElement.innerHTML = html;
            });
    } else {
        resultsElement.innerHTML = '';
    }
}



/*
    VARIANTA CU ASYNC/AWAIT

    Apelam ruta server cu await iar dupa primirea raspunsului, apelam
    cu await citirea corpului acestuia, fapt pentru care metoda trebuie
    declarata cu async

    async function searchAirline(name) {
        let html = '';
        if (name.length > 2) {
            const response = await fetch(`airlines/${name}`);
            const body = await response.json(); 
            if (body.length > 0) {
                html = '<ul>';
                for (airline of body) {
                    html += `<li>
                                <a href="javascript:void(0)"
                                onclick="searchFlights(
                                {name: '${airline.name}', id: '${airline.id}'})">
                                ${airline.name}
                                </a>
                            </li>';                
                }
                html += '</ul>';
            } else {
                html = 'No results found';
            }
        }
        document.getElementsByTagName('div')[0].innerHTML = html;
    }
*/


// Apelam ruta server si inregistram un callback pentru tratarea
// raspunsului care inregistreaza alt callback pentru citirea corpului
// acestuia

function searchFlights(airline) {
    const resultsElement = document.getElementsByTagName('div')[0];
    resultsElement.innerHTML =
        `Loading flights for <b>${airline.name}</b>, this may take a while...`;
    fetch(`flights/${airline.id}`)
        .then(response => response.json())
        .then(body => {
            let html = 'No results found.';
            if (body.length > 0){ 
                html += `<table>
                            <tr>
                                <td><b>Number</b></td>                
                                <td><b>Aircraft</b></td>
                                <td><b>Origin</b></td>
                                <td><b>Destination</b></td>
                                <td><b>Status</b></td>                
                            </tr>`;
                for (let flight of body) {
                    html += `<tr>
                                <td>${flight.number}</td>
                                <td>${flight.aircraft}</td>
                                <td>${flight.origin}</td>
                                <td>${flight.destination}</td>
                                <td>${flight.status}</td>                    
                            </tr>`;
                }
                html += '</tables>';
            }
            resultsElement.innerHTML = html;
        });
}


/*
    VARIANTA CU ASYNC/AWAIT

    Apelam ruta server cu await iar dupa primirea raspunsului, 
    apelam cu await citirea corpului acestuia, fapt pentru care
    metoda trebuie declarata cu async.

    async function searchFlights(airline) {
        const resultsElement = document.getElementsByTagName('div')[0];
        resultsElement.innerHTML =
            `Loading flights for <b>${airline.name}</b>, this may take a while...`;
        const response = await fetch(`flights/${airline.id]}`);
        const body = await response.json();
        let html = 'No results found.';
        if (body.length > 0) {
            html = '<table>
                        <tr>
                            <td><b>Number</b></td>
                            <td><b>Aircraft</b></td>
                            <td><b>Origin</b></td>
                            <td><b>Destination</b></td>
                            <td><b>Status</b></td>
                        </tr>';
            for (let flight of body) {
                html += `<tr>
                            <td>${flight.number}</td>
                            <td>${flight.aircraft}</td>
                            <td>${flight.origin}</td>
                            <td>${flight.destination}</td>
                            <td>${flight.status}</td>
                        </tr>`
            }
            html += '</table>';
        }
        resultsElement.innerHTML = html;
    }
*/
