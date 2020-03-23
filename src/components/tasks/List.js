import React, {Fragment, useContext} from "react";
import Task from "./Task";
import ProjectContext from "../../context/projects/ProjectContext";
import TaskContext from "../../context/tasks/TaskContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const List = () => {

  // Getting projects state
  const projectsContext = useContext(ProjectContext);
  const { project, deleteProject } = projectsContext;

  // Getting tasks state
  const tasksContext = useContext(TaskContext);
  const { taskProject } = tasksContext;

  /**
   * Validate if selected project is empty
   */
  if (!project) return <h2>Choose Project</h2>;

  // Extract selected project with array destructuring
  const [ selectedProject ] = project;

  /**
   * Delete a Project
   */
  const handleDeleteProject = () => {
    deleteProject(selectedProject._id);
  };

  return (
    <Fragment>
      <h2>Project: {selectedProject.name}</h2>
      <ul className="listado-tareas">
        {
          taskProject.length === 0 ?
            (<li className="tarea"><p>Don't have any tasks</p></li>)
          :
            <TransitionGroup>
              {
                (taskProject.map( task => (
                  <CSSTransition
                    key={task._id}
                    timeout={200}
                    classNames="tarea"
                  >
                    <Task
                      task={task}
                    />
                  </CSSTransition>
                )))
              }
            </TransitionGroup>
        }
      </ul>

      <button
        type="button"
        className="btn btn-eliminar"
        onClick={handleDeleteProject}
      >
        Delete Project &times;
      </button>
    </Fragment>
  )
};

export default List;
