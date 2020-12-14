const DOM = (() => {
  const content = document.getElementById("content");

  function createHeader() {
    const header = document.createElement("header");
    const textBox = document.createElement("div");

    textBox.textContent = "To-Do or Not To-Do";

    header.appendChild(textBox);
    content.appendChild(header);
  }

  function openTaskForm() {
    const form = document.createElement("form");
    const addBtn = _createAddBtn();  
    const dueDate = _createDueDate();
    const taskName = _createTextField("Task Name");
    const taskNote = _createTextArea("Notes about task");
    const priority = _createPriority();
      
    form.setAttribute("id", "task-form");

    function _createAddBtn() {
      const btn = document.createElement("btn");
      btn.textContent = "Add More";
      // btn.addEventListener("click", _addTextField);
      return btn;
    }

    function _createTextField(placeholder) {
      const formGroup = document.createElement("div");
      const input = document.createElement("input");
      
      input.setAttribute("type", "text");
      input.setAttribute("placeholder", placeholder);
  
      formGroup.appendChild(input);
      return formGroup;
    }

    function _createTextArea(placeholder) {
      const formGroup = document.createElement("div");
      const tarea = document.createElement("textarea");
      
      tarea.setAttribute("placeholder", placeholder);
      
      formGroup.appendChild(tarea);
      return formGroup;
    }

    function _createDueDate() {
      const formGroup = document.createElement("div");
      const input = document.createElement("input");

      input.setAttribute("type", "date");

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
      lowLabel.textContent = "Low"

      med.setAttribute("type", "radio");
      med.setAttribute("name", "priority");
      med.setAttribute("id", "medPriority");
      med.setAttribute("value", "med");
      medLabel.setAttribute("for", "medPriority");
      medLabel.textContent = "Medium"

      high.setAttribute("type", "radio");
      high.setAttribute("name", "priority");
      high.setAttribute("id", "highPriority");
      high.setAttribute("value", "high");
      highLabel.setAttribute("for", "highPriority");
      highLabel.textContent = "High"

      formGroup.appendChild(low);
      formGroup.appendChild(lowLabel);
      formGroup.appendChild(med);
      formGroup.appendChild(medLabel);
      formGroup.appendChild(high);
      formGroup.appendChild(highLabel);

      return formGroup;;
    }

    function _renderForm() {
      form.appendChild(addBtn);
      form.appendChild(dueDate);
      form.appendChild(taskName);
      form.appendChild(taskNote);
      form.appendChild(priority);

      content.appendChild(form);
    }
    _renderForm();
  }



 
  
  return { createHeader, openTaskForm }
})();

export default DOM;