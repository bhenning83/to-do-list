import Project from "./project"
function storageAvailable(type) {
  var storage;
  try {
      storage = window[type];
      var x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
  }
  catch(e) {
      return e instanceof DOMException && (
          // everything except Firefox
          e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === 'QuotaExceededError' ||
          // Firefox
          e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
          // acknowledge QuotaExceededError only if there's something already stored
          (storage && storage.length !== 0);
  }
}

function loadTasks() {
  let idx = getTaskIdx();
  let tasks = [];
  for (let i = 0; i <= idx; i++) {
    let task = JSON.parse(localStorage.getItem("task-" + i));
    if (task != null) {
      tasks.push(task);
    }
  }
  return tasks;
}
function loadProjects() {
  let idx = getProjectIdx();
  let projects = [];
  const proj1 = Project("Miscellaneous", 0);
  projects.push(proj1)
  for (let i = 0; i <= idx; i++) {
    let project = JSON.parse(localStorage.getItem("project-" + i));
    if (project != null) {
      projects.push(project);
    }
  }
  return projects;
}
function getTaskIdx() {
  let idx
  if (localStorage.getItem("taskidx") != null) {
    idx = JSON.parse(localStorage.getItem("taskidx"))
  } else {
    idx = 0;
  }
  return idx;
}
function getProjectIdx() {
  let idx
  if (localStorage.getItem("projectidx") != null) {
    idx = JSON.parse(localStorage.getItem("projectidx"))
  } else {
    idx = 1;
  }
  return idx;
}

export { storageAvailable, loadTasks, getTaskIdx, getProjectIdx, loadProjects }