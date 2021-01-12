import ProjectController from "../controllers/project_controller";
import AltView from "./alt_view";
import TaskController from "../controllers/task_controller"
import TaskForm from "./task_form";
import RenderTask from "./render_task";
import { loadTasks } from "../local_storage"

const Home = (() => {
  let mode = "project";
  const content = document.getElementById("content");
  
  function renderProjectMode() {
    const row = document.createElement("div");
    const form = ProjectController.createNewProjectForm();
    const btn = AltView.button(mode);
    const projects = ProjectController.renderAllProjects();
    row.classList.add("row");
    row.classList.add("align-items-center");
    row.classList.add("leading-form");
    row.classList.add("mt-3");
    btn.classList.add("ml-auto");
    row.appendChild(form);
    row.appendChild(btn);
    // localStorage.clear();
    loadTasks();
    content.appendChild(row);
    content.appendChild(projects);
  }

  function renderTaskMode() {
    const row = document.createElement("div");
    const form = TaskController.makeTaskForm(0);
    const newTaskBtn = TaskForm.newTaskButton(form);
    const btn = AltView.button(mode);
    const tasks = RenderTask.allTasks();
    const taskBtnBox = document.createElement("div");
    row.classList.add("row");
    row.classList.add("align-items-center")
    row.classList.add("leading-form");
    row.classList.add("mt-3");
    btn.classList.add("ml-auto")
    taskBtnBox.classList.add("col-auto");
    newTaskBtn.classList.remove("my-2");
    taskBtnBox.appendChild(newTaskBtn);
    row.appendChild(taskBtnBox);
    tasks.prepend(form);
    row.appendChild(btn);
    content.appendChild(row);
    content.appendChild(tasks);
  }

  function render() {
    if (mode === "project") {
      renderProjectMode();
    } else {
      renderTaskMode();
    }
  }

  function setMode(str) {
    mode = str
  }

  return { render, setMode };
})();

export default Home;