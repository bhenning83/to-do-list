import ProjectController from "../controllers/project_controller";
import RenderTask from "./render_task";
import TaskForm from "./task_form"


const RenderProject = (() => {
  function render(proj, allTasks, taskForm, idx) {
    const projBox = document.createElement("div");
    const projName = document.createElement("h4");
    const newTask = TaskForm.newTaskButton(taskForm);

    allTasks.sort(function(a, b) {
      //pushes tasks without dueDates to bottom
      if (b.dueDate == "") return -1;

      //sorts tasks with dueDates
      return new Date(a.dueDate) - new Date(b.dueDate);
    })

    projName.textContent = proj.name;
    
    projBox.classList.add("project-box");
    projBox.classList.add("col-12");
    projBox.classList.add("my-2");
    projBox.classList.add("order-" + idx);
    projBox.classList.add("projBox-" + idx);
    projBox.appendChild(projName);
    
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

    return projBox;
  }

  return { render }
})();

export default RenderProject;
