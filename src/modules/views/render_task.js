import TaskController from "../controllers/task_controller";
import { formatRelative } from "date-fns";
import { isPast } from "date-fns";

const RenderTask = (() => {

  function render(obj) {
    const row =           document.createElement("div");
    const taskName =      document.createElement("div");
    const dueDate =       document.createElement("div");
    const note =          document.createElement("div");
    const checkBox =      createCheckBox(obj);
    const noteBtn =       createNoteBtn(note);
    const checkNameNote = document.createElement("div");

    row.classList.add("row");
    row.classList.add("task")

    taskName.classList.add("task-name-rendered");
    taskName.classList.add("mx-2");
    taskName.textContent = obj["name"];

    dueDate.classList.add("col-6");
    dueDate.classList.add("text-right");
    dueDate.textContent = formatDate(obj["dueDate"], dueDate);

    checkNameNote.classList.add("col-6");
    checkNameNote.classList.add("d-flex");
    checkNameNote.classList.add("align-items-center");

    note.classList.add("col-8")
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

  function formatDate(date, dueDate) {
    const year = date.slice(0, 4);
    const month = date.slice(5,7) - 1;
    const day = date.slice(8, 10);
    const hour = date.slice(11, 13);
    const min = date.slice(14, 16);
    let result = ""
    if (date) {
        result = formatRelative(
        new Date(year, month, day, hour, min),
        new Date()
      )
    }
   
    if (isPast(new Date(year, month, day, hour, min))) {
      dueDate.classList.add("past-due")
    }
    return result;
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

  function allTasks() {
    let allTasks = TaskController.getAllTasks();
    allTasks.sort(function(a, b) {
      return new Date(a.dueDate) - new Date(b.dueDate);
    })
    const wrap = document.createElement("div");
    wrap.setAttribute("id", "main-content-wrap");
    const h4 = document.createElement("h4");
    h4.textContent = "All Tasks"
    wrap.appendChild(h4);
    allTasks.forEach(task => {
      let box = RenderTask.render(task);
      wrap.appendChild(box);
    })
    return wrap;
  }

  return { render, allTasks }
})();

export default RenderTask