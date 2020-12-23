import ProjectController from "../controllers/project_controller";

const ProjectForm = (() => {
  
  function render() {
    const content =   document.getElementById("content");
    const form =      document.createElement("form");
    const formGroup = document.createElement("div");
    const input =     document.createElement("input");
    const submit =    document.createElement("button");

    input.setAttribute("placeholder", "New Project");
    input.setAttribute("id", "new-project");
    input.setAttribute("type", "text");
    input.classList.add("mr-3")

    submit.setAttribute("type", "submit");
    submit.textContent = "Create";

    formGroup.classList.add("d-flex");

    formGroup.appendChild(input);
    formGroup.appendChild(submit)

    form.appendChild(formGroup);

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      ProjectController.formSubmit(form);
    });

    content.appendChild(form);
  }

  function edit(proj, projBox) {
    const form =      document.createElement("form");
    const formGroup = document.createElement("div");
    const input =     document.createElement("input");
    const submit =    document.createElement("button");

    input.setAttribute("placeholder", "Edit Project Name");
    input.setAttribute("value", proj.name);
    input.setAttribute("id", "newName");
    input.setAttribute("type", "text");

    formGroup.appendChild(input);

    form.appendChild(formGroup);

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      ProjectController.editSubmit(form, proj);
    });
    
    projBox.prepend(form);
  }

  return { render, edit }
})();

export default ProjectForm;