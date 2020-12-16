import TaskController from "../controllers/task_controller";
import ProjectController from "../controllers/project_controller"

const TaskForm = (() => {
  const content = document.getElementById("content");
  
  function renderTaskForm() {
    const form = document.createElement("form");

    let counter = 0;
    
      
    form.setAttribute("id", "task-form");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      TaskController.createTask(counter);
      form.remove();
      renderTaskForm();
    });

    function _createAddTaskBtn() {
      const btn = document.createElement("btn");
      btn.textContent = "Add a Task";
      btn.addEventListener("click", _renderForm);
      return btn;
    }

    function _createNameField() {
      const formGroup = document.createElement("div");
      const input = document.createElement("input");
      
      input.setAttribute("type", "text");
      input.setAttribute("id", "name" + counter);
      input.setAttribute("placeholder", "Task Name");
  
      formGroup.appendChild(input);
      return formGroup;
    }

    function _createNoteArea() {
      const formGroup = document.createElement("div");
      const tarea = document.createElement("textarea");

      tarea.setAttribute("placeholder", "Notes about task");
      tarea.setAttribute("id", "note" + counter);
      
      formGroup.appendChild(tarea);
      return formGroup;
    }

    function _createDueDate() {
      const formGroup = document.createElement("div");
      const input = document.createElement("input");

      input.setAttribute("type", "date");
      input.setAttribute("id", "duedate" + counter)

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
      low.setAttribute("name", "priority" + counter);
      low.setAttribute("id", "lowPriority" + counter);
      low.setAttribute("value", "low");
      lowLabel.setAttribute("for", "lowPriority" + counter);
      lowLabel.textContent = "Low";

      med.setAttribute("type", "radio");
      med.setAttribute("name", "priority" + counter);
      med.setAttribute("id", "medPriority" + counter);
      med.setAttribute("value", "med");
      medLabel.setAttribute("for", "medPriority" + counter);
      medLabel.textContent = "Medium";

      high.setAttribute("type", "radio");
      high.setAttribute("name", "priority" + counter);
      high.setAttribute("id", "highPriority" + counter);
      high.setAttribute("value", "high");
      highLabel.setAttribute("for", "highPriority" + counter);
      highLabel.textContent = "High";

      formGroup.appendChild(low);
      formGroup.appendChild(lowLabel);
      formGroup.appendChild(med);
      formGroup.appendChild(medLabel);
      formGroup.appendChild(high);
      formGroup.appendChild(highLabel);

      return formGroup;;
    }

    function _createProjectField() {
      const projects = ProjectController.getAllProjects();
      const formGroup =    document.createElement("div");
      const newProj =      document.createElement("input");
      const newProjLabel = document.createElement("label");
      const newProjField = document.createElement("input");

      newProj.setAttribute("type", "radio");
      newProj.setAttribute("id", "newProject");
      newProj.setAttribute("name", "project-select");
      newProjLabel.setAttribute("for", "newProject");
      newProjLabel.textContent = "New Project";
      newProjField.setAttribute("type", "text");
      newProjField.setAttribute("id", "newProjectName");
      newProjField.setAttribute("placeholder", "New Project Name");
      newProjField.style.display = "none";

      newProj.addEventListener("click", (e) => {
        newProjField.style.display = "block";
      });
      
      for (let i = 0; i < projects.length; i++) {
        const proj = document.createElement("input");
        const projLabel = document.createElement("label");
        proj.setAttribute("type", "radio");
        proj.setAttribute("name", "project-select");
        proj.setAttribute("value", `${projects[i].name}`);
        projLabel.setAttribute("for", `${projects[i].name}`);
        projLabel.textContent = `${projects[i].name}`;

        formGroup.appendChild(proj);
        formGroup.appendChild(projLabel);
      }

      formGroup.appendChild(newProj);
      formGroup.appendChild(newProjLabel);
      formGroup.appendChild(newProjField)

      form.appendChild(formGroup);
    }

    function _createSubmitBtn() {
      const btn = document.createElement("button");
      
      btn.setAttribute("type", "submit");
      btn.textContent = "Create";

      return btn;
    }

    function _createHiddenCount() {
      const count = document.createElement("input");

      count.setAttribute("type", "hidden");
      count.setAttribute("id", "count");
      count.setAttribute("value", 0);

      return count;
    }

    function _renderForm() {
      const dueDate = _createDueDate();
      const taskName = _createNameField();
      const taskNote = _createNoteArea();
      const priority = _createPriority();
      form.appendChild(dueDate);
      form.appendChild(taskName);
      form.appendChild(taskNote);
      form.appendChild(priority);
      
      content.appendChild(form);
      counter++;
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
    _createProjectField();
    _renderForm();
  }

  const test = document.createElement("button");
  test.textContent = "show tasks";
  test.addEventListener("click", (e) => {
    TaskController.test();

  });
  content.appendChild(test);
  return { renderTaskForm }
})();

export default TaskForm;