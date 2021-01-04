import ProjectController from "../controllers/project_controller";
import RenderTask from "./render_task";


const RenderProject = (() => {
  const content = document.getElementById("content");
  const row = document.createElement("div");
  row.setAttribute("id", "all-proj-box")
  
  function render(proj, allTasks, taskForm, idx) {
    const projBox = document.createElement("div");
    const projName = document.createElement("h4");
    const newTask = document.createElement("div");
    
    row.classList.add("row");

    projName.textContent = proj.name;
    
    projBox.classList.add("project-box");
    projBox.classList.add("col-12");
    projBox.classList.add("my-2");
    projBox.classList.add("order-" + idx);
    projBox.classList.add("projBox-" + idx);
    projBox.appendChild(projName);
    
    newTask.textContent = "+";
    newTask.classList.add("add-task");
    newTask.addEventListener("click", (e) => {
      taskForm.classList.toggle("new-task-form");
    })

    for (let i = 0; i < allTasks.length; i++) {
      const taskBox = RenderTask.render(allTasks[i]);
      projBox.appendChild(taskBox);
    }

    projName.addEventListener("click", (e) => {
      e.preventDefault();
      ProjectController.editProject(proj, projName);
    });

    projBox.appendChild(newTask);

    projBox.appendChild(taskForm);

    row.appendChild(projBox);

    content.appendChild(row);
  }

  return { render }
})();

export default RenderProject;
