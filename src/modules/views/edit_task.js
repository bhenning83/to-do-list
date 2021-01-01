import TaskController from "../controllers/task_controller";
import TaskForm from "./task_form";

const EditTask = (() => {
  function render(obj, dom) {
    const form = TaskForm.create(obj.proj);
    console.log("here");
    console.log(form);
  }

  return { render }
})();

export default EditTask