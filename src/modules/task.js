const Task = (name, dueDate, note, priority, project = "Free Spirited") => {

  return { 
    name, 
    dueDate, 
    note, 
    priority, 
    project, 
  }
}

export default Task;