import controller from './controller.js';

const DOM = (() => {
  const content = document.getElementById("content");

  function createHeader() {
    const header = document.createElement("header");
    const textBox = document.createElement("div");

    textBox.textContent = "To-Do or Not To-Do";

    header.appendChild(textBox);
    content.appendChild(header);
  }

  function newTaskForm() {
    const form = document.createElement("form");
      
    form.setAttribute("id", "task-form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      controller.createTask(form);
    });

    function _createAddTaskBtn() {
      const btn = document.createElement("btn");
      btn.textContent = "Add a Task";
      btn.addEventListener("click", _renderForm);
      return btn;
    }

    function _createTextField(placeholder) {
      const formGroup = document.createElement("div");
      const input = document.createElement("input");
      
      input.setAttribute("type", "text");
      input.setAttribute("id", "name");
      input.setAttribute("placeholder", placeholder);
  
      formGroup.appendChild(input);
      return formGroup;
    }

    function _createTextArea(placeholder) {
      const formGroup = document.createElement("div");
      const tarea = document.createElement("textarea");

      tarea.setAttribute("placeholder", placeholder);
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

    function _createSubmitBtn() {
      const btn = document.createElement("button");
      
      btn.setAttribute("type", "submit");
      btn.textContent = "Create";

      return btn;
    }

    function _renderForm() {
      const dueDate = _createDueDate();
      const taskName = _createTextField("Task Name");
      const taskNote = _createTextArea("Notes about task");
      const priority = _createPriority();
      form.appendChild(dueDate);
      form.appendChild(taskName);
      form.appendChild(taskNote);
      form.appendChild(priority);
      content.appendChild(form);
    }

    function _createSubmitBox() {
      const box = document.createElement("div");
      const addTaskBtn = _createAddTaskBtn();
      const submit = _createSubmitBtn();

      box.appendChild(addTaskBtn);
      box.appendChild(submit);
      form.appendChild(box);
    }

    _createSubmitBox();
    _renderForm();
  }
  
  function test() {
    const btn = document.createElement("button");
    btn.textContent = "test";

    btn.addEventListener("click", (e) => {
      e.preventDefault();
      controller.renderAllTasks();
    })

    content.appendChild(btn);
  }
  return { createHeader, newTaskForm, test }
})();

export default DOM;