import Task from "../task";
import {renderTask} from "../views/renderTask"

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
    for (let i = 0; i < projectRadios.length; i++) {
      if (form.newProject.checked) {
        console.log(form.newProjectName)
        project = form.newProjectName.value;
      } else if (projectRadios[i].checked) {
        project = projectRadios[i].value;
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

  function test() {
    for (let i = 0; i < allTasks.length; i++) {
      renderTask(allTasks[i]);
    }
  }

  return { allTasks, createTask, getProjectTasks, test }
})();

export default TaskController;