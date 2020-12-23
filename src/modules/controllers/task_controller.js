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
 
  function editTask(obj, dom) {
    const nodes = dom.children;
    Clear.clearTask(nodes);
    console.log(dom)
    EditTask.render(obj, dom);
  }

  function editFormSubmit(form, obj) {
    obj.name = form.newName.value;
    obj.dueDate = form.newDueDate.value;
    obj.note = form.newNote.value;
    obj.priority = form.newNote.value;
    let priority = "";
    
    const priorityRadios = document.getElementsByName("newPriority");
    
    for (let i = 0; i < priorityRadios.length; i++) {
      if (priorityRadios[i].checked) {
        priority = priorityRadios[i].value;
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