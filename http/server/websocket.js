// se creeaza o aplicatie cu express
const express = require('express')
const app = express();

// se instaleaza suportul WebSocket peste aplicatia express
require('express-ws')(app); 
const sockets = [];
const PORT = process.env.PORT || 8080;
app
    .use(express.static('../client'))
    // se inregistreaza un callback care va fi apelat la acceptarea unei noi conexiuni WebSocket
    .ws('/', (socket, request) =>  {
        // se adauga conexiunea in lista
        sockets.push(socket);
        // se inregistreaza un callback care va fi apelat la primirea unui mesaj de la conexiunea WebSocket
        socket.on('message', message => 
            sockets.forEach(s => s.send(message)) // se trimite mesajul primit tuturor clientilor din lista
        );
        // la inchiderea conexiunii, o eliminam din lista pentru a nu-i trimite mesaje
        socket.on('close', (code, reason) => { 
            let index = sockets.indexOf(socket);
            if (index !== -1) {
                sockets.splice(index, 1);
            }
        });
    })
    .listen(PORT, () => console.log(`Server is running on ${PORT}.`)); 
    