import ProjectController from "../controllers/project_controller";
import TaskForm from "./task_form";

const Home = (() => {
  const content = document.getElementById("content");
  
  function render() {
    TaskForm.renderTaskForm();
    ProjectController.renderAllProjects();
  }

  return { render };
})();

export default Home;