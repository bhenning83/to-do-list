import Task from "../task";
import renderTask from "../views/renderTask";
import ProjectController from "./project_controller"
import TaskForm from "../views/task_form"

const TaskController = (() => {
  const allTasks = [];

  function createTask(form) {
    let name =    form["name"].value;
    let dueDate = form["duedate"].value;
    let note =    form["note"].value;
    let project = form["project"].value;
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

  function openTaskForm(proj, idx) {
    TaskForm.render(proj, idx);
  }

  function formSubmit(form) {
    createTask(form)
    form.remove();
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

  function test() {
    for (let i = 0; i < allTasks.length; i++) {
      RenderTask.complete(allTasks[i]);
    }
  }

  return { 
    getAllTasks, 
    createTask, 
    getProjectTasks, 
    test, 
    openTaskForm, 
    formSubmit
  }
})();

export default TaskController;