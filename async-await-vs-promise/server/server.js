const express = require('express');
const {resolve, join} = require('path');
const searchName = require('./service');
const PORT = process.env.PORT || 1234;
const app = express(); 

app
    // Pornim serverul express care va livra continutul static al aplicatiei
    // client plus ruta dinamica pentru cautarea tarilor in care apare mai
    // frecvent un nume de familie
    .use(express.static('../client'))
    .get('/names/:name', async (request, response) =>
        response.json(await searchName(request.params.name)))
    .listen(PORT, () => console.log(`Server is listening on port ${PORT}`));