import Project from "../project";
import TaskController from "./task_controller";
import renderProject from "../views/renderProject";
import RenderProject from "../views/renderProject";

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
    console.log(allProjects)
    for (let i = 0; i < allProjects.length; i++) {
      const proj = allProjects[i];
      const allTasks = TaskController.getProjectTasks(proj);
      RenderProject.render(proj, allTasks)
    }
  }

  return { createNewProject, getAllProjects, renderAllProjects }
})();

export default ProjectController;