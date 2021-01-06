import Project from "../project";
import TaskController from "./task_controller";
import RenderProject from "../views/render_project";
import Clear from "../views/clear"
import ProjectForm from "../views/project_form"

const ProjectController = (() => {
  //testing projects
  const project1 = Project("Free Spirited Tasks", 0);
  const allProjects = [project1];
  let idx = 1; //Project 0 is the default starter project

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
    const form = ProjectForm.render();
    return form
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
    const wrap = document.createElement("div");
    wrap.setAttribute("id", "main-content-wrap");
    wrap.classList.add("row");

    for (let i = 0; i < allProjects.length; i++) {
      const proj = allProjects[i];
      const allTasks = TaskController.getProjectTasks(proj.idx);
      const taskForm = TaskController.makeTaskForm(proj.idx);
      const projBox = RenderProject.render(proj, allTasks, taskForm, i);
      wrap.appendChild(projBox);
    }
    return wrap;
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

  function delProject(proj) {
    const idx = allProjects.indexOf(proj);
    allProjects.splice(idx, 1);

    //deletes associated tasks
    TaskController.delProjectTasks(proj);

    renderAllProjects();
  }

  return { 
    createNewProject, 
    getAllProjects, 
    renderAllProjects,
    createNewProjectForm, 
    formSubmit,
    editProject,
    editSubmit,
    delProject
   }
})();

export default ProjectController;