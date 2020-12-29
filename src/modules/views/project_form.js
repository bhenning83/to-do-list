import ProjectController from "../controllers/project_controller";

const ProjectForm = (() => {
  
  function render() {
    const content =   document.getElementById("content");
    const row =       document.createElement("div");
    const form =      document.createElement("form");
    const formGroup = document.createElement("div");
    const input =     document.createElement("input");
    const submit =    document.createElement("button");

    row.classList.add("row");

    form.classList.add("col-12")

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

    row.appendChild(form);

    content.appendChild(row);
  }

  function edit(proj, projBox) {
    const row =       document.createElement("div");
    const form =      document.createElement("form");
    const formGroup = document.createElement("div");
    const input =     document.createElement("input");
    const submit =    document.createElement("button");

    row.classList.add("row");

    input.setAttribute("placeholder", "Edit Project Name");
    input.setAttribute("value", proj.name);
    input.setAttribute("id", "newName");
    input.setAttribute("type", "text");
    input.classList.add("mr-3");

    submit.setAttribute("type", "submit");
    submit.textContent = "Edit";

    formGroup.appendChild(input);
    formGroup.appendChild(submit)

    form.appendChild(formGroup);

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      ProjectController.editSubmit(form, proj);
    });
    
    row.appendChild(form)
    projBox.prepend(row);
  }

  return { render, edit }
})();

export default ProjectForm;