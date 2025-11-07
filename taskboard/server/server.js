const express = require('express');
const PORT = 8080;
const {getTasksByStatus, changeTaskStatus} = require('./service');


express()
    .use(express.static("../client"))
    .get('/tasks', (req, res) => {
        const tasksByStatus = getTasksByStatus();
        if (Object.keys(tasksByStatus).length > 0) {
            res.json(tasksByStatus);
        } else {
            res.sendStatus(204);
        }
    })
    .patch('/tasks', (req, res) => { 
        if (req.query.task
            && req.query.oldStatus
            && req.query.newStatus) {
            if (changeTaskStatus(req.query.task, req.query.oldStatus, req.query.newStatus)) {
                res.sendStatus(204); 
            } else {
                res.sendStatus(403); // forbidden
            } 
        } else {
            res.sendStatus(400);
        }
    })
    .listen(PORT, () => {console.log("Server is running on ${PORT}")});