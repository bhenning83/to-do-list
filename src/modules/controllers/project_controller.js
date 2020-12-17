import Project from "../project";
import TaskController from "./task_controller";
import RenderProject from "../views/renderProject";
import Clear from "../views/clear"
import ProjectForm from "../views/project_form"

const ProjectController = (() => {
  const allProjects = [];

  function createNewProject(form) {
    const name = form["new-project"].value;
    const proj = Project(name);
    allProjects.push(proj);
  }

  function createNewProjectForm() {
    ProjectForm.render();
  }

  function formSubmit(form) {
    createNewProject(form);
    console.log(allProjects)
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

  return { 
    createNewProject, 
    getAllProjects, 
    renderAllProjects, 
    createNewProjectForm, 
    formSubmit }
})();

export default ProjectController;