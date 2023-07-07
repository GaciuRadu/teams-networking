import "./style.css";

let allTeams = [];

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

function deleteTeamRequest(id) {
  return fetch("http://localhost:3000/teams-json/delete", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id })
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
    <td> 
      <a data-id= "${team.id}" class="delete-btn">✖</a>
      <a data-id= "${team.id}" class="edit-btn">✎</a> 
    </td>
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
    .then(teams => {
      allTeams = teams;
      renderTeams(teams);
    });
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
function startEdit(id) {
  console.warn("edit... %", id, allTeams);
  const team = allTeams.find(team => team.id === id);
  console.warn(team);
}

function initEvents() {
  $("#teamsForm").addEventListener("submit", onSubmit);
}
// console.info("delete?", document.querySelectorAll("delete-btn"));
$("#teamsTable tbody").addEventListener(`click`, e => {
  console.warn("click", e.target.matches(`a.delete-btn`));
  if (e.target.matches(`a.delete-btn`)) {
    const id = e.target.dataset.id;
    console.warn("delete...%", id);
    deleteTeamRequest(id).then(status => {
      // console.info("deete status %o", status);
      if (status.success) {
        window.location.reload();
      }
    });
  } else if (e.target.matches("a.edit-btn")) {
    const id = e.target.dataset.id;
    startEdit(id);
  }
  // console.info("delete status %o", status);
  // window.location.reload();
});

loadTeams();
initEvents();
