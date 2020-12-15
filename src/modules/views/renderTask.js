const content = document.getElementById("content");

function renderTask(obj) {
  const container = document.createElement("div");
  const name =      document.createElement("div");
  const date =      document.createElement("div");
  const note =      document.createElement("div");

  name.textContent = obj["name"];
  date.textContent = obj["dueDate"];
  note.textContent = obj["note"];

  container.appendChild(name);
  container.appendChild(date);
  container.appendChild(note);

  content.appendChild(container);
}

export {renderTask}