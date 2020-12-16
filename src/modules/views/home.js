import ProjectController from "../controllers/project_controller"

const Home = (() => {
  const content = document.getElementById("content");
  function renderHome() {
    const btn = document.createElement("button");
    btn.textContent = "render all projects";

    btn.addEventListener("click", (e) => {
      e.preventDefault();
      ProjectController.renderAllProjects();
    });
    
    content.appendChild(btn);
  }

  return { renderHome };
})();

export default Home;