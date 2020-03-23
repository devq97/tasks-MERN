import React, {useContext, useState, useEffect} from "react";
import ProjectContext from "../../context/projects/ProjectContext";
import TaskContext from "../../context/tasks/TaskContext";

const Form = () => {

  // Getting project context
  const projectsContext = useContext(ProjectContext);
  const { project } = projectsContext;

  // Getting task context
  const tasksContext = useContext(TaskContext);
  const { taskToEdit, error, addTask, validateTask, getTasks, editTask, cleanTaskToEdit } = tasksContext;

  /**
   * Observe if taskToEdit change
   */
  useEffect( () => {

    const addTaskToState = () => {
      if (taskToEdit !== null) {
        setTask(taskToEdit);
      } else {
        setTask({
          name: ''
        })
      }
    };
    addTaskToState();

  }, [taskToEdit]);

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

  /**
   * Get values of form
   * @param e
   */
  const handleChange = e => {
    setTask({
      ...task,
      [e.target.name] : e.target.value
    })
  };

  /**
   * Call add or edit task
   * @param e
   */
  const onSubmit = e => {
    e.preventDefault();

    // Validate form
    if (name.trim() === '') {
      validateTask();
      return;
    }

    // Check if the action is edit
    if (taskToEdit === null) {
      // Adding new task to state
      task.project = selectedProject._id;
      addTask(task);
    } else {
      // Edit task
      editTask(task);
      // Clean taskToEdit
      cleanTaskToEdit();
    }

    // Get and filter tasks
    getTasks(selectedProject._id);

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
            value={taskToEdit ? 'Edit Task' : 'Add Task'}
          />
        </div>
      </form>
      { error ? <p className="mensaje error">Task name is required</p> : null}
    </div>
  )
};

export default Form;
