import ProjectController from "../controllers/project_controller";
import TaskForm from "./task_form";

const Home = (() => {
  const content = document.getElementById("content");
  
  function render() {
    ProjectController.renderAllProjects();
  }

  return { render };
})();

export default Home;