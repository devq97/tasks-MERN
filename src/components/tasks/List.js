import React, {Fragment, useContext} from "react";
import Task from "./Task";
import ProjectContext from "../../context/projects/ProjectContext";

const List = () => {

  // Getting state
  const projectsContext = useContext(ProjectContext);
  const { project } = projectsContext;

  // Validate if selected project is empty
  if (!project) return <h2>Choose Project</h2>

  // Extract selected project with array destructuring
  const [ selectedProject ] = project;

  const TASKS = [
    { id: 1, name: 'Choose Platform', status: true },
    { id: 2, name: 'Choose Colors', status: false },
    { id: 3, name: 'Choose Pay Platforms', status: false },
    { id: 4, name: 'Choose Hosting', status: true },
  ];

  return (
    <Fragment>
      <h2>Project: {selectedProject.name}</h2>
      <ul className="listado-tareas">
        {
          TASKS.length === 0 ?
            (<li className="tarea"><p>Don't have any tasks</p></li>)
          :
            (TASKS.map( task => (
              <Task
                key={task.id}
                task={task}
              />
            )))
        }
      </ul>

      <button
        type="button"
        className="btn btn-eliminar"
      >
        Delete Project &times;
      </button>
    </Fragment>
  )
};

export default List;