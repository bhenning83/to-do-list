import Project from "../project";
import TaskController from "./task_controller";
import RenderProject from "../views/renderProject";
import Clear from "../views/clear"

const ProjectController = (() => {
  const allProjects = [];

  function createNewProject(name) {
    const proj = Project(name);
    allProjects.push(proj);
  }
  
  function getAllProjects() {
    return allProjects;
  }

  function renderAllProjects() {
    Clear.clearProjects();
    for (let i = 0; i < allProjects.length; i++) {
      const proj = allProjects[i];
      const allTasks = TaskController.getProjectTasks(proj.name);
      RenderProject.render(proj, allTasks);
    }
  }

  return { createNewProject, getAllProjects, renderAllProjects }
})();

export default ProjectController;