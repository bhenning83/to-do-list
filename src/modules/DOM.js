const DOM = (() => {
  const content = document.getElementById("content");

  function createHeader() {
    const header = document.createElement("header");
    const textBox = document.createElement("div");

    textBox.textContent = "To-Do or Not To-Do";

    header.appendChild(textBox);
    content.appendChild(header);
  }

  function openProjectForm() {
    const form = document.createElement("form");
    const addBtn = _createAddBtn();  
    const formGroup = document.createElement("div");
    const input = document.createElement("input");
      
    input.setAttribute("placeholder", "Project Name");

    function _createAddBtn() {
      const btn = document.createElement("btn");
      btn.textContent = "Add More";
      btn.addEventListener("click", _addTextField);
      return btn;
    }

    function _addTextField() {
      const formGroup = document.createElement("div");
      const input = document.createElement("input");
      
      input.setAttribute("placeholder", "Set a task")
  
      formGroup.appendChild(input);
      form.appendChild(formGroup);
    }
  
    formGroup.appendChild(input);
    form.appendChild(formGroup);
    form.appendChild(addBtn);
    const initField = _addTextField();
    content.appendChild(form);
  }



 
  
  return { createHeader, openProjectForm }
})();

export default DOM;