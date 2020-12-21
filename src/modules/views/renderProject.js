import ProjectController from "../controllers/project_controller";
import TaskController from "../controllers/task_controller"
import RenderTask from "./renderTask";


const RenderProject = (() => {
  const content = document.getElementById("content");
  const row = document.createElement("div");

  function render(proj, allTasks, idx, form = undefined) {
    const projBox = document.createElement("div");
    const projName = document.createElement("h4");
    const newTask = document.createElement("div");
    
    row.setAttribute("class", "row");

    projName.textContent = proj.name;
    
    projBox.classList.add("project-box");
    projBox.classList.add("col-12");
    projBox.classList.add("order-" + idx);
    projBox.appendChild(projName);
    
    newTask.textContent = "+";
    newTask.setAttribute("class", "p-2");
    newTask.setAttribute("class", "add-task");
    newTask.addEventListener("click", (e) => {
      e.preventDefault();
      TaskController.openTaskForm(proj, idx);
    })

    for (let i = 0; i < allTasks.length; i++) {
      const taskBox = RenderTask.abv(allTasks[i]);
      projBox.appendChild(taskBox);
    }

    if (form == undefined) {
      projBox.appendChild(newTask);
    } else {
      projBox.appendChild(form);
    }

    row.appendChild(projBox);

    content.appendChild(row);
  }

  return { render }
})();

export default RenderProject;
