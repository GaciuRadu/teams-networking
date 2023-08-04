import { loadTeamsRequest, createTeamRequest, deleteTeamRequest, updateTeamRequest } from "./middleware";
import "./style.css";
import { $, mask, sleep, unmask } from "./utilities";

const form = "#teamsForm";

let allTeams = [];
let editId;

function numbersOfTeams(teams) {
  var countteams = teams.length;
  console.warn("numbers of teams", countteams);
  // console.log(countteams);
  return countteams;
}

console.warn("start app");

function getTeamAsHTML(team) {
  // const id = team.id;
  // const url = team.url;
  const { id, url } = team;
  const displayUrl = url.startsWith("https://github.com/") ? url.substring(19) : url;

  // const displayUrl = url ? (url.includes("//github.com/") ? url.replace("https://github.com/", "") : "google.com") : "";

  // const displayOtherUrl = url.startsWith("https://www.") ? url.substring(12) : url;
  // console.info(team);
  return `<tr>
    <td></td>
    <td>${team.promotion}</td>
    <td>${team.members}</td>
    <td>${team.name}</td>
    <td>
      <a href="${url}" target="_blank"> ${displayUrl}  </a>        
    </td>    
    <td> 
      <button data-id="${id}" type="button" class="action-btn edit-btn" title="edit">✎</button> 
      <button data-id="${id}" type="button" class="action-btn delete-btn" title="delete">🗑️</button>
          </td>
           
  </tr>`;
}

function getTeamAsHTMLInputs({ promotion, members, name, url }) {
  console.info("inputs", arguments);
  // console.info(team);
  return `<tr>
    <td></td>
    <td>
      <input value=${promotion} type="text" required name="promotion" placeholder="Enter promotion" />
    </td>
    <td>
      <input value=${members} type="text" required name="members" placeholder="Enter members" />
    </td>
    <td>
      <input value=${name} type="text" required name="name" placeholder="Enter project name" />
    </td>
    <td>
      <input value=${url} type="text" required name="url" placeholder="Project URL" />
    </td>
    <td>
      <button  type="submit" class="action-btn" title="Save">💾</button>
      <button  type="reset"  class="action-btn" title="Cancel">✖</button>
    </td>
  </tr>`;
}

let previewTeams = [];
function renderTeams(teams, editId) {
  if (!editId && teams === previewTeams) {
    console.warn("same teams already rendered");
    return;
  }
  if (!editId && teams.length === previewTeams.length) {
    const sameContent = previewTeams.every((team, i) => team === teams[i]);
    console.info("sameContent", sameContent);
    if (sameContent) {
      console.info("sameContent");
      return;
    }
  }

  console.time("render");
  previewTeams = teams;
  // console.warn("render", teams);
  const htmlTeams = teams.map(team => {
    return team.id === editId ? getTeamAsHTMLInputs(team) : getTeamAsHTML(team);
  });

  // console.warn(htmlTeams);
  $("#teamsTable tbody").innerHTML = htmlTeams.join("");
  addTitlesToOverflowCells();
  console.timeEnd("render");
}

function addTitlesToOverflowCells() {
  const cells = document.querySelectorAll(`#teamsTable td`);
  // console.warn("cells", cells);
  cells.forEach(cell => {
    cell.title = cell.offsetWidth < cell.scrolWidth ? cell.textContent : "";
  });
}

async function loadTeams() {
  mask(form);
  const teams = await loadTeamsRequest();
  console.warn("teams", teams);
  allTeams = teams;
  renderTeams(teams);
  unmask(form);
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

async function onSubmit(e) {
  // console.warn("submit", e);
  e.preventDefault();
  // console.warn(`update or crate?`, editId);
  const team = getTeamValues(editId ? "tbody" : "tfoot");

  // console .warn(team);

  mask(form);

  if (editId) {
    team.id = editId;
    // console.warn("update...", team);

    const { success } = await updateTeamRequest(team);
    if (success) {
      allTeams = allTeams.map(t => {
        // console.info(t.promotion, t.id === team.id);
        if (t.id === team.id) {
          // console.warn("updates %o -> %o", t, team);
          return {
            ...t,
            ...team
          };
        }
        return t;
      });
      // console.info(allTeams);
      renderTeams(allTeams);
      setInputsDisable(false);
      editId = "";
    }
    unmask(form);
  } else {
    const { success, id } = await createTeamRequest(team);
    if (success) {
      team.id = id;
      // allTeams.push(team);
      allTeams = [...allTeams, team];
      renderTeams(allTeams);
      console.info(allTeams);
      $(form).reset();
    }
    unmask(form);
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
  setInputsDisable(true);
}

function setInputsDisable(disable) {
  document.querySelectorAll("tfoot input").forEach(input => {
    input.disabled = disable;
  });
}

function filterElements(teams, search) {
  search = search.toLowerCase();
  return teams.filter(({ promotion, members, name, url }) => {
    // console.info("search %O in %o", search, team.promotion);
    return (
      promotion.toLowerCase().includes(search) ||
      members.toLowerCase().includes(search) ||
      name.toLowerCase().includes(search) ||
      url.toLowerCase().includes(search)
    );
  });
}

function initEvents() {
  $("#search").addEventListener("input", e => {
    const search = e.target.value;
    const teams = filterElements(allTeams, search);
    console.info("search", search, teams);
    renderTeams(teams);
  });

  $(form).addEventListener("submit", onSubmit);
  $(form).addEventListener("reset", e => {
    // console.info("reset", editId);
    if (editId) {
      // console.warn("cancel- flow de cancel edit");
      allTeams = [...allTeams];
      renderTeams(allTeams);
      setInputsDisable(false);
      editId = "";
    }
  });
}
// console.info("delete?", document.querySelectorAll(".delete-btn"));
$("#teamsTable tbody").addEventListener(`click`, e => {
  // console.warn("click", e.target.matches(`a.delete-btn`));
  if (e.target.matches(`button.delete-btn`)) {
    const id = e.target.dataset.id;
    // console.warn("delete...%", id);
    deleteTeamRequest(id, status => {
      console.warn("delete callback %o", status);
      if (status.success) {
        // window.location.reload();
        loadTeams();
      }
    });
  } else if (e.target.matches("button.edit-btn")) {
    const id = e.target.dataset.id;
    startEdit(id);
  }
  // console.info("delete status %o", status);
  // window.location.reload();
});

initEvents();
loadTeams();

// var p = sleep(5000);
// p.then(() => {
//   console.warn("ready");
// });
// console.info("after sleep", p);

// const p2 = await sleep(3000);
// console.info("after sleep 2", p2);
