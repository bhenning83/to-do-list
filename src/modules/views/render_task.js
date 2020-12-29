import TaskController from "../controllers/task_controller";
import Task from "../task";

const RenderTask = (() => {

  function render(obj) {
    const row =              document.createElement("div");
    const taskName =         document.createElement("div");
    const dueDate =          document.createElement("div");
    const note =             document.createElement("div");
    const checkBox =         createCheckBox(obj);
    const noteBtn =          createNoteBtn(note);
    const checkNameNote =    document.createElement("div");

    row.classList.add("row");
    taskName.classList.add("task-name-rendered");
    taskName.classList.add("mx-2");
    dueDate.classList.add("col-4");
    dueDate.classList.add("text-right")
    checkNameNote.classList.add("col-8");
    checkNameNote.classList.add("d-flex");
    checkNameNote.classList.add("align-items-center");
    note.classList.add("col-8")
    
    taskName.textContent = obj["name"];
    dueDate.textContent = obj["dueDate"];
    note.textContent = obj["note"];

    note.classList.add("render-task-note");
    note.classList.add("show-task-note");
 
    taskName.addEventListener("click", (e) => {
      e.preventDefault();
      TaskController.editTask(obj, row)
    });
    dueDate.addEventListener("click", (e) => {
      e.preventDefault();
      TaskController.editTask(obj, row)
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

    checkNameNote.appendChild(checkBox);
    checkNameNote.appendChild(taskName);
    if (obj["note"]) checkNameNote.appendChild(noteBtn);
    row.appendChild(checkNameNote);
    row.appendChild(dueDate);
    row.appendChild(note);

    return row;
  }

  function createCheckBox(obj) {
    const checkBox =  document.createElement("div");
    const checkMark = document.createElement("div");

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