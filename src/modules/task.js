const Task = (name, dueDate, note, priority, project = "default") => {

  return { 
    name, 
    dueDate, 
    note, 
    priority, 
    project, 
  }
}


export default Task;