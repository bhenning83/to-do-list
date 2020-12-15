import Task from './task';

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
  }

  return { allTasks, allProjects, createTask }
})();

export default controller;