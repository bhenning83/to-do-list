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
    const name = form["new-project"].value.trim();
    //prevents empty or leading white space submissions
    if (name) {
      const proj = Project(name);
      allProjects.push(proj);
    }
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
      const taskForm = TaskController.makeTaskForm(proj, i);
      RenderProject.render(proj, allTasks, taskForm, i);
    }
  }

  function editProject(proj, dom, idx) {
    let projBox = dom.parentNode;
    Clear.clearProject(dom);
    allProjects.slice(idx, 1);
    ProjectForm.edit(proj, idx, projBox);
  }

  return { 
    createNewProject, 
    getAllProjects, 
    renderAllProjects,
    createNewProjectForm, 
    formSubmit,
    editProject
   }
})();

export default ProjectController;