const Task = (name, dueDate, note, priority, idx, project = "Free Spirited") => {

  return { 
    name, 
    dueDate, 
    note, 
    priority, 
    idx,
    project
  }
}

export default Task;