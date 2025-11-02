const express = require('express');
const service = require('./service')('items.json');
const PORT = process.env.PORT || 8080;
const app = express();

app
    .use(express.static('../client'))
    .use(express.text())
    .get('/items', (request, response) => {
        const items = service.getItems();
        if (items.length > 0) {
            response.json(items);           // Intoarce inregistrarile
        } else {
            response.sendStatus(204);
        }
    })
    .post('/items/:id',  (request, response) => {
        if (service.removeItems(parseInt(request.params.id))) {
            response.sendStatus(204);
        } else {                            // Sterge o inregistrare
            response.sendStatus(404);
        }
    })
    .put('/items/:id', (request, response) => {
        if (service.changeItem(parseInt(request.params.id),
                request.body)) {
            response.sendStatus(204);
        } else {                            // Adauga o inregistrare
            response.sendStatus(404);
        } 
    })
    .delete('/items/:id', (request, response) => {
        if (service.removeItem(parseInt(request.params.id))) {
            response.sendStatus(204);
        } else {                            // Sterge o inregistrare
            response.sendStatus(404);
        }
    })