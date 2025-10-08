const express = require('express');
const PORT = process.env.PORT || 3000;

express()
    .get('/', (req, res) => { 
        if(req.query.login) { 
            res.send(`Hello, ${req.query.login}!
                <input type="button" value="logout" onclick="window.location.href='/'"/>
                `);
        }
        else {
            res.redirect(301, '/login')
        }
    })
    .get('/login', (req, res) => { 
        res.send(`<form action="/" method="get">
                User
                <input type="text" name="login"/>
                <input type="submit" value="Login"/>
            </form>
            `)
    })
    .listen(PORT, () => { 
        console.log(`Server is listening on port ${PORT}`);
    })