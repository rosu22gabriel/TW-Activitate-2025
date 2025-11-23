const express = require('express');
const getResults = require('./service');
const PORT = process.env.PORT || 8080;

express()
    .use(express.static('../client'))
    .get('/results', async (req, res) => {
        res.json(await getResults())
    })
    .listen(PORT, () => console.log(`Server is running on port ${PORT}.`));