import Project from "../project";
import TaskController from "./task_controller";
import RenderProject from "../views/renderProject";
import Clear from "../views/clear"
import ProjectForm from "../views/project_form"

const ProjectController = (() => {
  //testing projects
  const project1 = Project("Project 1");
  const project2 = Project("Project 2");
  const allProjects = [project1, project2];

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
    renderAllProjects();
    form.reset();
  }
  
  function getAllProjects() {
    return allProjects;
  }

  function renderAllProjects() {
    Clear.clearAllProjects();
    for (let i = 0; i < allProjects.length; i++) {
      const proj = allProjects[i];
      const allTasks = TaskController.getProjectTasks(proj.name);
      RenderProject.render(proj, allTasks, i);
    }
  }

  function renderProjectWithTaskForm(form, idx) {
    const projBox = document.querySelector(".order-" + idx);
    const proj = allProjects[idx];
    const allTasks = TaskController.getProjectTasks(proj.name);
    Clear.clearProject(projBox);
    RenderProject.render(proj, allTasks, idx, form);
  }

  return { 
    createNewProject, 
    getAllProjects, 
    renderAllProjects,
    createNewProjectForm, 
    formSubmit,
    renderProjectWithTaskForm
   }
})();

export default ProjectController;