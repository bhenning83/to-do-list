import TaskController from "../controllers/task_controller";

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
    const taskName =     document.createElement("div");
    const dueDate =      document.createElement("div");
    const checkBox =     document.createElement("div");
    const taskBox =      document.createElement("div");
    const taskContents = document.createElement("div");
    const checkMark =    document.createElement("div");

    checkBox.classList.add("check-box");
    taskBox.classList.add("task-box");
    taskContents.classList.add("task-contents");
    checkMark.classList.add("checkmark");

    taskName.textContent = obj["name"];

    dueDate.textContent = obj["dueDate"];

    checkBox.addEventListener("click", (e) => {
      e.preventDefault();
      checkMark.style.display = "block";
      setTimeout(function() {
        TaskController.taskCheckedOff(obj);
      }, 700);
    });

    taskContents.appendChild(taskName);
    taskContents.appendChild(dueDate);
    checkBox.appendChild(checkMark);
    taskBox.appendChild(checkBox);
    taskBox.appendChild(taskContents);
    return taskBox;
  }

  return { complete, abv }
})();

export default RenderTask