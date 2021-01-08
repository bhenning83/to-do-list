import Home from "./home";
import Clear from "./clear";


const AltView = (() => {
  function button(mode) {
    const btn =    document.createElement("button");
    const btnBox = document.createElement("div");
    btnBox.classList.add("col-auto");

    if (mode === "task") {
      btn.textContent = "Project Mode";
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        Clear.clearAll();
        Home.setMode("project");
        Home.render();
      })
    } else {
      btn.textContent = "Task Mode";
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        Clear.clearAll();
        Home.setMode("task");
        Home.render();
      })
    }
    btnBox.appendChild(btn);
    return btnBox;
  }

  return { button }
})();

export default AltView