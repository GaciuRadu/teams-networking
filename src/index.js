import { electron } from "webpack";
import "./style.css";

let allTeams = [];
let editId = [];

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

function updateTeamRequest(team) {
  return fetch("http://localhost:3000/teams-json/update", {
    method: "PUT",
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
    <td> 
      <a data-id="${team.id}" class="edit-btn">✎</a> 
      <a data-id="${team.id}" class="delete-btn">✖</a>
          </td>
  </tr>`;
}

function getTeamAsHTMLInputs(team) {
  // console.info(team);
  return `<tr>
    <td></td>
    <td>
      <input value=${team.promotion} type="text" required name="promotion" placeholder="Enter promotion" />
    </td>
    <td>
      <input value=${team.members} type="text" required name="members" placeholder="Enter members" />
    </td>
    <td>
      <input value=${team.name} type="text" required name="name" placeholder="Enter project name" />
    </td>
    <td>
      <input value=${team.url} type="text" required name="url" placeholder="Project URL" />
    </td>
    <td>
      <button type="submit" title="Save">💾</button>
      <button type="reset" title="Cancel">x</button>
    </td>
  </tr>`;
}

function renderTeams(teams, editId) {
  console.warn("render", teams);
  const htmlTeams = teams.map(team => {
    return team.id === editId ? getTeamAsHTMLInputs(team) : getTeamAsHTML(team);
  });
  // console.warn(htmlTeams);
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

function getTeamValues(parent) {
  const promotion = $(`${parent} input[name=promotion]`).value;
  const members = $(`${parent} input[name=members]`).value;
  const name = $(`${parent} input[name=name]`).value;
  const url = $(`${parent} input[name=url]`).value;
  const team = {
    promotion: promotion,
    members: members,
    name,
    url
  };
  return team;
}

function onSubmit(e) {
  //   console.warn("submit", e);
  e.preventDefault();

  console.warn(`update or crate?`, editId);

  const team = getTeamValues(editId ? "tbody" : "tfoot");

  console.warn(team);

  if (editId) {
    team.id = editId;
    console.warn("update...", team);

    updateTeamRequest(team).then(status => {
      console.warn("updated", status);
      if (status.success) {
        window.location.reload();
      }
    });
  } else {
    createTeamRequest(team).then(status => {
      // console.warn("created", status);
      if (status.success) {
        window.location.reload();
      }
    });
  }
}
function startEdit(id) {
  editId = id;
  console.warn("edit... %o", id, allTeams);
  // const team = allTeams.find(team => team.id === id);

  // console.warn(team.promotion);
  // $("#promotion").value = team.promotion;
  // $("#members").value = team.members;
  renderTeams(allTeams, id);

  document.querySelectorAll("tfoot input").forEach(input => {
    input.disabled = true;
  });
}

function initEvents() {
  $("#teamsForm").addEventListener("submit", onSubmit);
}
// console.info("delete?", document.querySelectorAll("delete-btn"));
$("#teamsTable tbody").addEventListener(`click`, e => {
  console.warn("click", e.target.matches(`a.delete-btn`));
  if (e.target.matches(`a.delete-btn`)) {
    const id = e.target.dataset.id;
    // console.warn("delete...%", id);
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

// Teste

// console.info(typeof document.getElementsByTagName("body")[0]);
// console.info(typeof {});
// console.info(typeof []);

// var string = "String";
// if ("string" != string.trim()) console.info("case1");
// // else console.info("case2");

// var x;
// console.warn(x);

// function name() {
//   if ("yes" == "yes") {
//     console.warn("yes");
//   }
// }
// name();

// var firstName = "Radu";
// var middleName = "Cristian";
// var lastName = "Gaciu";
// var fullName = `${firstName} ${middleName} ${lastName}`;
// var fullName = "firstName + LastName";
// console.warn(fullName);

// for (var i = 0; i < 5; i++) {
//   console.info(i);
// }
