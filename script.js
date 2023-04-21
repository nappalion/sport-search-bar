
// Here is a function to get teams from the API: https://www.api-football.com/documentation-v3
// You can find the Javascript code on that website.
function getTeams() {
    let teamsList = [];
    fetch("https://v3.football.api-sports.io/teams?league=39&season=2021", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": "360668b6bb5e02322da11a98b8ef4e43"
        }
    })
    .then(response => {
        return response.json();
    })
    .then(data =>{
        // Here we are adding the teams to a list
        const teams = data.response
        teams.forEach(team => {
            teamsList.push(team.team.name);
        });
    })
    .catch(err => {
        console.log(err);
    });
    return teamsList;
}

const teamsList = getTeams();

// Look for the elements in the HTML using this code
const search = document.querySelector(".search");
const teamContainer = document.querySelector("ul");

// We add an event listener to our search bar so it runs code when a user types
search.addEventListener('input', function(event) {

    // Here we get whatever the user typed
    let userSearch = event.target.value.toString().toLowerCase();

    // Clear the list of teams on the HTML
    teamContainer.innerHTML = '';

    // For every team in our list, check if the user searched for that team
    teamsList.forEach( item => {
        const team = item.toString();

        // We do ".toLowerCase()" so that "manchester" and "Manchester" are the same
        if (team.toLowerCase().includes(userSearch) && userSearch != "") {

            // Here we add the team to the list in HTML
            const teamElement = document.createElement("li");
            teamElement.textContent = team;
            teamContainer.appendChild(teamElement);
        }
    });
});

