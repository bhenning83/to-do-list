const Clear = (() => {
  function clearAllProjects() {
    const projects = document.querySelectorAll(".project-box");
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

  function clearAll() {
    const leadForm = document.querySelector(".leading-form");
    const mainWrap =  document.querySelector("#main-content-wrap");
    leadForm.remove();
    mainWrap.remove();
  }
  
  return { 
    clearAllProjects, 
    clearProject, 
    clearTask,
    clearAll
  }
})();

export default Clear