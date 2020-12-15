import Task from "../task";

const TaskController = (() => {
  const allTasks = [];

  function createTask(form) {
    let name =    form.name.value;
    let dueDate = form.duedate.value;
    let note =    form.note.value;
    let priority = "";
    let project = "";
    let priorityRadios = document.getElementsByName("priority");
    let projectRadios = document.getElementsByName("project-select");
    
    for (let i = 0; i < priorityRadios.length; i++) {
      if (priorityRadios[i].checked) {
        priority = priorityRadios[i].value;
      }
    }

    //project name is equal to selected project, or name entered in new project text field
    for (let i = 0; i < projectRadios; i++) {
      if (projectRadios[i].checked) {
        project = projectRadios[i].value;
      } else if (form.newProject.check) {
        project = form.newProjectName.value;
      }
    }

    let task = Task(name, dueDate, note, priority, project);
    allTasks.push(task);
    console.log(task)
  }

  function getProjectTasks(project) {
    const projTasks = [];
    for (let i = 0; i < allTasks.length; i++) {
      let obj = allTasks[i];
      if (obj["project"] == project) {
        projTasks.push(obj);
      }
    }
    return projTasks;
  }

  return { allTasks, createTask, getProjectTasks }
})();

export default TaskController;