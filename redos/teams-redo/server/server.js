const express = require('express');
const {getTeams, getTeamMembers, addTeam, addTeamMember, removeTeamMember} = require('./service')('teams.json');
const PORT = process.env.PORT || 8080;

express()
    .use(express.static('../client'))
    .use(express.text())
    .get('teams', (req, res) => {
        const teams = getTeams();
        if (teams.length > 0) {
            return res.json(teams);
        } else {
            return res.sendStatus(204) // 204 - no content
        }
    })
    .get('teams/:team/members', (req, res) => 
    {
        const members = getTeamMembers(req.params.team);
        if (members) {
            res.json(members);
        } else {
            res.sendStatus(404);
        }
    })
    .post('/teams', (req, res) => {
        if (addTeam(req.body)) {
            return res.sendStatus(201); // 201 - created
        } else {
            return res.sendStatus(403); // 403 access to the requested resource is forbidden
        }
    })
    .post('/teams/:team/members', (req, res) => {
        if (addTeamMember(req.params.team, req.params.member)) {
            return response.sendStatus(204);
        } else {
            res.sendStatus(404);
        }
    })
    .listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
