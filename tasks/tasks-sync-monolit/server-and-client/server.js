const express = require('express');
const { getTasks, addTask, removeTask } = require('./service')('repository.json');
const PORT = process.env.PORT || 8080;

express()
    .use(express.urlencoded({extended: true}))
    // Folosim un template engine pe server (pug)
    .set('view engine', 'pug') // configuram template-engine-ul pe express
    // Este necesara utilizarea sesiunii server pentru a pastra modelul de date 
    // intre apeluri care reincarca pagina
    .use(session({
        secret: 'no secret at all',
        resave: false,
        saveUninitialized: true
    }))
    .get('/', (request, response) => { 
        checkSession(request);
        // Ruta principala apeleaza template-engine-ul sa genereze pagina cu datele 
        // de model
        response.render('index', {title : 'Tasks', tasks: request.session.tasks});
    })
    .post('/add-task', (request, response) => {
        checkSession(request);
        request.session.tasks.push({id: uuid.v1(), description: request.body.task});
        // Rutele care actualizeaza modelul redirecteaza dupa actualizare la ruta principala
        response.redirect('/'); 
    })
    .get('/remove-task/:id', (request, response) => {
        checkSession(request);
        let index = request.session.tasks.findIndex(task => task.id === request.params.id);
        request.session.tasks.splice(index, 1);
        response.redirect('/');
    })
    .listen(PORT, () => console.log(`Server is running on port ${PORT}.`)); 