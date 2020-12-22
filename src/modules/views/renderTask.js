import TaskController from "../controllers/task_controller";
import Task from "../task";

const RenderTask = (() => {

  function render(obj) {
    const taskName =         document.createElement("div");
    const dueDate =          document.createElement("div");
    const taskBox =          document.createElement("div");
    const taskContents =     document.createElement("div");
    const nameDateBox =      document.createElement("div");
    const nameDateCheckBox = document.createElement("div");
    const note =             document.createElement("div");
    const checkBox =         createCheckBox(obj);
    
    taskBox.classList.add("task-box");
    nameDateBox.classList.add("name-date-box");
    taskContents.classList.add("task-contents");
    nameDateCheckBox.classList.add("d-flex");
    nameDateCheckBox.classList.add("align-items-center");
    
    taskName.textContent = obj["name"];
    dueDate.textContent = obj["dueDate"];
    note.textContent = obj["note"];

    note.classList.add("task-note");
    note.classList.add("show-task-note");
    
    nameDateBox.addEventListener("click", (e) => {
      e.preventDefault();
      note.classList.toggle("show-task-note");
    })

    nameDateBox.appendChild(taskName);
    nameDateBox.appendChild(dueDate);
    nameDateCheckBox.appendChild(checkBox);
    nameDateCheckBox.appendChild(nameDateBox);
    taskContents.appendChild(nameDateBox);
    taskContents.appendChild(note);
    taskBox.appendChild(nameDateCheckBox);
    taskBox.appendChild(taskContents);

    return taskBox;
  }

  function createCheckBox(obj) {
    const checkBox = document.createElement("div");
    const checkMark =    document.createElement("div");

    checkBox.classList.add("check-box");
    checkMark.classList.add("checkmark");

    checkBox.addEventListener("click", (e) => {
      e.preventDefault();
      checkMark.style.display = "block";
      setTimeout(function() {
        TaskController.taskCheckedOff(obj);
      }, 700);
    });

    checkBox.appendChild(checkMark);

    return checkBox;
  }

  return { render }
})();

export default RenderTask