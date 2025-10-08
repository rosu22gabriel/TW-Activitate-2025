const express = require('express');
const PORT = process.env.port || 3000;

function printRequestHeaders(req) { 
    let output = '<p><h1>Request Headers</h1>';
    output += '<ul>';
    for (const key in req.headers) { 
        if (req.headers.hasOwnProperty(key)){ 
            output += `<li>${key}: ${req.headers[key]} </li>`;
        }
    }
    output += '</ul></p>'
    return output;
}

express()
    .get('/', (req, res) => { 
        res.send(printRequestHeaders(req));
    })
    .listen(PORT, () => console.log(`Server is listening on port ${PORT}`))