import Task from "../task";
import renderTask from "../views/render_task";
import ProjectController from "./project_controller"
import TaskForm from "../views/task_form"
import Clear from "../views/clear";
import EditTask from "../views/edit_task"
import ProjectForm from "../views/project_form";

const TaskController = (() => {
  //create test tasks
  const task1 = Task("Task Name", "2020-12-20", "A note about the task", "low", "Project 1");
  const task2 = Task("Task Name 2", "2020-12-20", "Another note about the task", "high", "Project 1");

  const allTasks = [task1, task2];

  function createTask(form) {
    let name =    form.querySelector(".task-name input").value;
    let dueDate = form.querySelector(".task-date input").value;
    let note =    form.querySelector(".task-note textarea").value;
    let project = form.querySelector(".task-project input").value;
    let low =     form.querySelector(".pri-boxes .pri-box:nth-of-type(1) input");
    let med =     form.querySelector(".pri-boxes .pri-box:nth-of-type(2) input");
    let high =    form.querySelector(".pri-boxes .pri-box:nth-of-type(3) input");
    let radios = [];
    let priority = "";
    
    radios.push(low, med, high)
    
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        priority = radios[i].value;
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
 
  function editTask(obj, dom) {
    const nodes = dom.children;
    Clear.clearTask(nodes);
    EditTask.render(obj, dom);
  }

  function editFormSubmit(form, obj) {
    obj.name =     form.querySelector(".task-name input").value;
    obj.dueDate =  form.querySelector(".task-date input").value;
    obj.note =     form.querySelector(".task-note textarea").value;
    let low =      form.querySelector(".pri-boxes .pri-box:nth-of-type(1) input");
    let med =      form.querySelector(".pri-boxes .pri-box:nth-of-type(2) input");
    let high =     form.querySelector(".pri-boxes .pri-box:nth-of-type(3) input");
    let radios = [];
    let priority = "";
    
    radios.push(low, med, high)
    
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        priority = radios[i].value;
      }
    }
    obj.priority = priority;
    ProjectController.renderAllProjects();
  }

  return { 
    getAllTasks, 
    createTask, 
    getProjectTasks, 
    makeTaskForm, 
    formSubmit,
    taskCheckedOff,
    editTask,
    editFormSubmit
  }
})();

export default TaskController;