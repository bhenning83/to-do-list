import TaskController from "../controllers/task_controller";

const TaskForm = (() => {
  function create(idx) {
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
      TaskController.formSubmit(form);
    })

    function _createNameField() {
      const formGroup = document.createElement("div");
      const input = document.createElement("input");
      
      input.setAttribute("type", "text");
      input.setAttribute("placeholder", "Task Name");
      input.classList.add("w-100");
      input.required = true;
      
      formGroup.classList.add("task-name");
      formGroup.classList.add("col-6");
      formGroup.classList.add("pr-0");
      formGroup.appendChild(input);
      return formGroup;
    }

    function _createDueDate() {
      const formGroup = document.createElement("div");
      const input = document.createElement("input");

      input.setAttribute("type", "datetime-local");
      input.setAttribute("placeholder", "mm/dd/yyyy")
      input.classList.add("w-100");

      formGroup.classList.add("task-date");
      formGroup.classList.add("col-6");
      formGroup.classList.add("pl-0");
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
      input.setAttribute("value", idx);

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
      formGroup.classList.add("d-flex");
      formGroup.classList.add("col-9");

      low.setAttribute("type", "radio");
      low.setAttribute("name", "priority");
      low.setAttribute("value", "low");
      low.classList.add("priority" + idx);
      lowLabel.setAttribute("for", "lowPriority");
      lowLabel.classList.add("ml-1");
      lowLabel.textContent = "Low";

      med.setAttribute("type", "radio");
      med.setAttribute("name", "priority");
      med.setAttribute("value", "med");
      med.classList.add("priority" + idx);
      medLabel.setAttribute("for", "medPriority");
      medLabel.classList.add("ml-1");
      medLabel.textContent = "Medium";

      high.setAttribute("type", "radio");
      high.setAttribute("name", "priority");
      high.setAttribute("value", "high");
      high.classList.add("priority" + idx);
      highLabel.setAttribute("for", "highPriority");
      highLabel.classList.add("ml-1");
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
      const taskName = _createNameField();
      const dueDate = _createDueDate();
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

  function newTaskButton(taskForm) {
    const newTask = document.createElement("div");
    newTask.textContent = "+";
    newTask.classList.add("add-task");
    newTask.classList.add("my-2");
    newTask.addEventListener("click", (e) => {
      e.preventDefault();
      taskForm.classList.toggle("new-task-form");
    })
    return newTask;
  }
  
  return { create, newTaskButton }
})();

export default TaskForm;