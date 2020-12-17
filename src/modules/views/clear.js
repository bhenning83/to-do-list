const Clear = (() => {
  function clearProjects() {
    const projects = document.getElementsByClassName("project-box");
    for (let i = 0; i < projects.length; i++) {
      projects[i].remove();
    }
  }
  
  return { clearProjects }
})();

export default Clear