import ProjectController from "../controllers/project_controller";

const ProjectForm = (() => {
  const content =   document.getElementById("content");

  function render() {
    const form =      document.createElement("form");
    const formGroup = document.createElement("div");
    const input =     document.createElement("input");
    const submit =    document.createElement("button");

    input.setAttribute("placeholder", "New Project");
    input.setAttribute("id", "new-project");
    input.setAttribute("type", "text");

    submit.setAttribute("type", "submit");
    submit.textContent = "Create";

    formGroup.appendChild(input);

    form.appendChild(formGroup);
    form.appendChild(submit);

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      ProjectController.formSubmit(form);
    });

    content.appendChild(form);
  }

  function edit(proj, idx, projBox) {
    const form =      document.createElement("form");
    const formGroup = document.createElement("div");
    const input =     document.createElement("input");
    const submit =    document.createElement("button");

    form.classList.add("order-" + idx);


    input.setAttribute("placeholder", "Edit Project Name");
    input.setAttribute("value", proj.name);
    input.setAttribute("id", "new-project");
    input.setAttribute("type", "text");

    submit.setAttribute("type", "submit");
    submit.textContent = "Edit";

    formGroup.appendChild(input);

    form.appendChild(formGroup);
    form.appendChild(submit);

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      ProjectController.formSubmit(form);
    });
    console.log(projBox)
    projBox.prepend(form);
  }

  return { render, edit }
})();

export default ProjectForm;