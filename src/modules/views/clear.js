const Clear = (() => {
  function clearAllProjects() {
    let projects = document.querySelectorAll(".project-box");
    for (let i = 0; i < projects.length; i++) {
      projects[i].remove();
    }
  }

  function clearProject(proj) {
    proj.remove();
  }

  function clearTask(nodes) {
   for (let i = nodes.length - 1; i >= 0; i--) {
     nodes[i].remove();
   }
  }
  
  return { 
    clearAllProjects, 
    clearProject, 
    clearTask 
  }
})();

export default Clear