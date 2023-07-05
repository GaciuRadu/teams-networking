import "./style.css";

function $(selector) {
  return document.querySelector(selector);
}

function createTeamRequest(team) {
  return fetch("http://localhost:3000/teams-json/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(team)
  }).then(r => r.json());
}

// console.warn("start app");

function getTeamAsHTML(team) {
  // console.info(team);
  return `<tr>
    <td></td>
    <td>${team.promotion}</td>
    <td>${team.members}</td>
    <td>${team.name}</td>
    <td>${team.url}</td>    
    <td>x 🖍️</td>
    </tr>`;
}

function renderTeams(teams) {
  //   console.warn("render", teams);
  const htmlTeams = teams.map(getTeamAsHTML);
  //   console.warn(htmlTeams);
  $("#teamsTable tbody").innerHTML = htmlTeams.join("");
}

function loadTeams() {
  fetch("http://localhost:3000/teams-json")
    .then(r => r.json())
    .then(renderTeams);
}

function onSubmit(e) {
  //   console.warn("submit", e);
  e.preventDefault();

  const members = $("#members").value;
  const name = $("input[name=name]").value;
  const url = $("input[name=url]").value;
  const team = {
    promotion: $("#promotion").value,
    members: members,
    name,
    url
  };
  console.warn(team);

  createTeamRequest(team).then(status => {
    console.warn("created", status);
    if (status.success) {
      window.location.reload();
    }
  });
}

function initEvents() {
  $("#teamsForm").addEventListener("submit", onSubmit);
}

loadTeams();
initEvents();
