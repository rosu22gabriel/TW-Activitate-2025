// Se importa functia DataReader din modulul buffered-reader si modulul express
const { DataReader } = require ("buffered-reader");
const express = require('express');
const cities = [];
const PORT = process.env.PORT || 8080;

express()
    .use(express.static('./client'))
    .get("/cities.json", (req, res) => res.json(cities))
    .listen(PORT, () => {
        try {
            new DataReader('cities.csv', {encoding: 'utf8'})
                .on('error', error => console.log(error))
                .on('line', line => { 
                    var data = line.split(',');
                    cities.push({ 
                        nume: data[1],
                        district: data[2],
                        inhabitants: parseInt(data[3])
                    });
                })
                .read();
            console.log(`Server is running on port ${PORT}.`);
        } catch (error) {
            console.error("error");
        }
    })