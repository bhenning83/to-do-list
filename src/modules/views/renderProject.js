import ProjectController from "../controllers/project_controller";
import TaskController from "../controllers/task_controller"

const RenderProject = (() => {
  const content = document.getElementById("content");

  function render(proj, allTasks) {
    const projBox = document.createElement("div");
    const projName = document.createElement("div");

    projName.textContent = proj.name;
    projBox.appendChild(projName);

    for (let i = 0; i < allTasks.length; i++) {
      const taskName = document.createElement("div");
      const dueDate = document.createElement("div");
      const checkBox = document.createElement("div");

      checkBox.classList.add("check-box");

      taskName.textContent = allTasks[i].name;
      console.log(allTasks[i].name);
      dueDate.textContent = allTasks[i].dueDate;
      
      projBox.appendChild(checkBox);
      projBox.appendChild(taskName);
      projBox.appendChild(dueDate);
    }
    content.appendChild(projBox);
  }

  return { render }
})();

export default RenderProject;
