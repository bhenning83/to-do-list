const renderTask = (() => {
  const content = document.getElementById("content");

  function render(obj) {
    const container = document.createElement("div");
    const name =      document.createElement("div");
    const date =      document.createElement("div");
    const note =      document.createElement("div");
    const project =   document.createElement("div");
  
    name.textContent = obj["name"];
    date.textContent = obj["dueDate"];
    note.textContent = obj["note"];
    project.textContent = obj["project"];
  
    container.appendChild(name);
    container.appendChild(date);
    container.appendChild(note);
    container.appendChild(project);
  
    content.appendChild(container);
  }

  return { render }
})();

export default renderTask