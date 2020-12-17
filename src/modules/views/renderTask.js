const RenderTask = (() => {
  const content = document.getElementById("content");

  function complete(obj) {
    const container = document.createElement("div");
    const name =      document.createElement("div");
    const date =      document.createElement("div");
    const note =      document.createElement("div");
    const project =   document.createElement("div");
  
    name.textContent =    obj["name"];
    date.textContent =    obj["dueDate"];
    note.textContent =    obj["note"];
    project.textContent = obj["project"];
  
    container.appendChild(name);
    container.appendChild(date);
    container.appendChild(note);
    container.appendChild(project);
  
    content.appendChild(container);
  }

  function abv(obj) {
    const taskName = document.createElement("div");
    const dueDate =  document.createElement("div");
    const checkBox = document.createElement("div");
    const taskBox =  document.createElement("div");

    checkBox.classList.add("check-box");

    taskName.textContent = obj["name"];
    dueDate.textContent = obj["dueDate"];

    taskBox.appendChild(checkBox);
    taskBox.appendChild(taskName);
    taskBox.appendChild(dueDate);

    return taskBox;
  }

  return { complete, abv }
})();

export default RenderTask