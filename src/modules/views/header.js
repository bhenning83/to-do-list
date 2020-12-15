const Header = (() => {
  function createHeader() {
    const header = document.createElement("header");
    const textBox = document.createElement("div");
  
    textBox.textContent = "To-Do or Not To-Do";
  
    header.appendChild(textBox);
    content.appendChild(header);
  }
  return { createHeader }
})();

export default Header;
