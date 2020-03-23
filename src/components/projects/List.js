import React, {useContext, useEffect} from "react";
import Project from "./Project";
import ProjectContext from "../../context/projects/ProjectContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import AlertContext from "../../context/alerts/AlertContext";

const List = () => {

  // Extract projects from initial state
  const projectsContext = useContext(ProjectContext);
  const { message, projects, getProjects } = projectsContext;

  const alertContext = useContext(AlertContext);
  const { alert, showAlert } = alertContext;

  /**
   * Get projects when load component
   */
  useEffect( () => {

    // Check error exists
    if (message) {
      showAlert(message.msg, message.category);
    }
    getProjects();
    // eslint-disable-next-line
  }, [message]);

  /**
   * Validate if projects are empty
   */
  if (projects.length === 0) return <p>Projects are empty, start creating one</p>;

  return (
    <ul className="listado-proyectos">
      { alert ?
        (
          <div className={`alerta ${alert.category}`}>{alert.msg}</div>
        ) :
        null
      }
      <TransitionGroup>
        {projects.map( project => (
          <CSSTransition
            key={project._id}
            timeout={200}
            classNames="proyecto"
          >
            <Project
              project={project}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  )
};

export default List;
