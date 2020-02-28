import React, {useContext} from "react";
import Project from "./Project";
import ProjectContext from "../../context/projects/ProjectContext";

const List = () => {

  // Extract projects from initial state
  const projectsContext = useContext(ProjectContext);
  const { projects } = projectsContext;

  // Validate if projects are empty
  if (projects.length === 0) return null;

  return (
    <ul className="listado-proyectos">
      {projects.map( project => (
        <Project
          key={project.id}
          project={project}
        />
      ))}
    </ul>
  )
};

export default List;