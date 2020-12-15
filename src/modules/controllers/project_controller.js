const ProjectController = (() => {
  const allProjects = [];

  function createProject(name) {
    const proj = Project(name);
    allProjects.push(proj);
  }
  
  function getAllProjects() {
    return allProjects;
  }

  return { createProject, getAllProjects }
})();

export default ProjectController;