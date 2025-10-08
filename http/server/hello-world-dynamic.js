const express = require('express');
const PORT = process.env.PORT || 8080;

express()
    .get('/', (req, res) => { 
        res.send('hello world');
    })
    .listen(PORT, () => { 
        console.log(`Server is listening on port ${PORT}...`);
    })