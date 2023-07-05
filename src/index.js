import "./style.css";

// console.warn("start app");

function getTeamAsHTML(team) {
  // console.info(team);
  return `<tr>
    <td></td>
    <td>${team.promotion}</td>
    <td>${team.members}</td>
    <td>${team.name}</td>
    <td>${team.url}</td>    
    <td>x</td>
    </tr>`;
}

function renderTeams(teams) {
  //   console.warn("render", teams);
  const htmlTeams = teams.map(getTeamAsHTML);
  //   console.warn(htmlTeams);
  document.querySelector("#teamsTable tbody").innerHTML = htmlTeams.join("");
}

function loadTeams() {
  fetch("teams.json")
    .then(r => r.json())
    .then(renderTeams);
}

loadTeams();
