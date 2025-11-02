async function loadTeams() {
    const teamsList = document.getElementById('teams');
    teamsList.innerHTML = '';
    const response = await fetch('/teams');
    if (response.status === 200) {
        const teams = await response.json();
        teams.forEach(team => {
            let teamItem = document.createElement('li');
            let teamLink = document.createElement('a');
            teamLink.innerText = team;
            teamLink.href = 'javascript:void(0)';
            teamLink.onclick = function() {
                displayTeamsDetails(team);
            };
            teamItem.appendChild(teamLink);
            teamsList.appendChild(teamItem);
        });
    }
}
function displayTeamsDetails(team) {

}
window.onload = async function() {
    await loadTeams();
}