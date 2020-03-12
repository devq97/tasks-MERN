import React, {useContext} from "react";
import TaskContext from "../../context/tasks/TaskContext";
import ProjectContext from "../../context/projects/ProjectContext";

const Task = ({task}) => {

  // Getting project context
  const projectsContext = useContext(ProjectContext);
  const { project } = projectsContext;

  // Getting task context
  const tasksContext = useContext(TaskContext);
  const { deleteTask, getTasks, changeTaskStatus } = tasksContext;

  // Destructuring project
  const [selectedProject] = project;

  // Delete task
  const handleDeleteTask = id => {
    deleteTask(id);
    getTasks(selectedProject.id);
  };

  // Handle to change task status
  const handleChangeTaskStatus = task => {
    task.status = !task.status;
    changeTaskStatus(task);
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
                onClick={() => handleChangeTaskStatus(task)}
              >
                Complete
              </button>
            )
          :
            (
              <button
                type="button"
                className="incompleto"
                onClick={() => handleChangeTaskStatus(task)}
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
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => handleDeleteTask(task.id)}
        >
          Delete
        </button>
      </div>

    </li>
  )
};

export default Task;
