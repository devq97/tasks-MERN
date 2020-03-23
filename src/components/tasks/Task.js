import React, {useContext} from "react";
import TaskContext from "../../context/tasks/TaskContext";
import ProjectContext from "../../context/projects/ProjectContext";

const Task = ({task}) => {

  // Getting project context
  const projectsContext = useContext(ProjectContext);
  const { project } = projectsContext;

  // Getting task context
  const tasksContext = useContext(TaskContext);
  const { deleteTask, getTasks, addTaskToEdit, editTask } = tasksContext;

  // Destructuring project
  const [selectedProject] = project;

  /**
   * Delete task
   * @param id
   */
  const handleDeleteTask = id => {
    deleteTask(id, selectedProject._id);
    getTasks(selectedProject._id);
  };

  /**
   * Handle to change task status
   * @param task
   */
  const handleEditTask = task => {
    task.status = !task.status;
    editTask(task);
  };

  /**
   * Add task to edit
   * @param task
   */
  const handleAddTaskToEdit = task => {
    addTaskToEdit(task);
  };

  return (
    <li className="tarea sombra">
      <p>{task.name}</p>

      <div className="estado">
        {
          task.status ?
            (
              <button
                type="button"
                className="completo"
                onClick={() => handleEditTask(task)}
              >
                Complete
              </button>
            )
          :
            (
              <button
                type="button"
                className="incompleto"
                onClick={() => handleEditTask(task)}
              >
                Incomplete
              </button>
            )
        }
      </div>

      <div className="acciones">
        <button
          type="button"
          className="btn btn-primario"
          onClick={() => handleAddTaskToEdit(task)}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => handleDeleteTask(task._id)}
        >
          Delete
        </button>
      </div>

    </li>
  )
};

export default Task;
