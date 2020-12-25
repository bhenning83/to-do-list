import Project from "../project";
import TaskController from "./task_controller";
import RenderProject from "../views/render_project";
import Clear from "../views/clear"
import ProjectForm from "../views/project_form"

const ProjectController = (() => {
  //testing projects
  const project1 = Project("Free Spirited Tasks");
  const allProjects = [project1];

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

  function editProject(proj, dom) {
    let projBox = dom.parentNode;
    Clear.clearProject(dom);
    ProjectForm.edit(proj, projBox);
  }

  function editSubmit(form, proj) {
    let newName = form.newName.value;
    proj.name = newName;
    renderAllProjects();
  }

  return { 
    createNewProject, 
    getAllProjects, 
    renderAllProjects,
    createNewProjectForm, 
    formSubmit,
    editProject,
    editSubmit
   }
})();

export default ProjectController;