import React, {useContext, useEffect} from "react";
import Project from "./Project";
import ProjectContext from "../../context/projects/ProjectContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const List = () => {

  // Extract projects from initial state
  const projectsContext = useContext(ProjectContext);
  const { projects, getProjects } = projectsContext;

  // Get projects when load component
  useEffect( () => {
    getProjects();
  }, []);

  // Validate if projects are empty
  if (projects.length === 0) return <p>Projects are empty, start creating one</p>;

  return (
    <ul className="listado-proyectos">
      <TransitionGroup>
        {projects.map( project => (
          <CSSTransition
            key={project.id}
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
