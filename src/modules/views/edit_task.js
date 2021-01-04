import TaskController from "../controllers/task_controller";
import TaskForm from "./task_form";

const EditTask = (() => {
  function render(obj, dom) {
    const form = TaskForm.create(obj.proj);

    form.classList.remove("new-task-form");
    form.classList.remove("order-undefined");
    dom.classList.remove("row");

    let name =    form.querySelector(".task-name input");
    let dueDate = form.querySelector(".task-date input");
    let note =    form.querySelector(".task-note textarea");
    let low =     form.querySelector(".pri-boxes .pri-box:nth-of-type(1) input");
    let med =     form.querySelector(".pri-boxes .pri-box:nth-of-type(2) input");
    let high =    form.querySelector(".pri-boxes .pri-box:nth-of-type(3) input");
    let btn =     form.querySelector("button");
    
    switch (obj.priority) {
      case "low": 
        low.setAttribute("checked", true);
        break;
      case "med": 
        med.setAttribute("checked", true);
        break;
      case "high":
        high.setAttribute("checked", true);
        break;
      }
    name.setAttribute("value", obj.name);
    dueDate.setAttribute("value", obj.dueDate);
    note.value = obj.note;
    btn.textContent = "Edit";

    dom.prepend(form);
  }

  return { render }
})();

export default EditTask