const Header = (() => {
  function createHeader() {
    const content = document.getElementById("content")
    const header = document.createElement("header");
    const textBox = document.createElement("h1");
    
    textBox.textContent = "To-Do or Not To-Do";
    header.classList.add("text-center");

    header.appendChild(textBox);
    content.appendChild(header);
  }
  return { createHeader }
})();

export default Header;
