import TaskController from "../controllers/task_controller"
const EditTask = (() => {
  function render(obj, dom) {
    const form = document.createElement("form");

    form.classList.add("task-form");

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
  
      formGroup.appendChild(input);
      return formGroup;
    }

    function _createNoteArea() {
      const formGroup = document.createElement("div");
      const tarea = document.createElement("input");

      tarea.setAttribute("placeholder", "Notes about task");
      tarea.setAttribute("id", "newNote");
      tarea.setAttribute("type", "textarea");
      tarea.setAttribute("value", obj.note);
      
      formGroup.appendChild(tarea);
      return formGroup;
    }

    function _createDueDate() {
      const formGroup = document.createElement("div");
      const input = document.createElement("input");

      input.setAttribute("type", "date");
      input.setAttribute("id", "newDueDate")
      input.setAttribute("value", obj.dueDate)

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
      low.setAttribute("name", "newPriority");
      low.setAttribute("id", "lowPriority");
      low.setAttribute("value", "low");
      lowLabel.setAttribute("for", "lowPriority");
      lowLabel.textContent = "Low";

      med.setAttribute("type", "radio");
      med.setAttribute("name", "newPriority");
      med.setAttribute("id", "medPriority");
      med.setAttribute("value", "med");
      medLabel.setAttribute("for", "medPriority");
      medLabel.textContent = "Medium";

      high.setAttribute("type", "radio");
      high.setAttribute("name", "newPriority");
      high.setAttribute("id", "highPriority");
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
      btn.textContent = "Edit";

      return btn;
    }

    function _createSubmitBox() {
      const box = document.createElement("div");
      const submit = _createSubmitBtn();

      box.appendChild(submit);
      form.appendChild(box);
    }

    function _renderForm() {
      const dueDate = _createDueDate();
      const taskName = _createNameField();
      const taskNote = _createNoteArea();
      const priority = _createPriority();
      form.appendChild(taskName);
      form.appendChild(dueDate);
      form.appendChild(taskNote);
      form.appendChild(priority);
      _createSubmitBox();
      dom.appendChild(form);
    }
    
    _renderForm();
  }

  return { render }
})();

export default EditTask