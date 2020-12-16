import Task from "../task";
import renderTask from "../views/renderTask";
import ProjectController from "./project_controller"

const TaskController = (() => {
  const allTasks = [];

  function createTask(form, counter) {
    let project = _getSelectedProject(form);

    //iterate through each task made for given project
    for (let i = 0; i < counter; i++) {
      let name =    form["name" + i].value;
      let dueDate = form["duedate" + i].value;
      let note =    form["note" + i].value;
      let priority = "";
      let priorityRadios = document.getElementsByName("priority" + i);
      
      for (let i = 0; i < priorityRadios.length; i++) {
        if (priorityRadios[i].checked) {
          priority = priorityRadios[i].value;
        }
      }
      let task = Task(name, dueDate, note, priority, project);
      allTasks.push(task);
    }
  }

  function _getSelectedProject(form) {
    const projectRadios = document.getElementsByName("project-select");
    let project = "";

    //project name is set as selected project, or name entered in new project text field
    for (let i = 0; i < projectRadios.length; i++) {
      if (form.newProject.checked) {
        project = form.newProjectName.value;
        ProjectController.createNewProject(project);
      } else if (projectRadios[i].checked) {
        project = projectRadios[i].value;
      }
    }
    return project;
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

  function getAllTasks() {
    return allTasks;
  }

  function test() {
    for (let i = 0; i < allTasks.length; i++) {
      renderTask.render(allTasks[i]);
    }
  }

  return { getAllTasks, createTask, getProjectTasks, test }
})();

export default TaskController;