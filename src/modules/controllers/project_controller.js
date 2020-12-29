import Project from "../project";
import TaskController from "./task_controller";
import RenderProject from "../views/render_project";
import Clear from "../views/clear"
import ProjectForm from "../views/project_form"

const ProjectController = (() => {
  //testing projects
  const project1 = Project("Free Spirited Tasks", 0);
  const allProjects = [project1];
  let idx = 1;

  function createNewProject(form) {
    //prevents empty or leading white space submissions
    const name = form["new-project"].value.trim();
    if (name) {
      const proj = Project(name, idx);
      idx++;
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
      const allTasks = TaskController.getProjectTasks(proj.idx);
      const taskForm = TaskController.makeTaskForm(proj);
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