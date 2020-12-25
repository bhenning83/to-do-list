import ProjectController from "../controllers/project_controller";
import TaskController from "../controllers/task_controller";

const TaskForm = (() => {
  function create(proj, idx) {
    const form = document.createElement("form");

    const noteBox = document.createElement("div");
    noteBox.classList.add("col-12");

    form.setAttribute("id", "task-form" + idx);
    form.classList.add("order-" + idx);
    form.classList.add("new-task-form");
    form.classList.add("task-form");
    form.classList.add("row");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      TaskController.formSubmit(form, idx);
    })

    function _createNameField() {
      const formGroup = document.createElement("div");
      const input = document.createElement("input");
      
      input.setAttribute("type", "text");
      input.setAttribute("placeholder", "Task Name");
      
      formGroup.classList.add("task-name");
      formGroup.appendChild(input);
      return formGroup;
    }

    function _createDueDate() {
      const formGroup = document.createElement("div");
      const input = document.createElement("input");

      input.setAttribute("type", "date");

      formGroup.classList.add("task-date");
      formGroup.appendChild(input);
      return formGroup;
    }

    function _createNoteArea() {
      const formGroup = document.createElement("div");
      const tarea = document.createElement("textarea");

      tarea.setAttribute("placeholder", "Notes about task");
      tarea.setAttribute("form", "task-form" + idx);
      tarea.classList.add("w-100");

      formGroup.classList.add("task-note")
      formGroup.appendChild(tarea);
      return formGroup;
    }

    function _createProjectField() {
      const formGroup = document.createElement("div")
      const input = document.createElement("input");
      input.setAttribute("type", "hidden");
      input.setAttribute("id", "project" + idx);
      input.setAttribute("value", proj["name"]);

      formGroup.classList.add("task-project");
      formGroup.appendChild(input);
      
      return formGroup;
    }

    function _createPriority() {
      const formGroup = document.createElement("div");
      const low = document.createElement("input");
      const lowLabel = document.createElement("label");
      const lowBox = document.createElement("div");
      const med = document.createElement("input");
      const medLabel = document.createElement("label");
      const medBox = document.createElement("div");
      const high = document.createElement("input");
      const highLabel = document.createElement("label");
      const highBox = document.createElement("div");

      lowBox.classList.add("low-box");
      lowBox.classList.add("pri-box");
      medBox.classList.add("med-box");
      medBox.classList.add("pri-box");
      medBox.classList.add("mx-3");
      highBox.classList.add("high-box");
      highBox.classList.add("pri-box");
      formGroup.classList.add("d-flex")

      low.setAttribute("type", "radio");
      low.setAttribute("name", "priority");
      low.setAttribute("value", "low");
      low.classList.add("priority" + idx);
      lowLabel.setAttribute("for", "lowPriority");
      lowLabel.textContent = "Low";

      med.setAttribute("type", "radio");
      med.setAttribute("name", "priority");
      med.setAttribute("value", "med");
      med.classList.add("priority" + idx);
      medLabel.setAttribute("for", "medPriority");
      medLabel.textContent = "Medium";

      high.setAttribute("type", "radio");
      high.setAttribute("name", "priority");
      high.setAttribute("value", "high");
      high.classList.add("priority" + idx);
      highLabel.setAttribute("for", "highPriority");
      highLabel.textContent = "High";

      lowBox.appendChild(low);
      lowBox.appendChild(lowLabel);
      formGroup.appendChild(lowBox);
      medBox.appendChild(med);
      medBox.appendChild(medLabel);
      formGroup.appendChild(medBox);
      highBox.appendChild(high);
      highBox.appendChild(highLabel);
      formGroup.appendChild(highBox);

      formGroup.classList.add("pri-boxes")

      return formGroup;
    }

    function _createSubmitBtn() {
      const btn = document.createElement("button");
      
      btn.setAttribute("type", "submit");
      btn.textContent = "Add";

      return btn;
    }

    function _renderForm() {
      const dueDate = _createDueDate();
      const taskName = _createNameField();
      const taskNote = _createNoteArea();
      const project = _createProjectField();
      const priority = _createPriority();
      form.appendChild(taskName);
      form.appendChild(dueDate);
      noteBox.appendChild(taskNote);
      form.appendChild(noteBox);
      form.appendChild(project);
      form.appendChild(priority);
    }

    function _createSubmitBox() {
      const box = document.createElement("div");
      const submit = _createSubmitBtn();

      box.appendChild(submit);
      form.appendChild(box);
    }

    _renderForm();
    _createSubmitBox();

    return form;
  }
  
  return { create }
})();

export default TaskForm;