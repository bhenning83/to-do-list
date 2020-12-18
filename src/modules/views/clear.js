const Clear = (() => {
  function clearProjects() {
    let projects = document.querySelectorAll(".project-box");
    console.log(projects.length)
    for (let i = 0; i < projects.length; i++) {
      projects[i].remove();
    }
  }
  
  return { clearProjects }
})();

export default Clear