import ProjectController from "../controllers/project_controller";

const Home = (() => {
  const content = document.getElementById("content");
  
  function render() {
    ProjectController.renderAllProjects();
    ProjectController.createNewProjectForm();
  }

  return { render };
})();

export default Home;