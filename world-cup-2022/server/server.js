// modulul express pentru a porni serverul
const express = require("express");
const { getBoard, getStandings, getMatches} = require("./service");
// modulul path pentru a localiza resursele in sistemul de fisiere
const { join, resolve} = require("path");
const PORT = process.env.PORT || 8080;

express()
    // configuram livrarea de resurse statice ale aplicatiei
    // client dintr-un subdirector
    .use(express.static(join(resolve(), 'public')))
    // inregistram rute al caror raspuns este generat de propriile
    // noastre functii callback
    .get('/board', async (req, res) => {
        res.json(await getBoard())
    })
    .get('/standings/:group', async (req, res) => {
        res.json(await getStandings(req.params.group))
    })
    .get('/matches/:team', async(req, res) => {
        res.json(await getMatches(req.paramas.team))
    })
    // pornim serverul pe un anumit port
    .listen(PORT, () => console.log(`Server is running on port ${PORT}.`));
