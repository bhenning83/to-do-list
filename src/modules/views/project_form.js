import ProjectController from "../controllers/project_controller";

const ProjectForm = (() => {
  function render() {
    const content =   document.getElementById("content");
    const form =      document.createElement("form");
    const formGroup = document.createElement("div");
    const input =     document.createElement("input");
    const submit =    document.createElement("button")

    input.setAttribute("placeholder", "New Project");
    input.setAttribute("id", "new-project");
    input.setAttribute("type", "text");

    submit.setAttribute("type", "submit");
    submit.textContent = "Create"

    formGroup.appendChild(input);

    form.appendChild(formGroup);
    form.appendChild(submit);

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      ProjectController.formSubmit(form);
    });

    content.appendChild(form);
  }

  return { render }
})();

export default ProjectForm;