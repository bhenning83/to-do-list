import TaskController from "../controllers/task_controller";
import TaskForm from "./task_form";

const EditTask = (() => {
  function render(obj, dom) {
    const form = TaskForm.create(obj.proj);
    const idx = obj.idx;

    form.classList.remove("new-task-form");
    form.classList.remove("order-undefined");
    form.removeAttribute("id", "task-formundefined");
    form.setAttribute("id", `form-${idx}`);
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
    note.removeAttribute("form", "task-formundefined");
    note.setAttribute("form", `form-${idx}`);
    btn.textContent = "Edit";
    btn.removeEventListener("submit", (e) => {
      e.preventDefault;
      TaskController.formSubmit();
    });
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      TaskController.editFormSubmit(form, obj);
    })

    dom.prepend(form);
  }

  return { render }
})();

export default EditTask