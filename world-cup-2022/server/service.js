// Includem node-fetch pentru a consuma un API via HTTP
const fetch = require('node-fetch');

async function getToken(email, password) {
    const response = await fetch('http://api.cup2022.ir/api/v1/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        // Pentru autorizare obtinem in urma unui apel POST
        // un token prin autentificarea cu e-mail si parola
        body: JSON.stringify({email, password})
    });
    const body = await response.json();
    return body.data.token;
}

// La fiecare apel al rutelor API-ului obtinem mai inainte token-ul
// pe care il trimitem in header si intoarcem corpul raspunsului
async function getData(path) {
    const token = await getToken(EMAIL, PASSWORD);
    const response = await fetch(`http://api.cup2022.ir/api/v1/${path}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    // Atat cererile HTTP cat si extragerea corpului raspunsului
    // sunt operatii asincrone care necesita blocare apelantului
    // pana la obtinerea rezultatului asteptat
    const body = await response.json();
    return body.data;
}


async function getBoard() {
    const data = await getData('team');
    const board = data.map(team => ({
        // extragem si agregam componenta grupelor
        id: team.id,
        name: team.name_en,
        flag: team.flag,
        group: team.groups
    }))
    .reduce((groups, team) => {
        if (!groups[team.group]) {
            groups[team.group] = [];
        }
        groups[team.group].push(team);
        delete team.group;
        return groups;
    }, {});
    return sortObject(board);
}

async function getMatches(team) {
    const data = await getData(`match/${team}`);
    const matches = data.map(match => ({
        localDate: match.local_date,
        homeId: match.home_team_id,
        awayId: match.away_team_id,
        homeTeam: match.home_team_en,
        awayTeam: match.away_team_en,
        homeScore: parseInt(match.home_score),
        awayScore: parseInt(match.away_score),
        homeFlag: match.home_flag,
        awayFlag: match.away_flag
    }))
    .sort((first, second) => 
        first.localDate.localeCompare(second.localDATE));
    return matches;
}

async function getStandings(group) {
    const data = await getData(`standings/${group}`);
    const standings = {group};
    standings.team = data[0].teams
        .map(team => ({
            id: team.team_id,
            name: team.name_en,
            flag: team.flag,
            mp: parseInt(team.mp),
            w: parseInt(team.d),
            l: parseInt(team.l),
            gf: parseInt(team.gf),
            ga: parseInt(team.ga),
            gd: parseInt(team.gd),
            pts: parseInt(team.pts)
        }))
        .sort((first, second) => {
            let result = second.pts - first.pts;
            if (result === 0){
                results = second.gd - first.gd;
            }
            if (result === 0){
                result = second.gf - first.gf;
            }
            return result;
        });
    return standings;
}

module.exports = {getBoard, getStandings, getMatches};


