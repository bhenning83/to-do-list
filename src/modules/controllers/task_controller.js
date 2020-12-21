import Task from "../task";
import renderTask from "../views/renderTask";
import ProjectController from "./project_controller"
import TaskForm from "../views/task_form"

const TaskController = (() => {
  const allTasks = [];

  function createTask(form) {
    let name =    form.getElementsByTagName("input")[0].value;
    let dueDate = form.getElementsByTagName("input")[1].value;
    let note =    form.getElementsByTagName("input")[2].value;
    let project = form.getElementsByTagName("input")[3].value;
    let priority = "";

    const priorityRadios = document.getElementsByName("priority");
    
    for (let i = 0; i < priorityRadios.length; i++) {
      if (priorityRadios[i].checked) {
        priority = priorityRadios[i].value;
      }
    }
    let task = Task(name, dueDate, note, priority, project);
    allTasks.push(task);
  }

  function makeTaskForm(proj, idx) {
    const form = TaskForm.create(proj, idx);
    return form;
  }

  function formSubmit(form) {
    createTask(form);
    ProjectController.renderAllProjects();
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

  function taskCheckedOff(task) {
    const idx = allTasks.indexOf(task);
    allTasks.splice(idx, 1); //removes task from task list
    ProjectController.renderAllProjects();
  }
 

  return { 
    getAllTasks, 
    createTask, 
    getProjectTasks, 
    makeTaskForm, 
    formSubmit,
    taskCheckedOff
  }
})();

export default TaskController;