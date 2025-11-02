const {existsSync, readFileSync, writeFileSync} = require('fs');
module.exports = function(path) {
    function load(path) {
        if (existsSync(path)) {
            return JSON.parse(readFileSync(path));
        } else {
            return {};
        }
    }
    function store(path, teams) {
        writeFileSync(path, JSON.stringify(teams));
    }
    return {
        getTeams: function() {
            const teams = load(path);
            return Object.keys(teams);
        },
        getTeamMembers: function(team) {
            const teams = load(path);
            return teams[team];
        },
        addTeam: function(team) {
            const teams = load(path);
            if (!teams[team]) { 
                teams[team] = [];
                store(path, teams);
                return true;
            } else {
                return false;
            }
        },
        addTeamMember: function(team, member) {
            const teams = load(path);
            for (let members of Object.values(teams)) {
                if (members.find((item) => item.toLowerCase() === member.toLowerCase())) {
                    return false;
                }
            }
            if (!teams[team]) {
                teams[team] = [];
            }
            teams[team].push(member);
            store(path, teams);
            return true;
        },
        removeTeamMember: function(team, member) {
            const teams = load(path);
            if (teams[team]) {
                let index = teams[team].findIndex((item) => item.toLowerCase() === member.toLowerCase());
                if (index > -1) {
                    teams[team].splice(index, 1);
                    store(path, teams);
                    return true
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
    }
};