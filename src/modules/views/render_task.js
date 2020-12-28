import TaskController from "../controllers/task_controller";
import Task from "../task";

const RenderTask = (() => {

  function render(obj) {
    const row =              document.createElement("div");
    const taskBox =          document.createElement("div");
    const taskName =         document.createElement("div");
    const dueDate =          document.createElement("div");
    const nameDateBox =      document.createElement("div");
    const nameDateCheckBox = document.createElement("div");
    const note =             document.createElement("div");
    const checkBox =         createCheckBox(obj);
    const noteBtn =          createNoteBtn(note);

    row.classList.add("row")
    taskBox.classList.add("task-box");
    dueDate.classList.add("due-date-rendered");
    dueDate.classList.add("ml-2");
    nameDateBox.classList.add("name-date-box");
    nameDateCheckBox.classList.add("name-date-check-box");
    taskName.classList.add("mr-2");
    taskName.classList.add("task-name-rendered");
    
    taskName.textContent = obj["name"];
    dueDate.textContent = obj["dueDate"];
    note.textContent = obj["note"];

    note.classList.add("task-note");
    note.classList.add("show-task-note");
 
    taskName.addEventListener("click", (e) => {
      e.preventDefault();
      TaskController.editTask(obj, taskBox)
    });
    dueDate.addEventListener("click", (e) => {
      e.preventDefault();
      TaskController.editTask(obj, taskBox)
    });

    switch (obj["priority"]) {
      case "high":
        taskName.classList.add("high-pri");
        break;
      case "med":
        taskName.classList.add("med-pri");
        break;
      case "low":
        taskName.classList.add("low-pri");
        break;
    }

    nameDateBox.appendChild(taskName);
    if (obj["note"]) nameDateBox.appendChild(noteBtn);
    nameDateBox.appendChild(dueDate);
    nameDateCheckBox.appendChild(checkBox);
    nameDateCheckBox.appendChild(nameDateBox);
    taskBox.appendChild(nameDateCheckBox);
    taskBox.appendChild(note);

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

  function createNoteBtn(note) {
    const btn = document.createElement("i");
    btn.classList.add("fa");
    btn.classList.add("fa-sticky-note-o");
    btn.classList.add("mr-auto");

    btn.addEventListener("click", (e) => {
      e.preventDefault();
      note.classList.toggle("show-task-note");
    });
    return btn
  }

  return { render }
})();

export default RenderTask