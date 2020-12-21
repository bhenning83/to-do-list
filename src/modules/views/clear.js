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
  
  return { clearAllProjects, clearProject }
})();

export default Clear