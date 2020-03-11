import React, {useContext, useState} from "react";
import ProjectContext from "../../context/projects/ProjectContext";
import TaskContext from "../../context/tasks/TaskContext";

const Form = () => {

  // Getting project context
  const projectsContext = useContext(ProjectContext);
  const { project } = projectsContext;

  // Getting task context
  const tasksContext = useContext(TaskContext);
  const { error, addTask, validateTask, getTasks } = tasksContext;

  // State
  const [task, setTask] = useState({
    name: ''
  });

  // Destructuring state
  const { name } = task;

  // Validate if selected project is empty
  if (!project) return null;

  // Extract selected project with array destructuring
  const [ selectedProject ] = project;

  // Get values of form
  const handleChange = e => {
    setTask({
      ...task,
      [e.target.name] : e.target.value
    })
  };

  const onSubmit = e => {
    e.preventDefault();

    // Validate form
    if (name.trim() === '') {
      validateTask();
      return;
    }

    // Adding new task to state
    task.projectID = selectedProject.id;
    task.status = false;
    addTask(task);

    // Get and filter tasks
    getTasks(selectedProject.id);

    // Reset state
    setTask({
      name: ''
    })
  };

  return (
    <div className="formulario">
      <form
        onSubmit={onSubmit}
      >
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Task Name..."
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>

        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value="Add Task"
          />
        </div>
      </form>
      { error ? <p className="mensaje error">Task name is required</p> : null}
    </div>
  )
};

export default Form;
