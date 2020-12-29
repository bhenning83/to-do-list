import TaskController from "../controllers/task_controller";
// import TaskForm from "./task_form";

const EditTask = (() => {
  function render(obj, dom) {
    // const form = TaskForm.create(obj.proj, obj.idx)
    console.log(obj.project)
    const form = document.createElement("form");

    const noteBox = document.createElement("div");
    noteBox.classList.add("col-12");

    form.setAttribute("id", "edit-form-" + obj.name);
    form.classList.add("edit-task-form");
    form.classList.add("task-form");
    form.classList.add("row");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      TaskController.editFormSubmit(form, obj);
    })

    function _createNameField() {
      const formGroup = document.createElement("div");
      const input = document.createElement("input");
      
      input.setAttribute("type", "text");
      input.setAttribute("id", "newName");
      input.setAttribute("placeholder", "Edit Task Name");
      input.setAttribute("value", obj.name);
      input.required = true;
      
      formGroup.classList.add("task-name");
      formGroup.appendChild(input);
      return formGroup;
    }

    function _createDueDate() {
      const formGroup = document.createElement("div");
      const input = document.createElement("input");

      input.setAttribute("type", "date");
      input.setAttribute("id", "newDueDate")
      input.setAttribute("value", obj.dueDate)

      formGroup.classList.add("task-date");
      formGroup.appendChild(input);
      return formGroup;
    }

    function _createNoteArea() {
      const formGroup = document.createElement("div");
      const tarea = document.createElement("textarea");

      tarea.setAttribute("placeholder", "Notes about task");
      tarea.setAttribute("form", "edit-form-" + obj.name);
      tarea.value = obj.note;
      tarea.classList.add("w-100");

      formGroup.classList.add("task-note")
      formGroup.appendChild(tarea);
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
      lowLabel.setAttribute("for", "lowPriority");
      lowLabel.textContent = "Low";

      med.setAttribute("type", "radio");
      med.setAttribute("name", "priority");
      med.setAttribute("value", "med");
      medLabel.setAttribute("for", "medPriority");
      medLabel.textContent = "Medium";

      high.setAttribute("type", "radio");
      high.setAttribute("name", "priority");
      high.setAttribute("value", "high");
      highLabel.setAttribute("for", "highPriority");
      highLabel.textContent = "High";

      switch (obj.priority) {
        case "high":
          high.setAttribute("checked", true);
          break;
        case "med":
          med.setAttribute("checked", true);
          break;
        case "low":
          low.setAttribute("checked", true);
          break;
      }

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
      const box = document.createElement("div");
      
      btn.setAttribute("type", "submit");
      btn.textContent = "Edit";

      box.appendChild(btn);
      form.appendChild(box);
    }

    function _createSubmitBox() {
    
    }

    function _renderForm() {
      const dueDate = _createDueDate();
      const taskName = _createNameField();
      const taskNote = _createNoteArea();
      const priority = _createPriority();
      form.appendChild(taskName);
      form.appendChild(dueDate);
      noteBox.appendChild(taskNote);
      form.appendChild(noteBox);
      form.appendChild(priority);

      _createSubmitBtn();
      dom.appendChild(form)
    }
    
    _renderForm();
  }

  return { render }
})();

export default EditTask