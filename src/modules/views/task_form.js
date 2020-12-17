import TaskController from "../controllers/task_controller";

const TaskForm = (() => {
  const content = document.getElementById("content");
  
  function render(proj) {
    const form = document.createElement("form");

    form.setAttribute("id", "task-form");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      TaskController.formSubmit(form);
    })

    function _createNameField() {
      const formGroup = document.createElement("div");
      const input = document.createElement("input");
      
      input.setAttribute("type", "text");
      input.setAttribute("id", "name");
      input.setAttribute("placeholder", "Task Name");
  
      formGroup.appendChild(input);
      return formGroup;
    }

    function _createNoteArea() {
      const formGroup = document.createElement("div");
      const tarea = document.createElement("textarea");

      tarea.setAttribute("placeholder", "Notes about task");
      tarea.setAttribute("id", "note");
      
      formGroup.appendChild(tarea);
      return formGroup;
    }

    function _createDueDate() {
      const formGroup = document.createElement("div");
      const input = document.createElement("input");

      input.setAttribute("type", "date");
      input.setAttribute("id", "duedate")

      formGroup.appendChild(input);
      return formGroup;
    }

    function _createPriority() {
      const formGroup = document.createElement("div");
      const low = document.createElement("input");
      const lowLabel = document.createElement("label");
      const med = document.createElement("input");
      const medLabel = document.createElement("label");
      const high = document.createElement("input");
      const highLabel = document.createElement("label");

      low.setAttribute("type", "radio");
      low.setAttribute("name", "priority");
      low.setAttribute("id", "lowPriority");
      low.setAttribute("value", "low");
      lowLabel.setAttribute("for", "lowPriority");
      lowLabel.textContent = "Low";

      med.setAttribute("type", "radio");
      med.setAttribute("name", "priority");
      med.setAttribute("id", "medPriority");
      med.setAttribute("value", "med");
      medLabel.setAttribute("for", "medPriority");
      medLabel.textContent = "Medium";

      high.setAttribute("type", "radio");
      high.setAttribute("name", "priority");
      high.setAttribute("id", "highPriority");
      high.setAttribute("value", "high");
      highLabel.setAttribute("for", "highPriority");
      highLabel.textContent = "High";

      formGroup.appendChild(low);
      formGroup.appendChild(lowLabel);
      formGroup.appendChild(med);
      formGroup.appendChild(medLabel);
      formGroup.appendChild(high);
      formGroup.appendChild(highLabel);

      return formGroup;;
    }

    function _createSubmitBtn() {
      const btn = document.createElement("button");
      
      btn.setAttribute("type", "submit");
      btn.textContent = "Create";

      return btn;
    }

    function _createProjectField() {
      const input = document.createElement("input");
      input.setAttribute("type", "hidden");
      input.setAttribute("id", "project");
      input.setAttribute("value", proj["name"]);
      
      return input;
    }

    function _renderForm() {
      const dueDate = _createDueDate();
      const taskName = _createNameField();
      const taskNote = _createNoteArea();
      const priority = _createPriority();
      const project = _createProjectField();
      form.appendChild(dueDate);
      form.appendChild(taskName);
      form.appendChild(taskNote);
      form.appendChild(priority);
      form.appendChild(project);
      
      content.appendChild(form);
    }

    function _createSubmitBox() {
      const box = document.createElement("div");
      const submit = _createSubmitBtn();

      box.appendChild(submit);
      form.appendChild(box);

    }

    _renderForm();
    _createSubmitBox();
  }

 

  const test = document.createElement("button");
  test.textContent = "show tasks";
  test.addEventListener("click", (e) => {
    TaskController.test();

  });
  content.appendChild(test);
  return { render }
})();

export default TaskForm;