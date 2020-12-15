import Task from './task';
import {renderTask} from './views/renderTask'

const controller = (() => {
  const allTasks = [];
  const allProjects = [];

  function createTask(form) {
    let name =    form.name.value;
    let dueDate = form.duedate.value;
    let note =    form.note.value;
    let priority = "";
    let radios = document.getElementsByName("priority");

    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        priority = radios[i].value;
      }
    }

    let task = Task(name, dueDate, note, priority);
    allTasks.push(task);
    console.log(task)
  }

  function renderAllTasks() {
    for (let i = 0; i < allTasks.length; i++) {
      let obj = allTasks[i];
      renderTask(obj);
    }
  }

  return { allTasks, allProjects, createTask, renderAllTasks }
})();

export default controller;