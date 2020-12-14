const DOM = (() => {
  const content = document.getElementById("content");

  function createHeader() {
    const header = document.createElement("header");
    const textBox = document.createElement("div");

    textBox.textContent = "To-Do or Not To-Do";

    header.appendChild(textBox);
    content.appendChild(header);
  }

  function createForm() {
    // const 
  }

  return { createHeader, createForm }
})();

export default DOM;