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
    <td>
      <input type="checkbox" name="selected" value="${id}" />
    </td>
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

function getTeamAsHTMLInputs({ id, promotion, members, name, url }) {
  console.info("inputs", arguments);
  return `<tr>
    <td>
      <input type="checkbox" name="selected" value="${id}" />
    </td>
    <td>
      <input value="${promotion}" type="text" required name="promotion" placeholder="Enter promotion" />
    </td>
    <td>
      <input value="${members}" type="text" required name="members" placeholder="Enter members" />
    </td>
    <td>
      <input value="${name}" type="text" required name="name" placeholder="Enter project name" />
    </td>
    <td>
      <input value="${url}" type="text" required name="url" placeholder="Project URL" />
    </td>
    <td>
      <button type="submit" class="action-btn" title="Save">💾</button>
      <button type="reset"  class="action-btn" title="Cancel">✖</button>
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
  e.preventDefault();

  const team = getTeamValues(editId ? "tbody" : "tfoot");

  mask(form);

  if (editId) {
    team.id = editId;

    const { success } = await updateTeamRequest(team);
    if (success) {
      allTeams = allTeams.map(t => {
        if (t.id === team.id) {
          return {
            ...t,
            ...team
          };
        }
        return t;
      });

      setInputsDisable(false);
      editId = "";
    }
  } else {
    const { success, id } = await createTeamRequest(team);
    if (success) {
      team.id = id;
      allTeams = [...allTeams, team];
      $(form).reset();
    }
  }
  renderTeams(allTeams);
  unmask(form);
}
function startEdit(id) {
  editId = id;
  renderTeams(allTeams, id);
  setInputsDisable(true);
}

function setInputsDisable(disable) {
  document.querySelectorAll("tfoot input, tfoot button").forEach(input => {
    input.disabled = disable;
  });
}

function filterElements(teams, search) {
  search = search.toLowerCase();
  return teams.filter(({ promotion, members, name, url }) => {
    return (
      promotion.toLowerCase().includes(search) ||
      members.toLowerCase().includes(search) ||
      name.toLowerCase().includes(search) ||
      url.toLowerCase().includes(search)
    );
  });
}

function removeSelected() {
  console.info("removeSelected");
}

function initEvents() {
  $("#removeSelected").addEventListener("click", removeSelected);

  $("#search").addEventListener("input", e => {
    const search = e.target.value;
    const teams = filterElements(allTeams, search);
    renderTeams(teams);
  });

  $("#selectAll").addEventListener("input", e => {
    console.info("check all boxes");
    document.querySelectorAll("input[name=selected]").forEach(input => {
      input.checked = e.target.checked;
    });
  });

  $(form).addEventListener("submit", onSubmit);
  $(form).addEventListener("reset", e => {
    if (editId) {
      allTeams = [...allTeams];
      renderTeams(allTeams, -1); // use -1 to force render
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
