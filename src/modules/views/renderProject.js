import ProjectController from "../controllers/project_controller";
import TaskController from "../controllers/task_controller"
import RenderTask from "./renderTask";


const RenderProject = (() => {
  const content = document.getElementById("content");

  function render(proj, allTasks) {
    const projBox = document.createElement("div");
    const projName = document.createElement("div");

    projName.textContent = proj.name;
    projBox.appendChild(projName);
    projBox.setAttribute("class", "project-box");

    for (let i = 0; i < allTasks.length; i++) {
      const taskBox = RenderTask.abv(allTasks[i]);
      projBox.appendChild(taskBox);
      
    }
    content.appendChild(projBox);
  }

  return { render }
})();

export default RenderProject;
