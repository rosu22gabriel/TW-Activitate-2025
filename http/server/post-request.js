const express = require('express');
const PORT = process.env.PORT || 5000;

function printCollection(collection) { 
    let output = '<p><h1>Form</h1>';
    output += '<ul>';
    for (const key in collection) { 
        if (collection.hasOwnProperty(key)) {
            output += `<li>${key}: ${collection[key]}</li>`;
        }
    }
    output += '</ul></p>';
    return output;
}


express()
    .use(express.static("../client/post.html"))
    .use(express.urlencoded({extended : true}))
    .post('/form', (request, response) => { 
        response.send(printCollection(request.body))
    })
    .listen(PORT, () => { 
        console.log(`Server is running on port ${PORT}`)
    })
